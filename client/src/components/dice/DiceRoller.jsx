import { useState, useId } from "react";
import "./Dice.css";

export default function DiceRoller({ sides }) {
  const numRollsId = useId();
  const numSides = parseInt(sides, 10) || 6;
  const [numRolls, setNumRolls] = useState(1);
  const [rollValues, setRollValues] = useState([]);

  const generateRoll = () => {
    return Math.floor(Math.random() * numSides) + 1;
  };

  const RollDice = () => {
    const values = [];
    const rolls = Math.max(parseInt(numRolls, 10));
    for (let i = 0; i < rolls; i++) {
      values.push(generateRoll());
    }
    setRollValues(values);
  };

  const handleNumRollsChange = (event) => {
    const newNum = Math.max(parseInt(event.target.value));
    setNumRolls(newNum);
  };

  const totalRoll = rollValues.reduce((sum, current) => sum + current, 0);

  return (
    <div className="dice-container">
      <h2>D{numSides}</h2>
      <label htmlFor={numRollsId}>Number of rolls: </label>
      <input
        type="number"
        className="input"
        id={numRollsId}
        name="numofdice"
        value={numRolls}
        onChange={handleNumRollsChange}
        min="1"
      />
      <button className="button" onClick={RollDice}>
        Roll Dice
      </button>
      <p className="results">Rolls: {rollValues.join(", ")}</p>
      <p className="results">Total: {totalRoll}</p>
    </div>
  );
}
