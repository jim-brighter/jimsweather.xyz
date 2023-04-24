import { BaseWeatherElement } from '../base-weather-element.js';
import * as utils from '../../modules/utils.js';
import { $ } from '../../modules/selectors.js';
import { UNITS_MAP } from '../../modules/constants.js';

const style = utils.createStyleElement(`
    @import "/js/components/current-weather/current-weather.css";
`);

fetch('/js/components/current-weather/current-weather.html')
.then(response => response.text())
.then(data => {
    const html = utils.createHtmlElement(data);
    html.id = 'current-weather-parent';

    define(html);
});

const define = (html) => {
    class CurrentWeather extends BaseWeatherElement {
        constructor() {
            super(style, html);

            this._weather = {};
            this._locality = '';
        }

        set weather(weather) {
            this._weather = weather;

            $('#temp', this.shadowRoot).textContent = `${Math.round(this.weather.temp)}° ${UNITS_MAP[utils.getUnits()].temperature}`;
            $('#icon', this.shadowRoot).src = `https://openweathermap.org/img/wn/${this.weather.weather[0].icon}@4x.png`;
            $('#main', this.shadowRoot).textContent = `${this.weather.weather[0].main}`;

            $('#temp-link', this.shadowRoot).onclick = () => {
                this.changeUnits();
            }
        }

        get weather() {
            return this._weather;
        }

        set locality(locality) {
            this._locality = locality;

            $('#locality', this.shadowRoot).textContent = this.locality;

            const edit = document.createElement('button');
            edit.textContent = '✏️';
            edit.id = 'edit-btn';
            edit.title = 'Change Location';
            edit.onclick = () => {
                this.changeLocation();
            }

            $('#locality', this.shadowRoot).appendChild(edit);
        }

        get locality() {
            return this._locality;
        }

        changeLocation() {
            const zip = prompt('Enter zip code:');
            if (zip === null) {
                return;
            }
            utils.setWeather({
                zip: zip
            });
        }

        changeUnits() {
            utils.changeUnits();
        }
    }

    customElements.define('current-weather', CurrentWeather);
}
