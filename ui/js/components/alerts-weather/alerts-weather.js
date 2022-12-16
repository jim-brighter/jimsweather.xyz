import { BaseWeatherElement } from '../base-weather-element.js';
import * as utils from '../../modules/utils.js';
import { $, $$ } from '../../modules/selectors.js';

const style = utils.createStyleElement(`
    @import "/js/components/alerts-weather/alerts-weather.css";
`);

fetch('/js/components/alerts-weather/alerts-weather.html')
.then(response => response.text())
.then(data => {
    const html = utils.createHtmlElement(data);
    html.id = 'alerts-container';

    define(html);
});

const define = (html) => {
    class AlertsWeather extends BaseWeatherElement {
        constructor() {
            super(style, html);

            this._alerts = [];
        }

        handleClick(event) {
            event.preventDefault();

            if (Array.from(event.path[0].classList).includes('modal')) {
                $('.modal', this.shadowRoot).classList.remove('show');
                $('.modal-content', this.shadowRoot).classList.remove('show');

                Array.from($$('.tile')).forEach((n) => {
                    n.classList.add('tile-hover');
                });
            }
            else {
                Array.from($$('.tile')).forEach((n) => {
                    n.classList.remove('tile-hover');
                });

                $('.modal', this.shadowRoot).classList.add('show');
                $('.modal-content', this.shadowRoot).classList.add('show');
            }
        }

        connectedCallback() {
            this.addEventListener('click', (event) => {
                this.handleClick(event);
            });
        }

        set alerts(alerts) {
            this._alerts = alerts;

            $('#title', this.shadowRoot).textContent = `${this.alerts.length > 0 ? '⚠️' : '✅'} There ${this.alerts.length === 1 ? 'is' : 'are'} ${this.alerts.length} ${this.alerts.length === 1 ? 'alert' : 'alerts'}`;

            const modal = $('.modal-content', this.shadowRoot);

            for (let alert of this.alerts) {
                const event = document.createElement('h3');
                event.textContent = alert.event;

                const startTime = document.createElement('p');
                startTime.textContent = `Start Time: ${new Date(alert.start * 1000)}`;

                const endTime = document.createElement('p');
                endTime.textContent = `End Time: ${new Date(alert.end * 1000)}`;

                const description = document.createElement('p');
                description.textContent = alert.description;

                const alertDiv = document.createElement('div');
                alertDiv.classList.add('alert');
                alertDiv.append(event);
                alertDiv.append(startTime);
                alertDiv.append(endTime);
                alertDiv.append(description);

                modal.append(alertDiv);
            }
        }

        get alerts() {
            return this._alerts;
        }
    }

    customElements.define('alerts-weather', AlertsWeather);
}
