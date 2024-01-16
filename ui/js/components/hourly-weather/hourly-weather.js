import { BaseWeatherElement } from '../base-weather-element.js';
import * as domService from '../../modules/services/domService.js';
import { $ } from '../../modules/utils/selectors.js';

const style = domService.createStyleElement(`
    @import "/js/components/hourly-weather/hourly-weather.css";
`);

const define = (html) => {
    class HourlyWeather extends BaseWeatherElement {
        constructor() {
            super(style, html);

            this._weather = [];
            this._aqi = [];
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

            const hourlyContainer = $('#hourly-container', this.shadowRoot);

            hourlyContainer.replaceChildren();

            for (let i = 0; i < this.weather.length; i++) {
                const hour = this.weather[i];
                const aqi = this.aqi[i];

                const oneHour = document.createElement('hour-weather');
                hourlyContainer.append(oneHour);
                oneHour.id = `hour-${hour.dt}`;
                oneHour.setWeatherAndAqi(hour, aqi);
            }
        }
    }

    customElements.define('hourly-weather', HourlyWeather);
}

domService.createHtmlElementV2(null, define, {
    id: 'hourly-container'
});
