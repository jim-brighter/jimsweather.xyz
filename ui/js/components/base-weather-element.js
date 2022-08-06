export class BaseWeatherElement extends HTMLElement {
    constructor(style, html, mode='open') {
        super();

        const shadow = this.attachShadow({ mode });

        if (navigator.userAgent.toLowerCase().includes('windows')) {
            style.textContent = `
            ${style.textContent}
            ::-webkit-scrollbar {
                width: 8px;
                height: 8px;
                border-radius: 10px;
            }
            ::-webkit-scrollbar-track {
                background: whitesmoke;
                border-radius: 10px;
            }
            ::-webkit-scrollbar-thumb {
                background: lightgray;
                border-radius: 10px;
            }
            `;
        };

        shadow.append(style);
        shadow.append(html);
    }
}
