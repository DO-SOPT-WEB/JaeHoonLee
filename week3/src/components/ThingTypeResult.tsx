import { StateTypes } from "../types/stateTypes";
import styled from "styled-components";
import ThingSelect from "../utils/ThingSelect";

type ThingTypeResult = {
  state: StateTypes;
};

const ThingTypeResult = ({ state }: { state: StateTypes }) => {
  const resultFood = ThingSelect({ state });
  return (
    <ResultWrapper>
      <ResultImg src={resultFood[0].src}></ResultImg>
      <FoodName>{resultFood[0].name}</FoodName>
    </ResultWrapper>
  );
};

const ResultWrapper = styled.div`
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
export default ThingTypeResult;
