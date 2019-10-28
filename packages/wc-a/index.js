import { LitElement, css, html } from 'lit-element';

class WcA extends LitElement {
  static get styles() {
    return css`
      h1 {
        color: hsl(22, 78%, 55%);
        font-family: Georgia, Cambria, 'Times New Roman', Times, serif;
        font-size: 2.25rem;
        font-style: italic;
        letter-spacing: -0.1rem;
        line-height: 2.5rem;
        margin: 0;
      }
    `;
  }

  render() {
    return html`
      <h1>
        Hello world!
      </h1>
    `;
  }
}

customElements.define('wc-a', WcA);
