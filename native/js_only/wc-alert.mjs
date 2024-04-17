const STYLES = `
.wrapper {
    display: flex;
    flex-direction: column;
    gap: 6px;

    border: 1px #000 solid;
    padding: 6px;
    background-color: color-mix(in lch, white 70%, crimson);
}

.title {
    font-weight: bold;
}
`;

class WCAlert extends HTMLElement {
    static observedAttributes = ['title', 'text', 'button-text'];

    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        const title = this.getAttribute('title');
        const text = this.getAttribute('text');
        const buttonText = this.getAttribute('button-text');

        const wrapperElement = document.createElement('div');
        wrapperElement.setAttribute('class', 'wrapper');

        const titleElement = document.createElement('p');
        titleElement.setAttribute('class', 'title');
        titleElement.textContent = title;

        const textElement = document.createElement('p');
        textElement.textContent = text;

        const buttonElement = document.createElement('button');
        buttonElement.textContent = buttonText;

        const style = document.createElement('style');
        style.textContent = STYLES;

        if (title) {
            wrapperElement.appendChild(titleElement);
        }
        if (text) {
            wrapperElement.appendChild(textElement);
        }
        if (buttonText) {
            wrapperElement.appendChild(buttonElement);
        }

        shadow.appendChild(style);
        shadow.appendChild(wrapperElement);
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
