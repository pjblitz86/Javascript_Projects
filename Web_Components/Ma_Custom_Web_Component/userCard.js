class UserCard extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `Paul Jukman`;
  }
}

window.customElements.define("user-card", UserCard);
