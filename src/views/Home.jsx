import React from "react";
import { useState, useEffect } from "react";
import ApiFetch from "../utils/ApiFetch";
import "../App.css";

function Home() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    if (pokemonList.length === 0) {
      ApiFetch(setPokemonList);
    }
  }, []);

  return (
    <div className="mainDiv">
      <div className="headerDiv">
        <div className="titleDiv">
          <h1 className="titleText">Pokedex</h1>
          <input type="text" name="Search" id="search" placeholder="Search"/>
        </div>
        <div className="typeDiv">
          Normal
          <input type="checkbox" name="normalType" id="normalType" />
          Fire
          <input type="checkbox" name="fireType" id="fireType" />
          Water
          <input type="checkbox" name="waterType" id="waterType" />
          Grass
          <input type="checkbox" name="grassType" id="grassType" />
          Poison
          <input type="checkbox" name="poisonType" id="poisonType" />
          Flying
          <input type="checkbox" name="flyingType" id="flyingType" />
          Bug
          <input type="checkbox" name="bugType" id="bugType" />
          Electric
          <input type="checkbox" name="electricType" id="electricType" />
          Ground
          <input type="checkbox" name="groundType" id="groundType" />
          Fighting
          <input type="checkbox" name="fightingType" id="fightingType" />
          Psychic
          <input type="checkbox" name="psychicType" id="psychicType" />
          Rock
          <input type="checkbox" name="rockType" id="rockType" />
          Ice
          <input type="checkbox" name="iceType" id="iceType" />
          Ghost
          <input type="checkbox" name="ghostType" id="ghostType" />
          Dragon
          <input type="checkbox" name="dragonType" id="dragonType" />
        </div>

        <div className="weakDiv">
          Normal
          <input type="checkbox" name="normalWeak" id="normalWeak" />
          Fire
          <input type="checkbox" name="fireWeak" id="fireWeak" />
          Water
          <input type="checkbox" name="waterWeak" id="waterWeak" />
          Grass
          <input type="checkbox" name="grassWeak" id="grassWeak" />
          Poison
          <input type="checkbox" name="poisonWeak" id="poisonWeak" />
          Flying
          <input type="checkbox" name="flyingWeak" id="flyingWeak" />
          Bug
          <input type="checkbox" name="bugWeak" id="bugWeak" />
          Electric
          <input type="checkbox" name="electricWeak" id="electricWeak" />
          Ground
          <input type="checkbox" name="groundWeak" id="groundWeak" />
          Fighting
          <input type="checkbox" name="fightingWeak" id="fightingWeak" />
          Psychic
          <input type="checkbox" name="psychicWeak" id="psychicWeak" />
          Rock
          <input type="checkbox" name="rockWeak" id="rockWeak" />
          Ice
          <input type="checkbox" name="iceWeak" id="iceWeak" />
          Ghost
          <input type="checkbox" name="ghostWeak" id="ghostWeak" />
          Dragon
          <input type="checkbox" name="dragonWeak" id="dragonWeak" />
        </div>
      </div>

      <div className="pokemonGrid">
        {pokemonList.map((pokemon) => {
          return (
            <div className="pokemonCard">
              <h3>{pokemon.name}</h3>
              <img src={pokemon.img} alt="pokepic" />
              <p>Number: {pokemon.num}</p>
              <p>Type: {pokemon.type.join(`, `)}</p>
              <p>Weakness: {pokemon.weaknesses.join(`, `)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
