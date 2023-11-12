import { useState, useEffect } from "react";
import Counter from "./Counter";
import styled from "styled-components";
import getRandomFood from "../utils/RandomSelect";
import { FOODS } from "../constants/Food";
const RandomResult = () => {
  const [time, setTime] = useState(3);

  const randomFood = getRandomFood(FOODS);
  useEffect(() => {
    time > 0 && setTimeout(() => setTime(time - 1), 1000);
  }, [time]);
  return (
    <RandomWrapper>
      {time ? (
        <Counter time={time}></Counter>
      ) : (
        <RandomContainer>
          <ResultImg src={randomFood.src}></ResultImg>
          <FoodName>{randomFood.name}</FoodName>
        </RandomContainer>
      )}
    </RandomWrapper>
  );
};

const RandomWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const RandomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const ResultImg = styled.img`
  width: 55rem;
  height: 40rem;
  object-fit: cover;
`;

const FoodName = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.head0};
`;
export default RandomResult;
