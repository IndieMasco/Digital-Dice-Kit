import Logo from "./logo/Logo.png";
import diceRollSound from "./logo/dice-roll.mp3";
import "./Header.css";

export default function Header() {
  const playDiceRollSound = () => {
    const audio = new Audio(diceRollSound);
    audio.play().catch((error) => {
      console.error("Error playing sound:", error);
    });
  };

  return (
    <div className="header-container">
      <img
        className="logo"
        src={Logo}
        alt="Digital Dice Kit Logo"
        onClick={playDiceRollSound}
        style={{ cursor: "pointer" }}
      />
      <div className="title">
        <h1>Digital Dice Kit</h1>
      </div>
    </div>
  );
}
