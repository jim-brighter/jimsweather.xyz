import { BaseWeatherElement } from '../base-weather-element.js';
import * as utils from '../../modules/utils/utils.js';
import * as domService from '../../modules/services/domService.js';
import { $ } from '../../modules/utils/selectors.js';
import { UNITS_MAP } from '../../modules/constants.js';
import * as weatherService from '../../modules/services/weatherService.js';

const style = domService.createStyleElement(`
    @import "/js/components/current-weather/current-weather.css";
`);

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
            edit.className = 'btn';
            edit.title = 'Change Location';
            edit.onclick = () => {
                this.changeLocation();
            }

            const refresh = document.createElement('button');
            refresh.textContent = '🔄';
            refresh.id = 'refresh-btn';
            refresh.className = 'btn';
            refresh.title = 'Refresh Location';
            refresh.onclick = () => {
                this.refreshLocation()
            }

            $('#locality', this.shadowRoot).appendChild(edit);
            $('#locality', this.shadowRoot).appendChild(refresh);
        }

        get locality() {
            return this._locality;
        }

        setLocalityAndUpdatedTime(locality, updatedAt) {
            this.locality = locality;

            $('#locality', this.shadowRoot).title = `Updated at ${utils.toLocaleString(updatedAt)}`;
        }

        changeLocation() {
            const zip = prompt('Enter zip code:');
            if (zip === null) {
                return;
            }

            const locationData = {
                zip,
                time: new Date().valueOf()
            };

            weatherService.getWeather(locationData);
        }

        changeUnits() {
            utils.changeUnits();
        }

        refreshLocation() {
            utils.refreshLocation();
        }
    }

    customElements.define('current-weather', CurrentWeather);
}

domService.createHtmlElementV2('/js/components/current-weather/current-weather.html', define, {
    id: 'current-weather-parent'
});
