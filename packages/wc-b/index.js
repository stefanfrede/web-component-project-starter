import { LitElement, css, html } from 'lit-element';

class WcB extends LitElement {
  static get styles() {
    return css`
      h2 {
        font-size: 1.5rem;
        font-weight: 400;
        letter-spacing: 0.05rem;
        line-height: 1.5rem;
        margin: 0;
      }
    `;
  }

  render() {
    return html`
      <h2>
        How are you today?
      </h2>
    `;
  }
}

customElements.define('wc-b', WcB);
