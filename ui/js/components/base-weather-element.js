export class BaseWeatherElement extends HTMLElement {
    constructor(style, html, mode='open') {
        super()

        const shadow = this.attachShadow({ mode })

        if (navigator.userAgent.toLowerCase().includes('windows')) {
            style.textContent = `@import "/js/components/base-weather-element.css";\n${style.textContent}`
        }

        shadow.append(style)
        shadow.append(html)
    }
}
