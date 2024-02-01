import { BaseWeatherElement } from '../base-weather-element.js';
import * as utils from '../../modules/utils/utils.js';
import * as domService from '../../modules/services/domService.js';
import { $ } from '../../modules/utils/selectors.js';

const style = domService.createStyleElement(`
    @import "/js/components/minutely-weather/minutely-weather.css";
    @import "/css/pills.css";
`);

const define = (html) => {
    class MinutelyWeather extends BaseWeatherElement {
        constructor() {
            super(style, html);

            this._weather = [];
        }

        set weather(weather) {
            this._weather = weather || [];

            const minutelyContainer = $('#minutely-container', this.shadowRoot);

            do {
                minutelyContainer.removeChild(minutelyContainer.lastChild);
            } while (minutelyContainer.childElementCount > 1)

            for (let minute of this.weather) {
                const minuteDiv = document.createElement('div');
                minuteDiv.id = `minute-${minute.dt}`;
                minuteDiv.classList.add('minute-div');

                const time = document.createElement('p');
                time.textContent = utils.shortTime(minute.dt);

                const precipitation = document.createElement('p');
                precipitation.textContent = `${Math.round(minute.precipitation)} mm`;

                domService.addPrecipitationClass(precipitation, minute.precipitation);

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

domService.createHtmlElementV2('/js/components/minutely-weather/minutely-weather.html', define, {
    id: 'minutely-container'
});
