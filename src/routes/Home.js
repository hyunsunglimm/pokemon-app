import { Component } from "../core/core";
import Search from "../components/Search";
import PokemonList from "../components/PokemonList";
import PokemonListMore from "../components/PokemonListMore";
import pokemonStore from "../store/pokemon";

export default class Home extends Component {
  render() {
    const search = new Search().el;
    const pokemonList = new PokemonList().el;
    const pokemonListMore = new PokemonListMore().el;

    this.el.classList.add("container");
    this.el.append(search, pokemonList, pokemonListMore);
  }
}
