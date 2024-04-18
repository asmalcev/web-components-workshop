class WCAlert extends HTMLElement {
    constructor() {
        super();

        const template = document.getElementById('wc-alert-template');
        const templateContent = template.content;

        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(templateContent.cloneNode(true));
    }
}

customElements.define('wc-alert', WCAlert);
