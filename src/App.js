import { useState } from "react";
import Board from "./components/Board"
import ScoreBoard from "./components/ScoreBoard"

function App() {

  const [winner, setWinner] = useState(null);

  return (
    <div className="app">
      <Board winner={winner} setWinner={setWinner}/>
      <ScoreBoard winner={winner}/>
    </div>
  );
}

export default App;