import { BaseWeatherElement } from '../base-weather-element.js';
import * as domService from '../../modules/services/domService.js';
import { $, $$ } from '../../modules/utils/selectors.js';

const style = domService.createStyleElement(`
    @import "/js/components/alerts-weather/alerts-weather.css";
`);

const define = (html) => {
    class AlertsWeather extends BaseWeatherElement {
        constructor() {
            super(style, html);

            this._alerts = [];

            this._modalOpen = false;
        }

        handleClick(event) {
            event.preventDefault();

            if (this.modalOpen) {
                $('.modal', this.shadowRoot).classList.remove('show');
                $('.modal-content', this.shadowRoot).classList.remove('show');

                Array.from($$('.tile')).forEach((n) => {
                    n.classList.add('tile-hover');
                });

                this.modalOpen = false;
            }
            else {
                Array.from($$('.tile')).forEach((n) => {
                    n.classList.remove('tile-hover');
                });

                $('.modal', this.shadowRoot).classList.add('show');
                $('.modal-content', this.shadowRoot).classList.add('show');

                this.modalOpen = true;
            }
        }

        connectedCallback() {
            this.addEventListener('click', (event) => {
                this.handleClick(event);
            });
        }

        set alerts(alerts) {
            this._alerts = alerts;

            let alertsTitle;

            if (this.alerts.length > 0) {
                const firstAlertTitle = this.alerts[0].event;

                alertsTitle = `⚠️ ${firstAlertTitle}${this.alerts.length > 1 ? ` and ${this.alerts.length - 1} other ${this.alerts.length > 2 ? 'alerts' : 'alert'}` : ''}`
            } else {
                alertsTitle = `✅ No alerts`
            }

            $('#title', this.shadowRoot).textContent = alertsTitle;

            const modal = $('.modal-content', this.shadowRoot);

            modal.textContent = '';

            if (this.alerts.length == 0) {
                modal.textContent = 'All good! 👍'
                return;
            }

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

        set modalOpen(isOpen) {
            this._modalOpen = isOpen;
        }

        get modalOpen() {
            return this._modalOpen;
        }
    }

    customElements.define('alerts-weather', AlertsWeather);
}

domService.createHtmlElementV2('/js/components/alerts-weather/alerts-weather.html', define, {
    id: 'alerts-container'
});
