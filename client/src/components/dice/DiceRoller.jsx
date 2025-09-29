import { useState } from "react";

export default function DiceRoller({ sides }) {
  const numSides = parseInt(sides, 10) || 6;
  const [numRolls, setNumRolls] = useState(1);
  const [rollValues, setRollValues] = useState([]);

  const generateRoll = () => {
    return Math.floor(Math.random() * numSides) + 1;
  };

  const RollDice = () => {
    const values = [];

    for (let i = 0; i < numRolls; i++) {
      values.push(generateRoll());
    }

    setRollValues(values);
  };

  const handleNumRollsChange = (event) => {
    const newNum = Math.max(1, parseInt(event.target.value) || 1);
    setNumRolls(newNum);
  };

  return (
    <div className="dice-container">
      <h1>D{numSides}</h1>
      <label htmlFor="numofdice">Number of rolls: </label>
      <input
        type="number"
        className="dice-input"
        name="numofdice"
        value={numRolls}
        onChange={handleNumRollsChange}
        min="1"
      />
      <button className="dice-button" onClick={RollDice}>
        Roll Dice
      </button>
      <div className="dice-result">Result: {rollValues.join(", ")}</div>
    </div>
  );
}
