"use strict";
class App {
    constructor(parentElement, tag, className = '') {
        this.element = document.createElement(tag);
        this.element.className = className;
        this.parentElement = parentElement;
    }
    render() {
        var _a;
        (_a = this.parentElement) === null || _a === void 0 ? void 0 : _a.appendChild(this.element);
    }
}
