import { Component } from "../core/core";
import pokemonStore, { getAllPokemons } from "../store/pokemon";

export default class PokemonListMore extends Component {
  constructor() {
    super({
      tagName: "button",
    });
  }

  render() {
    this.el.textContent = "View more...";
    this.el.classList.add("view-more");
    this.el.addEventListener("click", async () => {
      pokemonStore.state.count += 20;
      await getAllPokemons(pokemonStore.state.count);
    });
  }
}
