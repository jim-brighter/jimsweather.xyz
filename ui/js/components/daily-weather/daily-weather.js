import { BaseWeatherElement } from '../base-weather-element.js';
import * as utils from '../../modules/utils.js';
import { $ } from '../../modules/selectors.js';

const style = utils.createStyleElement(`
    @import "/js/components/daily-weather/daily-weather.css";
`);

class DailyWeather extends BaseWeatherElement {
    constructor() {
        super(style);

        this._weather = [];
    }

    connectedCallback() {
        const html = utils.createHtmlElement(``);
        html.id = 'daily-container';
        this.shadowRoot.append(html);
    }

    set weather(weather) {
        this._weather = weather;

        const dailyContainer = $('#daily-container', this.shadowRoot);

        for (let day of this.weather) {
            const oneDay = document.createElement('day-weather');
            dailyContainer.append(oneDay);
            oneDay.id = `day-${day.dt}`;
            oneDay.weather = day;
        }
    }

    get weather() {
        return this._weather;
    }
}

customElements.define('daily-weather', DailyWeather);
