/* eslint-disable no-unused-vars */
 import { useState } from "react"
import Start from "./component/Start"
import GamePlay from "./component/GamePlay";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = ()=>{
    setIsGameStarted((prev) => !prev);
  }
  return (
  <>
  {
    isGameStarted ? <GamePlay /> : <Start 
    toggle={toggleGamePlay}/>
  }
  </>
  );
}

export default App
