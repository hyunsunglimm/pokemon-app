import { Store } from "../core/core";

const store = new Store({
  message: "",
  allPokemons: [],
  pokemons: [],
  pokemon: {},
  loading: false,
  count: 20,
  searchText: "",
});

export default store;

export const getPokemons = async () => {
  store.state.message = "";
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
  const { results } = await res.json();
  const loadedAllPokemon = results.map((pokemon, index) => {
    return {
      name: pokemon.name,
      id: index + 1,
      image: `"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
        index + 1
      }.png"`,
    };
  });
  store.state.allPokemons = loadedAllPokemon;
};

getPokemons();

export const getAllPokemons = async (count) => {
  store.state.loading = true;
  store.state.count = count;

  try {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?offset=${count - 20}&limit=20`
    );
    const { results } = await res.json();
    const loadedAllPokemon = results.map((pokemon, index) => {
      return {
        name: pokemon.name,
        id: index + count - 19,
        image: `"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          index + count - 19
        }.png"`,
      };
    });
    store.state.allPokemons = [...store.state.allPokemons, ...loadedAllPokemon];
  } catch (error) {
    console.error(error, "실패!");
  } finally {
    store.state.loading = false;
  }
};

export const getSearchPokemon = async (idOrName) => {
  store.state.message = "";
  store.state.loading = true;

  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${idOrName}`);
    const json = await res.json();
    const searchPokemon = [json].map((pokemon) => {
      return {
        name: pokemon.name,
        id: pokemon.id,
        image: `"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"`,
      };
    });
    store.state.allPokemons = searchPokemon;
  } catch (error) {
    store.state.message = "Not Found!";
    store.state.allPokemons = [];
  } finally {
    store.state.loading = false;
  }
};

export const getPokemonDetails = async (id) => {
  try {
    const res1 = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const res2 = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
    const json1 = await res1.json();
    const json2 = await res2.json();
    store.state.pokemon = { ...json1, ...json2 };
  } catch (error) {
    console.log(error);
  }
};
