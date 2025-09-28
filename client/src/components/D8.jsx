import { useState } from "react";

export default function D8() {
  const [numRolls, setNumRolls] = useState(1);
  const [rollValues, setRollValues] = useState([]);

  const RollDice = () => {
    const values = [];
    const images = [];

    for (let i = 0; i < numRolls; i++) {
      const value = Math.floor(Math.random() * 8) + 1;
      values.push(value);

      const imageSrc = `/src/assets/${value}.png`;

      images.push(
        <img
          key={i}
          src={imageSrc}
          alt={`Dice roll: ${value}`}
          style={{ margin: "5px", width: "50px" }}
        />
      );
    }

    setRollValues(values);
  };

  const handleNumRollsChange = (event) => {
    const newNum = Math.max(1, parseInt(event.target.value) || 1);
    setNumRolls(newNum);
  };

  return (
    <div className="container">
      <h1>D8</h1>
      <label htmlFor="numofdice">Number of rolls: </label>
      <input
        type="number"
        className="input"
        name="numofdice"
        value={numRolls}
        onChange={handleNumRollsChange}
        min="1"
      />
      <button className="button" onClick={RollDice}>
        Roll Dice
      </button>
      <div className="result">Result: {rollValues.join(", ")}</div>
    </div>
  );
}
