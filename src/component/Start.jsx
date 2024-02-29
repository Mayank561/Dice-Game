/* eslint-disable react/prop-types */
import styled from "styled-components"
import { Button } from "../styled/Button";
const Start = ({toggle}) => {
  return (
    <Container>
        <div>
        <img src="/images/dices1.png" alt="dices_imgaes" />
        </div>
        <div className="content">
            <h1>Dice Game</h1>
            <Button
            onClick={toggle}
            >Play Now</Button>
        </div>
    </Container>
  )
}

export default Start;

const Container = styled.div`
    max-width: 1180px;
    display: flex;
    margin: 0px auto;
    align-items: center;
    height: 100vh;

    .content h1{
        font-size: 96px;
        /* sinle line  */
        white-space: nowrap;
        line-height: 144px;
    }
`;

// const Button = styled.button`
//     width: 220px;
//     height: 44px;
//     border-radius: 4px;
//     padding: 10px 18px 10px 18px;
//     gap: 10px;
//     background-color: black;
//     color: white;
//     font-weight: 500px;
//     border: 1px solid transparent;
//     transition: 0.4s background ease-in;
//     cursor: pointer;


//     &:hover{
//         background-color: white;
//         border: 1px solid black;
//         color: black;
//         transition: 0.3s background ease-in;
//         cursor: pointer;
//     }
// `