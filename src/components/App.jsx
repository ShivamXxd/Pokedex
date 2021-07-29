import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import Search from "./Search";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("ditto");
  const [naam, setNaam] = useState("");
  const [pokeItems, setPokeItems] = useState({
    height: "",
    weight: "",
    image: "",
  });
  const [types, setTypes] = useState([]);
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

      setPokeItems({
        height: pokeData.data.height,
        weight: pokeData.data.weight,
        image: pokeData.data.sprites.other["official-artwork"].front_default,
      });

      let typeArray = [];
      for (let i = 0; i < pokeData.data.types.length; i++) {
        typeArray.push(pokeData.data.types[i].type.name);
      }
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
        height={pokeItems.height}
        weight={pokeItems.weight}
        img={pokeItems.image}
        moves={moves}
      />
      <Footer />
    </div>
  );
}

export default App;
