import { BaseWeatherElement } from '../base-weather-element.js';
import * as utils from '../../modules/utils.js';
import { $ } from '../../modules/selectors.js';

const style = utils.createStyleElement(`
    @import "/js/components/current-weather/current-weather.css";
`);

class CurrentWeather extends BaseWeatherElement {
    constructor() {
        super(style);

        this._weather = {};
        this._locality = '';
    }

    connectedCallback() {
        fetch('/js/components/current-weather/current-weather.html')
        .then(response => response.text())
        .then(data => {
            const html = utils.createHtmlElement(data);
            html.id = 'current-weather-parent';
            this.shadowRoot.append(html);
        });
    }

    set weather(weather) {
        this._weather = weather;

        $('#temp', this.shadowRoot).textContent = `${Math.round(this.weather.temp)}° F`;
        $('#icon', this.shadowRoot).src = `https://openweathermap.org/img/wn/${this.weather.weather[0].icon}@4x.png`;
        $('#main', this.shadowRoot).textContent = `${this.weather.weather[0].main}`;
    }

    get weather() {
        return this._weather;
    }

    set locality(locality) {
        this._locality = locality;

        $('#locality', this.shadowRoot).textContent = this.locality;
    }

    get locality() {
        return this._locality;
    }
}

customElements.define('current-weather', CurrentWeather);
