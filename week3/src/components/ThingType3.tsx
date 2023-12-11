import React from "react";
import { StateTypes } from "../types/stateTypes";
import styled from "styled-components";
import { ThingTypeFriedBool } from "../constants/ThingTypeWord";
import ThingSelectButton from "./atomComponents/ThingSelectButton";
interface ThingType {
  state: StateTypes;
  setFried: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const ThingType3 = ({ state, setFried }: ThingType) => {
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setFried(e);
  };

  return (
    <ThingTypeWrapper>
      {ThingTypeFriedBool.map((item) => (
        <ThingSelectButton
          value={item.value}
          $active={state.fried === item.value}
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
export default ThingType3;
