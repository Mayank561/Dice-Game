/* eslint-disable react/prop-types */
// import { useState } from "react"
import styled from "styled-components"

const RoleDice = ({currentDice, rollDice}) => {
    // const [currentDice, setCurrentDice] = useState(1);

    // const genRandomNumber = (min, max)=>{
    //     return Math.floor(Math.random() * (max - min)+min)
    // }
    // const rollDice = ()=>{
    //     const randomNumber = genRandomNumber(1,7);
    //     setCurrentDice((prev)=> randomNumber);
    // }
  return (
    <Dice>
        <div className="roll" onClick={rollDice}>
            <img src={`images/dice/dice_${currentDice}.png`} alt="1" />
        </div>
        <p>Click on Dice to roll</p>
    </Dice>
  )
}

export default RoleDice

const Dice = styled.div`
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .roll{
        cursor: pointer;
    }
    p{
        font-size: 24px;
    }
`