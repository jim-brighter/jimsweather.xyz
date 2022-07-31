import { BaseWeatherElement } from './base-weather-element.js';
import * as utils from '../modules/utils.js';
import { $, $$ } from '../modules/selectors.js';

const style = utils.createStyleElement(`
    #alerts-container, #title {
        height: 100%;
    }

    #title {
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        text-align: center;
    }

    .modal {
        position: fixed;
        background-color: rgb(0,0,0,0.4);
        opacity: 0;
        width: 100%;
        height: 100%;
        left: 0;
        top: -100%;
        z-index: 1000;
    }

    .modal.show {
        top: 0;
        opacity: 1;
    }

    .modal-content {
        position: relative;
        background-color: white;
        margin: 2rem auto;
        padding: 2rem;
        width: 40%;
        border-radius: 15px;
        top: -100%;
        opacity: 0;
        transition: top 0.5s, opacity 0.5s;
        box-shadow: 0px 0px 20px 0px red;
    }

    .modal-content.show {
        top: 0;
        opacity: 1;
        max-height: 88%;
        overflow: scroll;
    }

    p {
        font-size: 10pt;
    }

    .alert {
        border: 2px solid pink;
        border-radius: 15px;
        padding: 1rem;
        margin-bottom: 1rem;
        background-color: #ffcdd475;
    }

    @media (prefers-color-scheme: dark) {
        .modal-content {
            background-color: #333;
        }

        .alert {
            background-color: #ff6c8057;
        }
    }

`);

const html = utils.createHtmlElement(`
    <div id="title">There are alerts</div>

    <div class="modal">
        <div class="modal-content">
        </div>
    </div>
`);
html.id = 'alerts-container';

class AlertsWeather extends BaseWeatherElement {
    constructor() {
        super(style, html);

        this._alerts = [];
    }

    connectedCallback() {
        this.addEventListener('click', (event) => {
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
        });
    }

    set alerts(alerts) {
        this._alerts = alerts;

        $('#title', this.shadowRoot).textContent = `⚠️ There ${this.alerts.length === 1 ? 'is' : 'are'} ${this.alerts.length} ${this.alerts.length > 1 ? 'alerts' : 'alert'}`;

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
