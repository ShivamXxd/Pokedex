import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import Search from "./Search";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("pikachu");
  const [naam, setNaam] = useState("");
  const [types, setTypes] = useState([]);
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [img, setImg] = useState("");
  const [moves, setMoves] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  function getName(pokeName) {
    setHasSearched(true);
    setName(pokeName);
  }
  useEffect(() => {
    async function getData() {
      const pokeData = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );

      const poke = pokeData.data.name;
      const pokeNaam = poke.slice(0, 1).toUpperCase() + poke.slice(1);
      const pokeWeight = pokeData.data.weight;
      const pokeHeight = pokeData.data.height;
      let typeArray = [];
      for (let i = 0; i < pokeData.data.types.length; i++) {
        typeArray.push(pokeData.data.types[i].type.name);
      }
      const pokeImg =
        pokeData.data.sprites.other["official-artwork"].front_default;
      const pokeMoves = pokeData.data.moves;
      let proxyArray = [];
      for (let i = 0; i < pokeMoves.length; i++) {
        const level = pokeMoves[i].version_group_details[0].level_learned_at;
        if (level > 0) {
          proxyArray.push(pokeMoves[i].move.name);
        }
      }
      setMoves(proxyArray);
      setTypes(typeArray);
      setNaam(pokeNaam);
      setWeight(pokeWeight);
      setHeight(pokeHeight);
      setImg(pokeImg);
    }
    getData();
  }, [name]);

  return (
    <div>
      <Header />
      <Search onSearch={getName} />
      <Card
        className={hasSearched ? "" : "hide-card"}
        pokeName={naam}
        pokeTypes={types}
        height={height}
        weight={weight}
        img={img}
        moves={moves}
      />
      <Footer />
    </div>
  );
}

export default App;
