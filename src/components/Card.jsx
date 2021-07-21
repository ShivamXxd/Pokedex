import CardMedia from "@material-ui/core/CardMedia";

function Card(props) {
  const weightKg = Number(props.weight) / 10;
  const heightM = Number(props.height) / 10;

  var randomArray = [];
  while (randomArray.length < props.moves.length) {
    var r = Math.floor(Math.random() * props.moves.length);
    if (randomArray.indexOf(r) === -1) randomArray.push(r); // push if random number is not in array
  }

  return (
    <div className={"info-card" + props.className}>
      <div className="container">
        <h1 className={props.className}>{props.pokeName}</h1>
        <button className={"type " + props.pokeType + " " + props.className}>
          {props.pokeType.toUpperCase()}
        </button>
        <h3 className={props.className}>{heightM} meters</h3>
        <h3 className={props.className}>{weightKg} kilograms</h3>
        <CardMedia
          className={"poke-img " + props.className}
          image={props.img}
        />
        <h2 className={props.className + " moveset"}>Moveset</h2>
        <ul className={props.className}>
          <li>{props.moves[randomArray[0]]}</li>
          <li>{props.moves[randomArray[1]]}</li>
          <li>{props.moves[randomArray[2]]}</li>
          <li>{props.moves[randomArray[3]]}</li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
