import { Component } from "../core/core";
import pokemonStore from "../store/pokemon";
import PokemonItem from "./PokemonItem";

export default class PokemonList extends Component {
  constructor() {
    super();
    pokemonStore.subscribe("allPokemons", () => {
      this.render();
    });
    pokemonStore.subscribe("count", () => {
      this.render();
    });
    pokemonStore.subscribe("loading", () => {
      this.render();
    });
    pokemonStore.subscribe("message", () => {
      this.render();
    });
  }
  render() {
    this.el.classList.add("pokemon-list");
    this.el.innerHTML = /* html */ `
      ${
        pokemonStore.state.message
          ? `<div class="message">${pokemonStore.state.message}</div>`
          : '<div class="pokemons"></div>'
      }
      <div class="the-loader hide"></div>
    `;

    const pokemonsEl = this.el.querySelector(".pokemons");
    pokemonsEl?.append(
      ...pokemonStore.state.allPokemons.map(
        (pokemon) => new PokemonItem({ pokemon }).el
      )
    );
    const loaderEl = this.el.querySelector(".the-loader");
    pokemonStore.state.loading
      ? loaderEl.classList.remove("hide")
      : loaderEl.classList.add("hide");
  }
}
