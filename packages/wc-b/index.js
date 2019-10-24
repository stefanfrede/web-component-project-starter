import { LitElement, html } from 'lit-element';
import 'wc-a';

class BasicSetup extends LitElement {
  render() {
    return html`
      <wc-a></wc-a>
      <div>Hello world from B!</div>
    `;
  }
}

customElements.define('wc-b', BasicSetup);
