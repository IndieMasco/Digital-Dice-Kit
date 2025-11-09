import Logo from "./logo/Logo.png";
import bmcIcon from "./icons/bmc.png";
import GitHubIcon from "./icons/github.png";
import LinkedinIcon from "./icons/Linkedin.png";
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
      <h1 className="title">Digital Dice Kit</h1>
      <nav className="header-nav">
        <a
          href="https://github.com/IndieMasco"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={GitHubIcon} alt="Github icon" className="header-icons" />
        </a>
        <a
          href="https://www.linkedin.com/in/sam-p-j-clark/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={LinkedinIcon}
            alt="Linkedin icon"
            className="header-icons"
          />
        </a>
        <a
          href="https://buymeacoffee.com/samclark"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={bmcIcon}
            alt="Buy me a coffee icon"
            className="header-icons"
          />
        </a>
      </nav>
    </div>
  );
}
