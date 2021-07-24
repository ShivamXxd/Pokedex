function Card(props) {
  const weightKg = Number(props.weight) / 10;
  const heightM = Number(props.height) / 10;

  var randomArray = [];
  while (randomArray.length < props.moves.length) {
    var r = Math.floor(Math.random() * props.moves.length);
    if (randomArray.indexOf(r) === -1) randomArray.push(r); // push if random number is not in array
  }
  var typesArray = props.pokeTypes;

  return (
    <div id="wrap">
      <div className={"info-card" + props.className}>
        <div className="container">
          <h1 className={props.className}>{props.pokeName}</h1>
          <button className={"type " + typesArray[0] + " " + props.className}>
            {typesArray[0]}
          </button>
          {typesArray.length === 2 ? (
            <button className={"type " + typesArray[1] + " " + props.className}>
              {typesArray[1]}
            </button>
          ) : null}
          <h3 className={props.className}>{heightM} meters</h3>
          <h3 className={props.className}>{weightKg} kilograms</h3>
          <img className={"poke-img " + props.className} src={props.img} />
          <h2 className={props.className + " moveset"}>Moveset</h2>
          <ul className={props.className}>
            <li>{props.moves[randomArray[0]]}</li>
            <li>{props.moves[randomArray[1]]}</li>
            <li>{props.moves[randomArray[2]]}</li>
            <li>{props.moves[randomArray[3]]}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
