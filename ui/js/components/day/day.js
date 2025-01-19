import { BaseWeatherElement } from '../base-weather-element.js'
import * as utils from '../../modules/utils/utils.js'
import * as domService from '../../modules/services/domService.js'
import { $ } from '../../modules/utils/selectors.js'
import { UVI_COLOR_MAP, UNITS_MAP } from '../../modules/constants.js'

const style = domService.createStyleElement(`
    @import "/js/components/day/day.css";
    @import "/css/pills.css";
`)

const define = (html) => {
    class DayWeather extends BaseWeatherElement {
        constructor() {
            super(style.cloneNode(true), html.cloneNode(true))

            this._weather = []
        }

        set weather(weather) {
            this._weather = weather

            $('#time', this.shadowRoot).textContent = utils.dayOfWeek(this.weather.dt)
            $('#icon', this.shadowRoot).src = `https://openweathermap.org/img/wn/${this.weather.weather[0].icon}@4x.png`
            $('#main', this.shadowRoot).textContent = this.weather.weather[0].main

            // temps
            $('#morn_temp-val', this.shadowRoot).textContent = `${Math.round(this.weather.temp.morn)}° ${UNITS_MAP[utils.getUnits()].temperature}`
            $('#day_temp-val', this.shadowRoot).textContent = `${Math.round(this.weather.temp.day)}° ${UNITS_MAP[utils.getUnits()].temperature}`
            $('#eve_temp-val', this.shadowRoot).textContent = `${Math.round(this.weather.temp.eve)}° ${UNITS_MAP[utils.getUnits()].temperature}`
            $('#night_temp-val', this.shadowRoot).textContent = `${Math.round(this.weather.temp.night)}° ${UNITS_MAP[utils.getUnits()].temperature}`
            $('#min_temp-val', this.shadowRoot).textContent = `${Math.round(this.weather.temp.min)}° ${UNITS_MAP[utils.getUnits()].temperature}`
            $('#max_temp-val', this.shadowRoot).textContent = `${Math.round(this.weather.temp.max)}° ${UNITS_MAP[utils.getUnits()].temperature}`

            // feels like
            $('#morn_feels_like-val', this.shadowRoot).textContent = `${Math.round(this.weather.feels_like.morn)}° ${UNITS_MAP[utils.getUnits()].temperature}`
            $('#day_feels_like-val', this.shadowRoot).textContent = `${Math.round(this.weather.feels_like.day)}° ${UNITS_MAP[utils.getUnits()].temperature}`
            $('#eve_feels_like-val', this.shadowRoot).textContent = `${Math.round(this.weather.feels_like.eve)}° ${UNITS_MAP[utils.getUnits()].temperature}`
            $('#night_feels_like-val', this.shadowRoot).textContent = `${Math.round(this.weather.feels_like.night)}° ${UNITS_MAP[utils.getUnits()].temperature}`

            // weather
            $('#clouds-val', this.shadowRoot).textContent = `${Math.round(this.weather.clouds)}%`
            $('#uvi-val', this.shadowRoot).textContent = `${Math.round(this.weather.uvi)}`
            $('#humidity-val', this.shadowRoot).textContent = `${Math.round(this.weather['humidity'])}%`
            $('#dew_point-val', this.shadowRoot).textContent = `${Math.round(this.weather['dew_point'])}° ${UNITS_MAP[utils.getUnits()].temperature}`
            $('#wind_speed-val', this.shadowRoot).textContent = `${Math.round(this.weather['wind_speed'])} ${UNITS_MAP[utils.getUnits()].windSpeed}`
            $('#wind_deg-val', this.shadowRoot).textContent = `${utils.getWindDirection(this.weather['wind_deg'])}`
            $('#wind_gust-val', this.shadowRoot).textContent = `${Math.round(this.weather.wind_gust)} ${UNITS_MAP[utils.getUnits()].windSpeed}`
            $('#pop-val', this.shadowRoot).textContent = `${Math.round(this.weather.pop * 100)}%`
            $('#pressure-val', this.shadowRoot).textContent = `${Math.round(this.weather['pressure'])} hPa`

            // sun & moon
            $('#sunrise-val', this.shadowRoot).textContent = utils.toLocaleTimeString(this.weather.sunrise)
            $('#sunset-val', this.shadowRoot).textContent = utils.toLocaleTimeString(this.weather.sunset)
            $('#moonrise-val', this.shadowRoot).textContent = utils.toLocaleTimeString(this.weather.moonrise)
            $('#moonset-val', this.shadowRoot).textContent = utils.toLocaleTimeString(this.weather.moonset)
            $('#moonphase-val', this.shadowRoot).textContent = utils.getMoonPhase(this.weather.moon_phase)

            const uviColor = Math.round(this.weather['uvi']) in UVI_COLOR_MAP ? UVI_COLOR_MAP[Math.round(this.weather['uvi'])] : 'uvi-extreme'

            $('#uvi-val', this.shadowRoot).classList.add(uviColor)

            // rain & snow
            if (this.weather.rain) {
                domService.createRainCells(this.weather.rain, this.shadowRoot)
            }

            if (this.weather.snow) {
                $('#pop-key', this.shadowRoot).textContent = '% Snow:'

                domService.createSnowCells(this.weather.snow, this.shadowRoot)
            }
        }

        get weather() {
            return this._weather
        }
    }

    customElements.define('day-weather', DayWeather)
}

domService.createHtmlElementV2('/js/components/day/day.html', define, {
    class: 'one-day'
})
