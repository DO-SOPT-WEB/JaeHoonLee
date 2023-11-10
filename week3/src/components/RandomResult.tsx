import { useState, useEffect } from "react";
import Counter from "./Counter";
import styled from "styled-components";
const RandomResult = () => {
  const [time, setTime] = useState(3);

  useEffect(() => {
    time > 0 && setTimeout(() => setTime(time - 1), 1000);
  }, [time]);
  return (
    <RandomWrapper>
      {time ? <Counter time={time}></Counter> : <div>result!</div>}
    </RandomWrapper>
  );
};

const RandomWrapper = styled.div`
  width: 40rem;
  height: 25rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export default RandomResult;
