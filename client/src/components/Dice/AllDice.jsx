import D4 from "./Dice/D4";
import D6 from "./Dice/D6";
import D8 from "./Dice/D8";
import D10 from "./Dice/D10";
import D12 from "./Dice/D12";
import D20 from "./Dice/D20";
import D100 from "./Dice/D100";

export default function AllDice() {
  return (
    <>
      <D4 className="D4" />
      <D6 className="D6" />
      <D8 className="D8" />
      <D10 className="D10" />
      <D12 className="D12" />
      <D100 className="D100" />
      <D20 className="D20" />
    </>
  );
}
