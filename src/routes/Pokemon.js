import { Component } from "../core/core";
import pokemonStore, { getPokemonDetails } from "../store/pokemon";

export default class Pokemon extends Component {
  async render() {
    await getPokemonDetails(location.search.slice(4));
    const {
      name,
      sprites: images,
      types,
      weight,
      height,
      flavor_text_entries,
    } = pokemonStore.state.pokemon;
    const allDescription = flavor_text_entries.filter(
      (item) => item.language.name === "ko"
    );

    // 객체의 같은 키 중 동일한 값 제거
    const description = allDescription.filter(
      (obj, index, self) =>
        index ===
        self.findIndex((target) => target.flavor_text === obj.flavor_text)
    );

    this.el.classList.add("container", "the-pokemon");
    this.el.innerHTML = /* html */ `
    <div class="images">
      <div>
        <p>앞</p>
        <img src="${images.front_default}" />
      </div>
      <div>
        <p>뒤</p>
        <img src="${images.back_default}" />
      </div>
      <div>
        <p>앞 (돌연변이)</p>
        <img src="${images.front_shiny}" />
      </div>
      <div>
        <p>뒤 (돌연변이)</p>
        <img src="${images.back_shiny}" />
      </div>
    </div>

    <div class="status">
      <p>${name}</p>
      ${types
        .map((type) => {
          return `<p>${type.type.name}</p>`;
        })
        .join("")}
        <p>height : ${+height * 10}cm</p>
        <p>weight : ${(+weight * 100) / 1000}kg</p>
    </div>
    
    <div class="description">
      ${description
        .map((text) => {
          return `<p>${text.flavor_text}</p>`;
        })
        .join("")}
    </div>
    `;
  }
}
