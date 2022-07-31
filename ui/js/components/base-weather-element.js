export class BaseWeatherElement extends HTMLElement {
    constructor(style, html, mode='open') {
        super();

        const shadow = this.attachShadow({ mode });

        shadow.append(style);
        shadow.append(html);
    }
}
