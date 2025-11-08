import "./App.css";

import Header from "./components/header/Header";
import DiceRoller from "./components/dice/DiceRoller";
import CustomDiceRoller from "./components/dice/CustomDiceRoller";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <>
      <Header />
      <section className="dice">
        <DiceRoller sides={4} />
        <DiceRoller sides={6} />
        <DiceRoller sides={8} />
      </section>
      <section className="dice">
        <DiceRoller sides={10} />
        <DiceRoller sides={12} />
        <DiceRoller sides={20} />
      </section>
      <section className="dice">
        <DiceRoller sides={100} />
        <CustomDiceRoller />
      </section>
      <Footer />
    </>
  );
}
