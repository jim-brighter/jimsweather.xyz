import { BaseWeatherElement } from '../base-weather-element.js'
import * as utils from '../../modules/utils/utils.js'
import * as domService from '../../modules/services/domService.js'
import { $, $$ } from '../../modules/utils/selectors.js'
import { DAY_OF_WEEK_MAP, UNITS_MAP, UVI_COLOR_MAP } from '../../modules/constants.js'

const define = (style, html) => {
  class CurrentWeatherDetails extends BaseWeatherElement {
    constructor() {
      super(style, html)

      this._weather = {}
      this._alerts = []
      this._modalOpen = false
    }

    get weather() {
      return this._weather
    }

    set weather(weather) {
      this._weather = weather

      this.setWeatherDetails()
      this.setUVDetails()
      this.setPrecipitationDetails()
    }

    setWeatherDetails() {
      $('#sunrise-val', this.shadowRoot).textContent = utils.toLocaleTimeString(this.weather['sunrise'])
      $('#uvi-val', this.shadowRoot).textContent = Math.round(this.weather['uvi'])
      $('#sunset-val', this.shadowRoot).textContent = utils.toLocaleTimeString(this.weather['sunset'])
      $('#clouds-val', this.shadowRoot).textContent = `${Math.round(this.weather['clouds'])}%`
      $('#visibility-val', this.shadowRoot).textContent = `${Math.round(this.weather['visibility'] / 1000)} km`
      $('#pressure-val', this.shadowRoot).textContent = `${Math.round(this.weather['pressure'])} hPa`
      $('#wind_speed-val', this.shadowRoot).textContent = `${Math.round(this.weather['wind_speed'])} ${UNITS_MAP[utils.getUnits()].windSpeed}`
      $('#humidity-val', this.shadowRoot).textContent = `${Math.round(this.weather['humidity'])}%`
      $('#wind_deg-val', this.shadowRoot).textContent = `${utils.getWindDirection(this.weather['wind_deg'])}`
      $('#dew_point-val', this.shadowRoot).textContent = `${Math.round(this.weather['dew_point'])}° ${UNITS_MAP[utils.getUnits()].temperature}`
      $('#wind_gust-val', this.shadowRoot).textContent = typeof (this.weather.wind_gust) === 'number' ? `${Math.round(this.weather.wind_gust)} ${UNITS_MAP[utils.getUnits()].windSpeed}` : ''
    }

    setUVDetails() {
      const uviColor = Math.round(this.weather['uvi']) in UVI_COLOR_MAP ? UVI_COLOR_MAP[Math.round(this.weather['uvi'])] : 'uvi-extreme'
      $('#uvi-val', this.shadowRoot).classList.add(uviColor)
    }

    setPrecipitationDetails() {
      if (this.weather.rain && this.weather.rain['1h']) {
        domService.createRainCells(this.weather.rain['1h'], this.shadowRoot)
      }

      if (this.weather.snow && this.weather.snow['1h']) {
        domService.createSnowCells(this.weather.snow['1h'], this.shadowRoot)
      }
    }

    get alerts() {
      return this._alerts
    }

    set alerts(alerts) {
      this._alerts = alerts

      this.cleanupAlerts()

      if (this.alerts.length === 0) {
        return
      }

      this.createAlertsRow()

      const modal = this.setupModal()

      this.alerts.forEach((a) => {
        const alertDiv = this.createAlert(a)
        modal.append(alertDiv)
      })
    }

    cleanupAlerts() {
      $$('.alert-row', this.shadowRoot).forEach((e) => e.remove())
      $$('.alert', this.shadowRoot).forEach((e) => e.remove())
    }

    createAlertsRow() {
      const alertsTitle = `⚠️ ${this.alerts[0].event}${this.alerts.length > 1 ? ` and ${this.alerts.length - 1} other ${this.alerts.length > 2 ? 'alerts' : 'alert'}` : ''}`

      const alertCell = this.createCell(alertsTitle)

      const alertRow = this.createRow(alertCell)

      alertRow.addEventListener('click', this.handleClick)

      $('#weather-details', this.shadowRoot).prepend(alertRow)
    }

    createCell(alertsTitle) {
      const alertCell = document.createElement('td')
      alertCell.colSpan = 4
      alertCell.textContent = alertsTitle
      alertCell.classList.add('alert-cell')
      return alertCell
    }

    createRow(alertCell) {
      const alertRow = document.createElement('tr')
      alertRow.appendChild(alertCell)
      alertRow.classList.add('alert-row')
      return alertRow
    }

    setupModal() {
      $('.modal', this.shadowRoot).addEventListener('click', this.handleClick)

      const modal = $('.modal-content', this.shadowRoot)
      modal.innerHTML = ''
      return modal
    }

    createAlert(a) {
      const event = document.createElement('h3')
      event.textContent = a.event

      const startTime = this.createStartTime(a)

      const endTime = this.createEndTime(a)

      const description = this.createDescription(a)

      const alertDiv = this.createAlertDiv(event, startTime, endTime, description)
      return alertDiv
    }

    createStartTime(a) {
      const startTime = document.createElement('h5')
      const startDate = new Date(a.start * 1000)
      startTime.textContent = `Starting: ${DAY_OF_WEEK_MAP[startDate.getDay()]}, ${startDate.toLocaleDateString()}, ${startDate.toLocaleTimeString()}`
      return startTime
    }

    createEndTime(a) {
      const endTime = document.createElement('h5')
      const endDate = new Date(a.end * 1000)
      endTime.textContent = `Ending: ${DAY_OF_WEEK_MAP[endDate.getDay()]}, ${endDate.toLocaleDateString()}, ${endDate.toLocaleTimeString()}`
      return endTime
    }

    createDescription(a) {
      const description = document.createElement('div')
      const descriptionLines = a.description.split('\n\n')
      descriptionLines.forEach(l => {
        const cleanedText = l.replaceAll('\n', ' ').replace('...', ': ').replaceAll(' - ', '<br>- ')
        const paragraph = document.createElement('p')
        paragraph.innerHTML = cleanedText

        description.append(paragraph)
      })
      return description
    }

    createAlertDiv(event, startTime, endTime, description) {
      const alertDiv = document.createElement('div')
      alertDiv.classList.add('alert')
      alertDiv.append(event)
      alertDiv.append(startTime)
      alertDiv.append(endTime)
      alertDiv.append(description)
      return alertDiv
    }

    handleClick(event) {
      event.preventDefault()

      const currentWeatherDetails = $('current-weather-details')

      if (!(event.target.classList.contains('modal') || event.target.classList.contains('alert-cell'))) {
        return
      }

      if (currentWeatherDetails._modalOpen) {
        $('.modal', currentWeatherDetails.shadowRoot).classList.remove('show')
        $('.modal-content', currentWeatherDetails.shadowRoot).classList.remove('show')

        Array.from($$('.tile')).forEach((n) => {
          n.classList.add('tile-hover')
        })

        currentWeatherDetails._modalOpen = false
      } else {
        Array.from($$('.tile')).forEach((n) => {
          n.classList.remove('tile-hover')
        })

        $('.modal', currentWeatherDetails.shadowRoot).classList.add('show')
        $('.modal-content', currentWeatherDetails.shadowRoot).classList.add('show')

        currentWeatherDetails._modalOpen = true
      }
    }
  }

  customElements.define('current-weather-details', CurrentWeatherDetails)
}

const htmlFile = '/js/components/current-weather-details/current-weather-details.html'
const cssFiles = ['/js/components/current-weather-details/current-weather-details.css', '/css/pills.css']
const options = {
  id: 'current-weather-details-container'
}

domService.createComponentElement(htmlFile, cssFiles, define, options)
