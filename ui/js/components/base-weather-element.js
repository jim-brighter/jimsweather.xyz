export class BaseWeatherElement extends HTMLElement {
    constructor(style, html, mode='open') {
        super()

        const shadow = this.attachShadow({ mode })

        if (navigator.userAgent.toLowerCase().includes('windows') || navigator.userAgent.toLowerCase().includes('linux')) {
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
            ::-webkit-scrollbar-corner {
                display: none;
            }
            @media (prefers-color-scheme: dark) {
                ::-webkit-scrollbar-track {
                    background: #555;
                }
                ::-webkit-scrollbar-thumb {
                    background: darkgray;
                }
            }
            `
        }

        shadow.append(style)
        shadow.append(html)
    }
}
