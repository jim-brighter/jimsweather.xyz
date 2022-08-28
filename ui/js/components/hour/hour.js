import { BaseWeatherElement } from '../base-weather-element.js';
import * as utils from '../../modules/utils.js'
import { $ } from '../../modules/selectors.js';
import { UVI_COLOR_MAP, AQI_COLOR_MAP } from '../../modules/constants.js';

const style = utils.createStyleElement(`
    @import "/js/components/hour/hour.css";
`);

fetch('/js/components/hour/hour.html')
.then(response => response.text())
.then(data => {
    const html = utils.createHtmlElement(data);
    html.classList.add('one-hour');

    define(html);
});

const define = (html) => {
    class HourWeather extends BaseWeatherElement {
        constructor() {
            super(style.cloneNode(true), html.cloneNode(true));

            this._weather = {};
            this._aqi = {}
        }

        set weather(weather) {
            this._weather = weather;
        }

        get weather() {
            return this._weather;
        }

        set aqi(aqi) {
            this._aqi = aqi;
        }

        get aqi() {
            return this._aqi;
        }

        setWeatherAndAqi(weather, aqi) {
            this.weather = weather;
            this.aqi = aqi;

            $('#time', this.shadowRoot).textContent = utils.shortTime(this.weather.dt);
            $('#icon', this.shadowRoot).src = `https://openweathermap.org/img/wn/${this.weather.weather[0].icon}@4x.png`;
            $('#temp-and-main', this.shadowRoot).textContent = `${Math.round(this.weather.temp)}° F, ${this.weather.weather[0].main}`;

            $('#feels_like-val', this.shadowRoot).textContent = `${Math.round(this.weather['feels_like'])}° F`;
            $('#uvi-val', this.shadowRoot).textContent = Math.round(this.weather['uvi']);
            $('#clouds-val', this.shadowRoot).textContent = `${Math.round(this.weather['clouds'])}%`;
            $('#pop-val', this.shadowRoot).textContent = `${Math.round(this.weather.pop * 100)}%`;
            $('#pressure-val', this.shadowRoot).textContent = `${Math.round(this.weather['pressure'])} hPa`;
            $('#wind_speed-val', this.shadowRoot).textContent = `${Math.round(this.weather['wind_speed'])} mph`;
            $('#humidity-val', this.shadowRoot).textContent = `${Math.round(this.weather['humidity'])}%`;
            $('#wind_deg-val', this.shadowRoot).textContent = `${utils.getWindDirection(this.weather['wind_deg'])}`;
            $('#visibility-val', this.shadowRoot).textContent = `${Math.round(this.weather['visibility'] / 1000)} km`;
            $('#dew_point-val', this.shadowRoot).textContent = `${Math.round(this.weather['dew_point'])}° F`;
            $('#wind_gust-val', this.shadowRoot).textContent = `${Math.round(this.weather.wind_gust)} mph`;

            if (this.weather.dt === this.aqi.dt) {
                $('#aqi-val', this.shadowRoot).textContent = Math.round(this.aqi.main.aqi);
                $('#aqi-val', this.shadowRoot).classList.add(AQI_COLOR_MAP[this.aqi.main.aqi]);
            }

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
    }

    customElements.define('hour-weather', HourWeather);
}
