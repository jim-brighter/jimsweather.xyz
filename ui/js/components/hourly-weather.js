import { BaseWeatherElement } from './base-weather-element.js';
import * as utils from '../modules/utils.js';
import { $ } from '../modules/selectors.js';

const style = utils.createStyleElement(`
    #hourly-container {
        width: 100%;
        height: 100%;
        overflow: scroll;
    }
`);

const html = utils.createHtmlElement(``);
html.id = 'hourly-container';

class HourlyWeather extends BaseWeatherElement {
    constructor() {
        super(style, html);

        this._weather = [];
        this._aqi = [];
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
            oneHour.id = `hour-${hour.dt}`;
            oneHour.setWeatherAndAqi(hour, aqi);

            hourlyContainer.append(oneHour);
        }
    }
}

customElements.define('hourly-weather', HourlyWeather);
