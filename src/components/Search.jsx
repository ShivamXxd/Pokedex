import SearchIcon from "@material-ui/icons/Search";
import { useState } from "react";

function Search(props) {
  const [name, setName] = useState("");
  function handleChange(event) {
    const input = event.target.value;
    const inputName = input.toLowerCase();
    setName(inputName);
  }
  function searchPokemon() {
    if (name === "") {
      return;
    } else {
      props.onSearch(name);
    }
    setName("");
  }
  return (
    <div className="search-div">
      <SearchIcon fontSize="large" />
      <input
        name="searchBar"
        className="search-bar"
        type="text"
        placeholder="Search Pokemon"
        spellCheck="false"
        onChange={handleChange}
        value={name}
      />
      <button className="search-btn" onClick={searchPokemon}>
        Search
      </button>
    </div>
  );
}
export default Search;
