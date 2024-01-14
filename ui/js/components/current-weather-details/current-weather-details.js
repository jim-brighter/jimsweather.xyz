import { BaseWeatherElement } from '../base-weather-element.js';
import * as utils from '../../modules/utils.js'
import { $ } from '../../modules/selectors.js';
import { UVI_COLOR_MAP, UNITS_MAP } from '../../modules/constants.js';

const style = utils.createStyleElement(`
    @import "/js/components/current-weather-details/current-weather-details.css";
    @import "/css/pills.css";
`);

const define = (html) => {
    class CurrentWeatherDetails extends BaseWeatherElement {
        constructor() {
            super(style, html);

            this._weather = {};
        }

        set weather(weather) {
            this._weather = weather;

            $('#sunrise-val', this.shadowRoot).textContent = utils.shortTime(this.weather['sunrise']);
            $('#uvi-val', this.shadowRoot).textContent = Math.round(this.weather['uvi']);
            $('#sunset-val', this.shadowRoot).textContent = utils.shortTime(this.weather['sunset']);
            $('#clouds-val', this.shadowRoot).textContent = `${Math.round(this.weather['clouds'])}%`;
            $('#feels_like-val', this.shadowRoot).textContent = `${Math.round(this.weather['feels_like'])}° ${UNITS_MAP[utils.getUnits()].temperature}`;
            $('#visibility-val', this.shadowRoot).textContent = `${Math.round(this.weather['visibility'] / 1000)} km`;
            $('#pressure-val', this.shadowRoot).textContent = `${Math.round(this.weather['pressure'])} hPa`;
            $('#wind_speed-val', this.shadowRoot).textContent = `${Math.round(this.weather['wind_speed'])} ${UNITS_MAP[utils.getUnits()].windSpeed}`;
            $('#humidity-val', this.shadowRoot).textContent = `${Math.round(this.weather['humidity'])}%`;
            $('#wind_deg-val', this.shadowRoot).textContent = `${utils.getWindDirection(this.weather['wind_deg'])}`;
            $('#dew_point-val', this.shadowRoot).textContent = `${Math.round(this.weather['dew_point'])}° ${UNITS_MAP[utils.getUnits()].temperature}`;
            $('#wind_gust-val', this.shadowRoot).textContent = typeof(this.weather.wind_gust) === 'number' ? `${Math.round(this.weather.wind_gust)} ${UNITS_MAP[utils.getUnits()].windSpeed}` : '';

            const uviColor = Math.round(this.weather['uvi']) in UVI_COLOR_MAP ? UVI_COLOR_MAP[Math.round(this.weather['uvi'])] : 'uvi-extreme';

            $('#uvi-val', this.shadowRoot).classList.add(uviColor);

            if (this.weather.rain && this.weather.rain['1h']) {
                const rainKeyCell = document.createElement('td');
                rainKeyCell.classList.add('key-col');
                rainKeyCell.id = 'rain-key';
                rainKeyCell.textContent = 'Rain:';

                const rainValCell = document.createElement('td');
                rainValCell.textContent = `${Math.round(this.weather.rain['1h'])} mm`;

                $('#rain-snow-row', this.shadowRoot).append(rainKeyCell);
                $('#rain-snow-row', this.shadowRoot).append(rainValCell);

                if (this.weather.rain['1h'] > 0 && this.weather.rain['1h'] < 2.5) {
                    rainValCell.classList.add('light-rain');
                }
                else if (this.weather.rain['1h'] >= 2.5 && this.weather.rain['1h'] < 10) {
                    rainValCell.classList.add('moderate-rain');
                }
                else if (this.weather.rain['1h'] >= 10 && this.weather.rain['1h'] < 50) {
                    rainValCell.classList.add('heavy-rain');
                }
                else if (this.weather.rain['1h'] >= 50) {
                    rainValCell.classList.add('violent-rain');
                }
            }

            if (this.weather.snow && this.weather.snow['1h']) {
                const snowKeyCell = document.createElement('td');
                snowKeyCell.classList.add('key-col');
                snowKeyCell.id = 'snow-key';
                snowKeyCell.textContent = 'Snow:';

                const snowValCell = document.createElement('td');
                snowValCell.textContent = `${Math.round(this.weather.snow['1h'])} mm`;

                $('#rain-snow-row', this.shadowRoot).append(snowKeyCell);
                $('#rain-snow-row', this.shadowRoot).append(snowValCell);

                if (this.weather.snow['1h'] > 0 && this.weather.snow['1h'] < 2.5) {
                    snowValCell.classList.add('light-rain');
                }
                else if (this.weather.snow['1h'] >= 2.5 && this.weather.snow['1h'] < 10) {
                    snowValCell.classList.add('moderate-rain');
                }
                else if (this.weather.snow['1h'] >= 10 && this.weather.snow['1h'] < 50) {
                    snowValCell.classList.add('heavy-rain');
                }
                else if (this.weather.snow['1h'] >= 50) {
                    snowValCell.classList.add('violent-rain');
                }
            }
        }

        get weather() {
            return this._weather;
        }

    }

    customElements.define('current-weather-details', CurrentWeatherDetails);
}

utils.createHtmlElementV2('/js/components/current-weather-details/current-weather-details.html', define);
