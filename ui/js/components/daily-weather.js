import { BaseWeatherElement } from './base-weather-element.js';
import * as utils from '../modules/utils.js';
import { $ } from '../modules/selectors.js';

const style = utils.createStyleElement(`
    #daily-container {
        width: 100%;
        height: 100%;
        overflow: scroll;
    }
`);

const html = utils.createHtmlElement(``);
html.id = 'daily-container';

class DailyWeather extends BaseWeatherElement {
    constructor() {
        super(style, html);

        this._weather = [];
    }

    set weather(weather) {
        this._weather = weather;

        const dailyContainer = $('#daily-container', this.shadowRoot);

        for (let day of this.weather) {
            const oneDay = document.createElement('day-weather');
            oneDay.id = `day-${day.dt}`;
            oneDay.weather = day;

            dailyContainer.append(oneDay);
        }
    }

    get weather() {
        return this._weather;
    }
}

customElements.define('daily-weather', DailyWeather);
