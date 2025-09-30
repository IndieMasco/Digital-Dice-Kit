import Logo from "./Logo.png";
import diceRollSound from "./dice-roll.mp3";

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
        className="header-logo"
        src={Logo}
        alt="Logo for Digital Dice Kit"
        onClick={playDiceRollSound}
        style={{ cursor: "pointer" }}
      />
      <h1 className="header-title">Digital Dice Kit</h1>
    </div>
  );
}
