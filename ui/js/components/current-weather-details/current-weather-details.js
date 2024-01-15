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
                utils.createRainCells(this.weather.rain['1h'], this.shadowRoot);
            }

            if (this.weather.snow && this.weather.snow['1h']) {
                utils.createSnowCells(this.weather.snow['1h'], this.shadowRoot);
            }
        }

        get weather() {
            return this._weather;
        }

    }

    customElements.define('current-weather-details', CurrentWeatherDetails);
}

utils.createHtmlElementV2('/js/components/current-weather-details/current-weather-details.html', define);
