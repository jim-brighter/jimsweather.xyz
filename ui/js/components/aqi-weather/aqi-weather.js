import { BaseWeatherElement } from '../base-weather-element.js'
import * as domService from '../../modules/services/domService.js'
import { $ } from '../../modules/utils/selectors.js'
import { AQI_COLOR_MAP, AQI_DESC_MAP } from '../../modules/constants.js'

const microgramsPerCubicMeter = 'μg/m<sup>3</sup>'

const style = domService.createStyleElement('/js/components/aqi-weather/aqi-weather.css')

const define = (html) => {
    class AqiWeather extends BaseWeatherElement {
        constructor() {
            super(style, html)

            this._aqi = {}
        }

        set aqi(aqi) {
            this._aqi = aqi

            $('#aqi', this.shadowRoot).textContent = `${this.aqi ? this.aqi.main.aqi : 'error'} - ${AQI_DESC_MAP[this.aqi ? this.aqi.main.aqi : 5]}`
            $('aqi-weather').classList.add(AQI_COLOR_MAP[this.aqi ? this.aqi.main.aqi : 5])

            $("#pollutant-co-val", this.shadowRoot).innerHTML = `${this.aqi.components.co} ${microgramsPerCubicMeter}`
            $("#pollutant-no-val", this.shadowRoot).innerHTML = `${this.aqi.components.no} ${microgramsPerCubicMeter}`
            $("#pollutant-no2-val", this.shadowRoot).innerHTML = `${this.aqi.components.no2} ${microgramsPerCubicMeter}`
            $("#pollutant-o3-val", this.shadowRoot).innerHTML = `${this.aqi.components.o3} ${microgramsPerCubicMeter}`
            $("#pollutant-so2-val", this.shadowRoot).innerHTML = `${this.aqi.components.so2} ${microgramsPerCubicMeter}`
            $("#pollutant-pm2_5-val", this.shadowRoot).innerHTML = `${this.aqi.components.pm2_5} ${microgramsPerCubicMeter}`
            $("#pollutant-pm10-val", this.shadowRoot).innerHTML = `${this.aqi.components.pm10} ${microgramsPerCubicMeter}`
            $("#pollutant-nh3-val", this.shadowRoot).innerHTML = `${this.aqi.components.nh3} ${microgramsPerCubicMeter}`
        }

        get aqi() {
            return this._aqi
        }
    }

    customElements.define('aqi-weather', AqiWeather)
}

domService.createHtmlElementV2('/js/components/aqi-weather/aqi-weather.html', define)
