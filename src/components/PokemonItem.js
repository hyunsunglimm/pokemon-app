import { Component } from "../core/core";

export default class PokemonItem extends Component {
  constructor(props) {
    super({
      props,
      tagName: "a",
    });
  }
  render() {
    const { pokemon } = this.props;

    this.el.setAttribute("href", `/pokemon?id=${pokemon.id}`);
    this.el.classList.add("pokemon");
    this.el.innerHTML = /* html */ `
      <img src=${pokemon.image}></img>
      <div class="info">
        <div>no. ${pokemon.id}</div>
        <div>${pokemon.name}</div>
      </div>
    `;
  }
}
