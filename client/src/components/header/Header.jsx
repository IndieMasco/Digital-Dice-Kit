import Logo from "./Logo.png";

export default function Header() {
  return (
    <div className="header-container">
      <img className="header-logo" src={Logo} alt="Logo for Digital Dice Kit" />
      <h1 className="header-title">Digital Dice Kit</h1>
    </div>
  );
}
