import "./App.css";

import Header from "./components/header/Header";
import DiceRoller from "./components/dice/DiceRoller";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <>
      <Header />
      <div className="app-row">
        <DiceRoller sides={4} />
        <DiceRoller sides={6} />
        <DiceRoller sides={8} />
      </div>
      <div className="app-row">
        <DiceRoller sides={10} />
        <DiceRoller sides={12} />
        <DiceRoller sides={20} />
      </div>
      <div className="app-row">
        <DiceRoller sides={100} />
      </div>
      <Footer />
    </>
  );
}
