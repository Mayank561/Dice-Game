/* eslint-disable react/prop-types */
/** @format */

// import { useState } from "react";
import styled from "styled-components";

const NumberSelectors = ({error,setError, selected, setSelected}) => {
  const arr = [1, 2, 3, 4, 5, 6];
  // const [selected, setSelected] = useState();
  // console.log(selected);
  const numberSelector = (value)=>{
    setSelected(value)
    setError("");
  }
  return (
    <Container>
      <p className="error">{error}</p>
      <div className="flex">
        {arr.map((value, i) => (
          // props
          <Box
            isSelected={value === selected}
            key={i}
            onClick={()=>numberSelector(value)}>
            {value}
          </Box>
        ))}
        {/* <Box>1</Box>
      <Box>1</Box>
      <Box>1</Box> */}
      </div>
      <p>Select Number</p>

    </Container>
  );
};
export default NumberSelectors;

const Container = styled.div`

  display: flex;
  flex-direction: column;
  align-items: end;
  .flex{
    display: flex;
    gap: 24px; 
  }
  p{
    font-size: 24px;
    font-weight: 700px;
  }
  .error{
    color: red;
  }
`

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 700px;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
  /* color: black; */
`;
