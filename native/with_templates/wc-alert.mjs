class WCAlert extends HTMLElement {
    static observedAttributes = ['title', 'text', 'button-text'];

    constructor() {
        super();

        const template = document.getElementById('wc-alert-template');
        const templateContent = template.content;

        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(templateContent.cloneNode(true));

        const title = this.getAttribute('title');
        const text = this.getAttribute('text');
        const buttonText = this.getAttribute('button-text');

        if (title) {
            shadow.querySelector('.title').textContent = title;
        }
        if (text) {
            shadow.querySelector('p:not(.title)').textContent = text;
        }
        if (buttonText) {
            shadow.querySelector('button').textContent = buttonText;
        }
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(
            '%c LIFECYCLE',
            'color: darkmagenta',
            `attributeChangedCallback ${name}: ${oldValue} -> ${newValue}`
        );
    }

    connectedCallback() {
        console.log('%c LIFECYCLE', 'color: darkmagenta', `connectedCallback`);
    }
}

customElements.define('wc-alert', WCAlert);
