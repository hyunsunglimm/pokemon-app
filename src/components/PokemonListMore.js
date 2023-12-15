import { Component } from "../core/core";
import pokemonStore, { getAllPokemons } from "../store/pokemon";

export default class PokemonListMore extends Component {
  constructor() {
    super({
      tagName: "button",
    });
    // pokemonStore.subscribe("allPokemons", () => {
    //   this.render();
    // });
  }

  render() {
    this.el.textContent = "View more...";
    // pokemonStore.state.allPokemons.length === 1
    //   ? this.el.classList.add("hide")
    //   : this.el.classList.remove("hide");
    this.el.classList.add("view-more");
    this.el.addEventListener("click", async () => {
      await getAllPokemons(pokemonStore.state.count + 20);
    });
  }
}
