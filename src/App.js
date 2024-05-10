import AiEtfSec from "./components/AiEtfSec";
import Header from "./components/Header";
import HowItWork from "./components/HowItWork";
import Statistics from "./components/Statistics";

function App() {
  return (
    <div className="bg-blue">
      <Header />
      <AiEtfSec />
      <HowItWork />
      <Statistics />
    </div>
  );
}

export default App;
