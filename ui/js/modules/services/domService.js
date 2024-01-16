import { $ } from "../utils/selectors.js";

const createStyleElement = (styleContent) => {
    const style = document.createElement('style');
    style.textContent = styleContent;

    return style;
}

const createHtmlElement = (htmlContent) => {
    const html = document.createElement('div');
    html.innerHTML = htmlContent;

    return html;
}

const createHtmlElementV2 = async (filename, defineFunction, options = { id: '', class: '' }) => {
    const htmlBody = filename ? await fetch(filename) : '';
    const htmlText = htmlBody ? await htmlBody.text() : '';
    const html = createHtmlElement(htmlText);

    if (options.class) {
        html.classList.add(options.class);
    }

    if (options.id) {
        html.id = options.id;
    }

    defineFunction(html);
}

const addPrecipitationClass = (htmlElement, precipitationValue) => {
    if (precipitationValue <= 0) {
        return;
    }

    if (precipitationValue > 0 && precipitationValue < 2.5) {
        htmlElement.classList.add('light-rain');
    }
    else if (precipitationValue >= 2.5 && precipitationValue < 10) {
        htmlElement.classList.add('moderate-rain');
    }
    else if (precipitationValue >= 10 && precipitationValue < 50) {
        htmlElement.classList.add('heavy-rain');
    }
    else {
        htmlElement.classList.add('violent-rain');
    }
}

const createRainCells = (volume, shadowRootElement) => {
    createPrecipitationCells(volume, 'rain-key', 'Rain:', shadowRootElement);
}

const createSnowCells = (volume, shadowRootElement) => {
    createPrecipitationCells(volume, 'snow-key', 'Snow:', shadowRootElement);
}

const createPrecipitationCells = (volume, keyId, keyText, shadowRootElement) => {
    const keyCell = document.createElement('td');
    keyCell.classList.add('key-col');
    keyCell.id = keyId;
    keyCell.textContent = keyText;

    const valCell = document.createElement('td');
    valCell.textContent = `${Math.round(volume)} mm`;

    $('#rain-snow-row', shadowRootElement).append(keyCell);
    $('#rain-snow-row', shadowRootElement).append(valCell);

    addPrecipitationClass(valCell, volume);
}

export {
    createStyleElement,
    createHtmlElement,
    createHtmlElementV2,
    addPrecipitationClass,
    createRainCells,
    createSnowCells
}
