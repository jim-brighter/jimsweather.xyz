import { BaseWeatherElement } from '../base-weather-element.js';
import * as utils from '../../modules/utils.js';
import { $ } from '../../modules/selectors.js';
import { AQI_COLOR_MAP, AQI_DESC_MAP } from '../../modules/constants.js';

const style = utils.createStyleElement(`
    @import "/js/components/aqi-weather/aqi-weather.css";
`);

fetch('/js/components/aqi-weather/aqi-weather.html')
.then(response => response.text())
.then(data => {
    const html = utils.createHtmlElement(data);

    define(html);
});

const define = (html) => {
    class AqiWeather extends BaseWeatherElement {
        constructor() {
            super(style, html);

            this._aqi = {};
        }

        set aqi(aqi) {
            this._aqi = aqi;

            $('#aqi', this.shadowRoot).textContent = `${this.aqi ? this.aqi.main.aqi : 'error'} - ${AQI_DESC_MAP[this.aqi ? this.aqi.main.aqi : 5]}`;
            $('aqi-weather').classList.add(AQI_COLOR_MAP[this.aqi ? this.aqi.main.aqi : 5]);

            $("#pollutant-co-val", this.shadowRoot).innerHTML = `${this.aqi.components.co} μg/m<sup>3</sup>`;
            $("#pollutant-no-val", this.shadowRoot).innerHTML = `${this.aqi.components.no} μg/m<sup>3</sup>`;
            $("#pollutant-no2-val", this.shadowRoot).innerHTML = `${this.aqi.components.no2} μg/m<sup>3</sup>`;
            $("#pollutant-o3-val", this.shadowRoot).innerHTML = `${this.aqi.components.o3} μg/m<sup>3</sup>`;
            $("#pollutant-so2-val", this.shadowRoot).innerHTML = `${this.aqi.components.so2} μg/m<sup>3</sup>`;
            $("#pollutant-pm2_5-val", this.shadowRoot).innerHTML = `${this.aqi.components.pm2_5} μg/m<sup>3</sup>`;
            $("#pollutant-pm10-val", this.shadowRoot).innerHTML = `${this.aqi.components.pm10} μg/m<sup>3</sup>`;
            $("#pollutant-nh3-val", this.shadowRoot).innerHTML = `${this.aqi.components.nh3} μg/m<sup>3</sup>`;
        }

        get aqi() {
            return this._aqi;
        }
    }

    customElements.define('aqi-weather', AqiWeather);
}
