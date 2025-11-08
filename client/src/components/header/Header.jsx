import Logo from "./Logo.png";
import diceRollSound from "./dice-roll.mp3";
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
        alt="Logo for Digital Dice Kit"
        onClick={playDiceRollSound}
        style={{ cursor: "pointer" }}
      />
      <h1 className="title">Digital Dice Kit</h1>
      <nav className="nav">
        <a
          href="https://github.com/IndieMasco"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-github-square" style={{ fontSize: "36px" }}></i>
        </a>
        <a
          href="https://www.linkedin.com/in/sam-p-j-clark/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-linkedin-square" style={{ fontSize: "36px" }}></i>
        </a>
      </nav>
    </div>
  );
}
