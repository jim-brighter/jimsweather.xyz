import { BaseWeatherElement } from '../base-weather-element.js'
import * as domService from '../../modules/services/domService.js'
import { $ } from '../../modules/utils/selectors.js'

const style = domService.createStyleElement(`
    @import "/js/components/daily-weather/daily-weather.css";
`)

const define = (html) => {
    class DailyWeather extends BaseWeatherElement {
        constructor() {
            super(style, html)

            this._weather = []
        }

        set weather(weather) {
            this._weather = weather

            const dailyContainer = $('#daily-container', this.shadowRoot)

            dailyContainer.replaceChildren()

            for (let day of this.weather) {
                const oneDay = document.createElement('day-weather')
                customElements.whenDefined('day-weather').then(() => {
                    dailyContainer.append(oneDay)
                    oneDay.id = `day-${day.dt}`
                    oneDay.weather = day
                })
            }
        }

        get weather() {
            return this._weather
        }
    }

    customElements.define('daily-weather', DailyWeather)
}

domService.createHtmlElementV2(null, define, {
    id: 'daily-container'
})
