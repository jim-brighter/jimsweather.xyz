import { BaseWeatherElement } from '../base-weather-element.js';
import * as utils from '../../modules/utils.js';
import { $ } from '../../modules/selectors.js';

const style = utils.createStyleElement(`
    @import "/js/components/hourly-weather/hourly-weather.css";
`);

class HourlyWeather extends BaseWeatherElement {
    constructor() {
        super(style);

        this._weather = [];
        this._aqi = [];
    }

    connectedCallback() {
        const html = utils.createHtmlElement(``);
        html.id = 'hourly-container';
        this.shadowRoot.append(html);
    }

    set weather(weather) {
        this._weather = weather;
    }

    get weather() {
        return this._weather;
    }

    set aqi(aqi) {
        this._aqi = aqi;
    }

    get aqi() {
        return this._aqi;
    }

    setWeatherAndAqi(weather, aqi) {
        this.weather = weather;
        this.aqi = aqi;

        const hourlyContainer = $('#hourly-container', this.shadowRoot);

        for (let i = 0; i < this.weather.length; i++) {
            const hour = this.weather[i];
            const aqi = this.aqi[i];

            const oneHour = document.createElement('hour-weather');
            hourlyContainer.append(oneHour);
            oneHour.id = `hour-${hour.dt}`;
            oneHour.setWeatherAndAqi(hour, aqi);
        }
    }
}

customElements.define('hourly-weather', HourlyWeather);
