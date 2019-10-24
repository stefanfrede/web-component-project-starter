import { LitElement, html } from 'lit-element';

class BasicSetup extends LitElement {
  render() {
    return html`
      <div>Hello world from A!</div>
    `;
  }
}

customElements.define('wc-a', BasicSetup);
