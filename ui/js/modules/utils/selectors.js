const $ = (selector, node = document) => {
    return node.querySelector(selector);
}

const $$ = (selector, node = document) => {
    return Array.prototype.slice.call(node.querySelectorAll(selector));
}

export { $, $$ };
