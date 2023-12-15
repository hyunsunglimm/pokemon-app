import { Component } from "../core/core";
import pokemonStore, {
  getAllPokemons,
  getPokemons,
  getSearchPokemon,
} from "../store/pokemon";

export default class Search extends Component {
  render() {
    this.el.classList.add("search");
    this.el.innerHTML = /* html */ `
      <input value="${pokemonStore.state.message}" placeholder="Search Pokemon !" />
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" />
    `;

    const inputEl = this.el.querySelector("input");
    inputEl.addEventListener("input", () => {
      pokemonStore.state.searchText = inputEl.value;
    });
    inputEl.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        if (pokemonStore.state.searchText.trim()) {
          getSearchPokemon(pokemonStore.state.searchText);
        } else {
          getPokemons();
        }
      }
    });

    const btnEl = this.el.querySelector("img");
    btnEl.addEventListener("click", () => {
      if (pokemonStore.state.searchText.trim()) {
        getSearchPokemon(pokemonStore.state.searchText);
      } else {
        getPokemons();
      }
    });
  }
}
