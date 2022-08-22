import { BaseWeatherElement } from './base-weather-element.js';
import * as utils from '../modules/utils.js'
import { $ } from '../modules/selectors.js';
import { UVI_COLOR_MAP } from '../modules/constants.js';

const style = utils.createStyleElement(`
    div {
        display: grid;
        grid-template-columns: 10% 45% 45%;
        grid-template-rows: repeat(5, auto);
        width: 100%;
        padding-bottom: 2rem;
    }

    @media screen and (max-width: 768px) {
        div {
            grid-template-columns: 25% 100% 100%;
            overflow: scroll;
        }
    }

    #time {
        grid-column-start: 1;
        grid column-end: 2;
        grid-row-start: 1;
        grid-row-end: 2;
    }

    img {
        width: 3rem;
    }

    #icon {
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 2;
        grid-row-end: 5;
    }

    #main {
        font-size: 9pt;
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 5;
        grid-row-end: 6;
    }

    table {
        grid-column-start: 2;
        grid-column-end: 4;
        grid-row-start: 1;
        grid-row-end: 6;
        font-size: 8pt;
        width: 100%;
    }

    td {
        border-radius: 8px;
        text-align: center;
        width: 10%;
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
    <span id="time"></span>
    <img id="icon"/>
    <span id="main"></span>
    <table>
        <thead>
            <tr>
                <th colspan="2">Sun & Moon</th>
                <th colspan="2">Temps</th>
                <th colspan="2">Feels Like</th>
                <th colspan="4">Weather</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td id="sunrise-key" class="key-col">Sunrise:</td>
                <td id="sunrise-val"></td>
                <td id="morn_temp-key" class="key-col">Morning:</td>
                <td id="morn_temp-val"></td>
                <td id="morn_feels_like-key" class="key-col">Morning:</td>
                <td id="morn_feels_like-val"></td>
                <td id="clouds-key" class="key-col">Clouds:</td>
                <td id="clouds-val"></td>
                <td id="uvi-key" class="key-col">UVI:</td>
                <td id="uvi-val"></td>
            </tr>
            <tr>
                <td id="sunset-key" class="key-col">Sunset:</td>
                <td id="sunset-val"></td>
                <td id="day_temp-key" class="key-col">Daytime:</td>
                <td id="day_temp-val"></td>
                <td id="day_feels_like-key" class="key-col">Daytime:</td>
                <td id="day_feels_like-val"></td>
                <td id="humidity-key" class="key-col">Humidity:</td>
                <td id="humidity-val"></td>
                <td id="dew_point-key" class="key-col">Dew Point:</td>
                <td id="dew_point-val"></td>
            </tr>
            <tr>
                <td id="moonrise-key" class="key-col">Moonrise:</td>
                <td id="moonrise-val"></td>
                <td id="eve_temp-key" class="key-col">Evening:</td>
                <td id="eve_temp-val"></td>
                <td id="eve_feels_like-key" class="key-col">Evening:</td>
                <td id="eve_feels_like-val"></td>
                <td id="wind_speed-key" class="key-col">Wind Speed:</td>
                <td id="wind_speed-val"></td>
                <td id="wind_deg-key" class="key-col">Wind Direction:</td>
                <td id="wind_deg-val"></td>
            </tr>
            <tr>
                <td id="moonset-key" class="key-col">Moonset:</td>
                <td id="moonset-val"></td>
                <td id="night_temp-key" class="key-col">Nighttime:</td>
                <td id="night_temp-val"></td>
                <td id="night_feels_like-key" class="key-col">Nighttime:</td>
                <td id="night_feels_like-val"></td>
                <td id="pressure-key" class="key-col">Pressure:</td>
                <td id="pressure-val"></td>
                <td id="wind_gust-key" class="key-col">Wind Gust:</td>
                <td id="wind_gust-val"></td>
            </tr>
            <tr>
                <td id="moonphase-key" class="key-col">Moon Phase:</td>
                <td id="moonphase-val"></td>
                <td id="min_temp-key" class="key-col">Min:</td>
                <td id="min_temp-val"></td>
                <td></td>
                <td></td>
                <td id="pop-key" class="key-col">% Rain:</td>
                <td id="pop-val"></td>
            </tr>
            <tr id="rain-snow-row">
                <td></td>
                <td></td>
                <td id="max_temp-key" class="key-col">Max:</td>
                <td id="max_temp-val"></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
    </table>
`);
html.classList.add('one-day');

class DayWeather extends BaseWeatherElement {
    constructor() {
        super(style.cloneNode(true), html.cloneNode(true));

        this._weather = [];
    }

