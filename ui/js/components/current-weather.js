import { BaseWeatherElement } from './base-weather-element.js';
import * as utils from '../modules/utils.js';
import { $ } from '../modules/selectors.js';

const style = utils.createStyleElement(`
    h1 {
        margin: 0;
        padding: 0;
        display: inline-block;
    }

    img {
        width: 6rem;
        float: right;
    }
`);

const html = utils.createHtmlElement(`
    <h1 id="temp"></h1>
    <img id="icon"/>
    <h3 id="main"></h3>
    <h5 id="locality"></h5>
`);

class CurrentWeather extends BaseWeatherElement {
    constructor() {
        super(style, html);

        this._weather = {};
        this._locality = '';
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
