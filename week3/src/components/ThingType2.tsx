import React from "react";
import { StateTypes } from "../types/stateTypes";
import styled from "styled-components";
import ThingSelectButton from "./atomComponents/ThingSelectButton";
import { ThingTypeIngredient } from "../constants/ThingTypeWord";
interface ThingType {
  state: StateTypes;
  setIngredient: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const ThingType2 = ({ state, setIngredient }: ThingType) => {
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIngredient(e);
  };

  return (
    <ThingTypeWrapper>
      {ThingTypeIngredient.map((item) => (
        <ThingSelectButton
          value={item.value}
          $active={state.ingredient === item.value}
          handleButtonClick={handleButtonClick}
          name={item.name}
        ></ThingSelectButton>
      ))}
    </ThingTypeWrapper>
  );
};

const ThingTypeWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export default ThingType2;