    set weather(weather) {
        this._weather = weather;

        $('#time', this.shadowRoot).textContent = utils.dayOfWeek(this.weather.dt);
        $('#icon', this.shadowRoot).src = `https://openweathermap.org/img/wn/${this.weather.weather[0].icon}@4x.png`;
        $('#main', this.shadowRoot).textContent = this.weather.weather[0].main;

        // sun & moon
        $('#sunrise-val', this.shadowRoot).textContent = utils.shortTime(this.weather.sunrise);
        $('#sunset-val', this.shadowRoot).textContent = utils.shortTime(this.weather.sunset);
        $('#moonrise-val', this.shadowRoot).textContent = utils.shortTime(this.weather.moonrise);
        $('#moonset-val', this.shadowRoot).textContent = utils.shortTime(this.weather.moonset);
        $('#moonphase-val', this.shadowRoot).textContent = utils.getMoonPhase(this.weather.moon_phase);

        // temps
        $('#morn_temp-val', this.shadowRoot).textContent = `${Math.round(this.weather.temp.morn)}° F`;
        $('#day_temp-val', this.shadowRoot).textContent = `${Math.round(this.weather.temp.day)}° F`;
        $('#eve_temp-val', this.shadowRoot).textContent = `${Math.round(this.weather.temp.eve)}° F`;
        $('#night_temp-val', this.shadowRoot).textContent = `${Math.round(this.weather.temp.night)}° F`;
        $('#min_temp-val', this.shadowRoot).textContent = `${Math.round(this.weather.temp.min)}° F`;
        $('#max_temp-val', this.shadowRoot).textContent = `${Math.round(this.weather.temp.max)}° F`;

        // feels like
        $('#morn_feels_like-val', this.shadowRoot).textContent = `${Math.round(this.weather.feels_like.morn)}° F`;
        $('#day_feels_like-val', this.shadowRoot).textContent = `${Math.round(this.weather.feels_like.day)}° F`;
        $('#eve_feels_like-val', this.shadowRoot).textContent = `${Math.round(this.weather.feels_like.eve)}° F`;
        $('#night_feels_like-val', this.shadowRoot).textContent = `${Math.round(this.weather.feels_like.night)}° F`;

        // weather
        $('#clouds-val', this.shadowRoot).textContent = `${Math.round(this.weather.clouds)}%`;
        $('#uvi-val', this.shadowRoot).textContent = `${Math.round(this.weather.uvi)}`;
        $('#humidity-val', this.shadowRoot).textContent = `${Math.round(this.weather['humidity'])}%`;
        $('#dew_point-val', this.shadowRoot).textContent = `${Math.round(this.weather['dew_point'])}° F`;
        $('#wind_speed-val', this.shadowRoot).textContent = `${Math.round(this.weather['wind_speed'])} mph`;
        $('#wind_deg-val', this.shadowRoot).textContent = `${utils.getWindDirection(this.weather['wind_deg'])}`;
        $('#wind_gust-val', this.shadowRoot).textContent = `${Math.round(this.weather.wind_gust)} mph`;
        $('#pop-val', this.shadowRoot).textContent = `${Math.round(this.weather.pop * 100)}%`;
        $('#pressure-val', this.shadowRoot).textContent = `${Math.round(this.weather['pressure'])} hPa`;

        const uviColor = Math.round(this.weather['uvi']) in UVI_COLOR_MAP ? UVI_COLOR_MAP[Math.round(this.weather['uvi'])] : 'uvi-extreme';

        $('#uvi-val', this.shadowRoot).classList.add(uviColor);

        // rain & snow
        if (weather.rain) {
            const rainKeyCell = document.createElement('td');
            rainKeyCell.classList.add('key-col');
            rainKeyCell.id = 'rain-key';
            rainKeyCell.textContent = 'Rain:';

            const rainValCell = document.createElement('td');
            rainValCell.textContent = `${Math.round(this.weather.rain)} mm`;

            $('#rain-snow-row', this.shadowRoot).append(rainKeyCell);
            $('#rain-snow-row', this.shadowRoot).append(rainValCell);

            if (this.weather.rain > 0 && this.weather.rain < 2.5) {
                rainValCell.classList.add('light-rain');
            }
            else if (this.weather.rain >= 2.5 && this.weather.rain < 10) {
                rainValCell.classList.add('moderate-rain');
            }
            else if (this.weather.rain >= 10 && this.weather.rain < 50) {
                rainValCell.classList.add('heavy-rain');
            }
            else if (this.weather.rain >= 50) {
                rainValCell.classList.add('violent-rain');
            }
        }

        if (weather.snow) {
            const snowKeyCell = document.createElement('td');
            snowKeyCell.classList.add('key-col');
            snowKeyCell.id = 'snow-key';
            snowKeyCell.textContent = 'Snow:';

            const snowValCell = document.createElement('td');
            snowValCell.textContent = `${Math.round(this.weather.snow)} mm`;

            $('#rain-snow-row', this.shadowRoot).append(snowKeyCell);
            $('#rain-snow-row', this.shadowRoot).append(snowValCell);

            if (this.weather.snow > 0 && this.weather.snow < 2.5) {
                snowValCell.classList.add('light-rain');
            }
            else if (this.weather.snow >= 2.5 && this.weather.snow < 10) {
                snowValCell.classList.add('moderate-rain');
            }
            else if (this.weather.snow >= 10 && this.weather.snow < 50) {
                snowValCell.classList.add('heavy-rain');
            }
            else if (this.weather.snow >= 50) {
                snowValCell.classList.add('violent-rain');
            }
        }
    }

    get weather() {
        return this._weather;
    }
}

customElements.define('day-weather', DayWeather);
