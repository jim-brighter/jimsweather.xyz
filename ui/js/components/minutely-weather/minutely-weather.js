import { BaseWeatherElement } from '../base-weather-element.js';
import * as utils from '../../modules/utils.js';
import { $ } from '../../modules/selectors.js';

const style = utils.createStyleElement(`
    @import "/js/components/minutely-weather/minutely-weather.css";
    @import "/css/pills.css";
`);

fetch('/js/components/minutely-weather/minutely-weather.html')
.then(response => response.text())
.then(data => {
    const html = utils.createHtmlElement(data);
    html.id = 'minutely-container';

    define(html);
});

const define = (html) => {
    class MinutelyWeather extends BaseWeatherElement {
        constructor() {
            super(style, html);

            this._weather = [];
        }

        set weather(weather) {
            this._weather = weather;

            for (let minute of this.weather) {
                const minuteDiv = document.createElement('div');
                minuteDiv.id = `minute-${minute.dt}`;
                minuteDiv.classList.add('minute-div');

                const time = document.createElement('p');
                time.textContent = utils.shortTime(minute.dt);

                const precipitation = document.createElement('p');
                precipitation.textContent = `${Math.round(minute.precipitation)} mm`;

                if (minute.precipitation > 0 && minute.precipitation < 2.5) {
                    precipitation.classList.add('light-rain');
                }
                else if (minute.precipitation >= 2.5 && minute.precipitation < 10) {
                    precipitation.classList.add('moderate-rain');
                }
                else if (minute.precipitation >= 10 && minute.precipitation < 50) {
                    precipitation.classList.add('heavy-rain');
                }
                else if (minute.precipitation >= 50) {
                    precipitation.classList.add('violent-rain');
                }

                $('#minutely-container', this.shadowRoot).append(minuteDiv);
                minuteDiv.append(time);
                minuteDiv.append(precipitation);
            }
        }

        get weather() {
            return this._weather;
        }

    }

    customElements.define('minutely-weather', MinutelyWeather);
}
