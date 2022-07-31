import { BaseWeatherElement } from './base-weather-element.js';
import * as utils from '../modules/utils.js'
import { $ } from '../modules/selectors.js';
import { UVI_COLOR_MAP } from '../modules/constants.js';

const style = utils.createStyleElement(`
    div {
        height: 100%;
        overflow: scroll;
    }

    table {
        width: 100%;
        font-size: 8pt;
    }

    tbody {
        width: 100%;
    }

    td {
        width: 25%;
        border-radius: 8px;
        text-align: center;
    }

    .key-col {
        font-weight: bold;
        text-align: left;
    }

    .uvi-low {
        color: white;
        background-color: green;
    }

    .uvi-moderate {
        color: white;
        background-color: gold;
    }

    .uvi-high {
        color: white;
        background-color: orange;
    }

    .uvi-very-high {
        color: white;
        background-color: crimson;
    }

    .uvi-extreme {
        color: white;
        background-color: purple;
    }

    .light-rain {
        color: white;
        background-color: lightblue;
    }

    .moderate-rain {
        color: white;
        background-color: skyblue;
    }

    .heavy-rain {
        color: white;
        background-color: blue;
    }

    .violent-rain {
        color: white;
        background-color: black;
    }
`);

const html = utils.createHtmlElement(`
    <table id="weather-details">
        <tr>
            <td id="sunrise-key" class="key-col">Sunrise:</td>
            <td id="sunrise-val"></td>
            <td id="uvi-key" class="key-col">UVI:</td>
            <td id="uvi-val"></td>
        </tr>
        <tr>
            <td id="sunset-key" class="key-col">Sunset:</td>
            <td id="sunset-val"></td>
            <td id="clouds-key" class="key-col">Clouds:</td>
            <td id="clouds-val"></td>
        </tr>
        <tr>
            <td id="feels_like-key" class="key-col">Feels Like:</td>
            <td id="feels_like-val"></td>
            <td id="visibility-key" class="key-col">Visibility:</td>
            <td id="visibility-val"></td>
        </tr>
        <tr>
            <td id="pressure-key" class="key-col">Pressure:</td>
            <td id="pressure-val"></td>
            <td id="wind_speed-key" class="key-col">Wind Speed:</td>
            <td id="wind_speed-val"></td>
        </tr>
        <tr>
            <td id="humidity-key" class="key-col">Humidity:</td>
            <td id="humidity-val"></td>
            <td id="wind_deg-key" class="key-col">Wind Direction:</td>
            <td id="wind_deg-val"></td>
        </tr>
        <tr>
            <td id="dew_point-key" class="key-col">Dew Point:</td>
            <td id="dew_point-val"></td>
            <td id="wind_gust-key" class="key-col">Wind Gust:</td>
            <td id="wind_gust-val"></td>
        </tr>
        <tr id="rain-snow-row">
        </tr>
    </table>
`);

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
        $('#feels_like-val', this.shadowRoot).textContent = `${Math.round(this.weather['feels_like'])}° F`;
        $('#visibility-val', this.shadowRoot).textContent = `${Math.round(this.weather['visibility'] / 1000)} km`;
        $('#pressure-val', this.shadowRoot).textContent = `${Math.round(this.weather['pressure'])} hPa`;
        $('#wind_speed-val', this.shadowRoot).textContent = `${Math.round(this.weather['wind_speed'])} mph`;
        $('#humidity-val', this.shadowRoot).textContent = `${Math.round(this.weather['humidity'])}%`;
        $('#wind_deg-val', this.shadowRoot).textContent = `${utils.getWindDirection(this.weather['wind_deg'])}`;
        $('#dew_point-val', this.shadowRoot).textContent = `${Math.round(this.weather['dew_point'])}° F`;
        $('#wind_gust-val', this.shadowRoot).textContent = `${Math.round(this.weather.wind_gust)} mph`;

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
