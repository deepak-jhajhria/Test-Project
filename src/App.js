import AiEtfSec from "./components/AiEtfSec";
import HeroSec from "./components/HeroSec";
import HowItWork from "./components/HowItWork";
import Statistics from "./components/Statistics";

function App() {
  return (
    <div className="bg-blue">
      <HeroSec />
      <AiEtfSec />
      <HowItWork />
      <Statistics />
    </div>
  );
}

export default App;
