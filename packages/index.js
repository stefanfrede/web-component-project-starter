import { LitElement, css, html } from 'lit-element';

import 'wc-a';
import 'wc-b';

class WcMain extends LitElement {
  static get styles() {
    return css`
      div {
        background-color: hsl(0, 0%, 97%);
        border: 3px solid hsl(0, 0%, 13%);
        border-radius: 0.25rem;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15),
          0 3px 6px rgba(0, 0, 0, 0.1);
        padding: 0.5rem;
      }
    `;
  }

  render() {
    return html`
      <div>
        <wc-a></wc-a>
        <wc-b></wc-a>
      </div>
    `;
  }
}

customElements.define('wc-main', WcMain);
