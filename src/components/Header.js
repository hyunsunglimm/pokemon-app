import { Component } from "../core/core";

export default class Header extends Component {
  constructor() {
    super({
      tagName: "header",
    });
  }
  render() {
    this.el.innerHTML = /* html */ `
      <a href="/" class="home">HOME</a>
      <a href="/about" class="about">
        <img src="https://velog.velcdn.com/images/gustjd3834/profile/4b318994-bf6a-4a9d-be2e-b31ea52ddfb2/image.png" alt="User" />
      </a>
    `;
  }
}
