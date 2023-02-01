export default class App {
  element: HTMLElement;
  parentElement: HTMLElement | null;

  constructor(parentElement: HTMLElement, tag: string, className: string = '') {
    this.element = document.createElement(tag);
    this.element.className = className;
    this.parentElement = parentElement;
  }

  render() {
    this.parentElement?.appendChild(this.element);
  }
}
