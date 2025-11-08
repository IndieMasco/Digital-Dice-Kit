import { useState } from "react";
import "./Dice.css";

export default function CustomDiceRoller() {
  const [numSides, setNumSides] = useState(7);
  const [numRolls, setNumRolls] = useState(1);
  const [rollValues, setRollValues] = useState([]);

  const generateRoll = () => {
    const sides = Math.max(parseInt(numSides, 10));
    return Math.floor(Math.random() * sides) + 1;
  };

  const RollDice = () => {
    const values = [];
    const rolls = Math.max(parseInt(numRolls, 10));
    for (let i = 0; i < rolls; i++) {
      values.push(generateRoll());
    }
    setRollValues(values);
  };

  const handleNumSidesChange = (event) => {
    const newNum = Math.max(parseInt(event.target.value, 10));
    setNumSides(newNum);
  };

  const handleNumRollsChange = (event) => {
    const newNum = Math.max(parseInt(event.target.value, 10));
    setNumRolls(newNum);
  };

  const totalRoll = rollValues.reduce((sum, current) => sum + current, 0);

  return (
    <div className="dice-container custom-dice-container">
      <h2>Custom Dice</h2>
      <label htmlFor="numofsides">Number of sides: </label>
      <input
        type="number"
        className="input"
        name="numofsides"
        value={numSides}
        onChange={handleNumSidesChange}
        min="1"
      />
      <br />
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
        Roll D{numSides} x {numRolls}
      </button>
      <p className="results">Rolls: {rollValues.join(", ")}</p>
      <p className="results">Total: {totalRoll}</p>
    </div>
  );
}
