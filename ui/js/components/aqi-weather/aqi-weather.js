import { BaseWeatherElement } from '../base-weather-element.js';
import * as utils from '../../modules/utils.js';
import { $ } from '../../modules/selectors.js';
import { AQI_COLOR_MAP } from '../../modules/constants.js';

const style = utils.createStyleElement(`
    @import "/js/components/aqi-weather/aqi-weather.css";
`);

class AqiWeather extends BaseWeatherElement {
    constructor() {
        super(style);

        this._aqi = {};
    }

    connectedCallback() {
        fetch('/js/components/aqi-weather/aqi-weather.html')
        .then(response => response.text())
        .then(data => {
            const html = utils.createHtmlElement(data);
            this.shadowRoot.append(html);
        })
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
