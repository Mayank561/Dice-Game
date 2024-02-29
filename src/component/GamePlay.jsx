/** @format */

// import styled from "styled-components"
import styled from "styled-components";
import NumberSelectors from "./NumberSelectors";
import TotalScore from "./TotalScore";
import RoleDice from "./RoleDice";
import { useState } from "react";
import { Button, OutlinButton } from "../styled/Button";
import Rule from "./Rule";
const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);


  const genRandomNumber = (min, max)=>{
    return Math.floor(Math.random() * (max - min)+min)
}
const rollDice = ()=>{
    const randomNumber = genRandomNumber(1,7);
    // eslint-disable-next-line no-unused-vars
    setCurrentDice((prev)=> randomNumber);
    if(!selected) {
      setError("YOU HAVE NOT SELECTED ANY NUMBER")
      return;
    }
   
    if(selected === randomNumber){
      setScore((prev)=> prev + randomNumber);
    }else{
      setScore((prev)=> prev-2);
    }
    setSelected(undefined)
};
const resetScore = ()=>{
  setScore(0);
}
  return (
    <MainContainer>
      <div className='disk'>
        <TotalScore score={score}/>
        <NumberSelectors  setError={setError} error={error} selected={selected} setSelected={setSelected}/>
      </div>
      <RoleDice currentDice={currentDice} rollDice={rollDice}/>
      <div className="btns">
        <OutlinButton onClick={resetScore}>Reset</OutlinButton>
        <Button onClick={()=> setShowRules((prev)=> !prev)}>{showRules ? "Hide" : "show"}Rules</Button>
      </div>
      { showRules && <Rule />}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 70px;
  .disk {
    display: flex;
    justify-content: space-around;
    align-items: end;
    /* float: ; */
  }
  .btns{
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* max-width: 220px; */
    align-items: center;
    gap: 10px;
    margin-top: 40px;

  }
`;
