import { BaseWeatherElement } from './base-weather-element.js';
import * as utils from '../modules/utils.js';
import { $ } from '../modules/selectors.js';
import { AQI_COLOR_MAP } from '../modules/constants.js';

const style = utils.createStyleElement(`
    div {
        color: white;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        text-align: center;
    }

    h6, h1 {
        margin: 0;
        padding: 0;
    }
`);

const html = utils.createHtmlElement(`
    <h6 id="aqi-title">AQI</h6>
    <h1 id="aqi"></h1>
`);

class AqiWeather extends BaseWeatherElement {
    constructor() {
        super(style, html);

        this._aqi = {};
    }

    set aqi(aqi) {
        this._aqi = aqi;

        $('#aqi', this.shadowRoot).textContent = this.aqi.main.aqi;
        $('aqi-weather').classList.add(AQI_COLOR_MAP[this.aqi.main.aqi]);
    }

    get aqi() {
        return this._aqi;
    }
}

customElements.define('aqi-weather', AqiWeather);
