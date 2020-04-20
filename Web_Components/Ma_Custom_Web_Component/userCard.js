// Need to create template so global/outside css doesnt affect this web component and use shadow DOM

const template = document.createElement("template");
template.innerHTML = `
  <style>
    h3 {
      color: blue;
    }
  </style>
  <div class="user-card">
    <h3></h3>
  </div>

`;

class UserCard extends HTMLElement {
  constructor() {
    super();
    // shadow DOM
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.shadowRoot.querySelector("h3").innerText = this.getAttribute("name");
  }
}

window.customElements.define("user-card", UserCard);
