import "./Footer.css";
import bmcIcon from "./icons/bmc.png";
import GitHubIcon from "./icons/github.png";
import LinkedinIcon from "./icons/Linkedin.png";

export default function Footer() {
  return (
    <div className="footer-container">
      <p className="name">&copy; S P J Clark 2025</p>

      <nav className="footer-nav">
        <a
          href="https://github.com/IndieMasco"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={GitHubIcon} alt="Github icon" className="footer-icons" />
        </a>
        <a
          href="https://www.linkedin.com/in/sam-p-j-clark/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={LinkedinIcon}
            alt="Linkedin icon"
            className="footer-icons"
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
            className="footer-icons"
          />
        </a>
      </nav>

      <a href="#" className="btt">
        Back to Top
      </a>
    </div>
  );
}
