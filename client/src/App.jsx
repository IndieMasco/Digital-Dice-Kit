import "./App.css";

import Header from "./components/header/Header";
import DiceRoller from "./components/dice/DiceRoller";

export default function App() {
  return (
    <>
      <Header />
      <DiceRoller sides={4} />
      <DiceRoller sides={6} />
      <DiceRoller sides={8} />
      <DiceRoller sides={10} />
      <DiceRoller sides={12} />
      <DiceRoller sides={20} />
      <DiceRoller sides={100} />
    </>
  );
}
