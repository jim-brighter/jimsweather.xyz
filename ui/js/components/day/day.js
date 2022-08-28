import { BaseWeatherElement } from '../base-weather-element.js';
import * as utils from '../../modules/utils.js'
import { $ } from '../../modules/selectors.js';
import { UVI_COLOR_MAP } from '../../modules/constants.js';

const style = utils.createStyleElement(`
    @import "/js/components/day/day.css";
`);

fetch('/js/components/day/day.html')
.then(response => response.text())
.then(data => {
    const html = utils.createHtmlElement(data);
    html.classList.add('one-day');

    define(html);
});

const define = (html) => {
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
}
