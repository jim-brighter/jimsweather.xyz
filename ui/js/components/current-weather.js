import { BaseWeatherElement } from './base-weather-element.js';
import * as utils from '../modules/utils.js';
import { $ } from '../modules/selectors.js';

const style = utils.createStyleElement(`
    #current-weather-parent {
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: 100%;
    }

    #left {
        grid-column-start: 1;
        grid-column-end: 2;
    }

    #right {
        grid-column-start: 2;
        grid-column-end: 3;
    }

    h1, h3, h5 {
        margin: 0;
        padding: 0rem 0rem 1rem 0rem;
        display: block;
    }

    img {
        width: 6rem;
        float: right;
    }

    @media screen and (max-width: 768px) {
        img {
            width: 3rem;
        }

        h1, h3, h5 {
            padding: 0rem;
        }
    }
`);

const html = utils.createHtmlElement(`
    <div id="left">
        <h1 id="temp"></h1>
        <h3 id="main"></h3>
        <h5 id="locality"></h5>
    </div>
    <div id="right">
        <img id="icon"/>
    </div>
`);
html.id = 'current-weather-parent';

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
