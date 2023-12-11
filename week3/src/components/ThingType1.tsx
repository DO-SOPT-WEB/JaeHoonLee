import React from "react";
import styled from "styled-components";
import { StateTypes } from "../types/stateTypes";
import { ThingTypeCountry } from "../constants/ThingTypeWord";
import ThingSelectButton from "./atomComponents/ThingSelectButton";
interface ThingType {
  state: StateTypes;
  setCountry: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ThingType1 = ({ state, setCountry }: ThingType) => {
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCountry(e);
  };
  return (
    <ThingTypeWrapper>
      {ThingTypeCountry.map((item) => (
        <ThingSelectButton
          value={item.value}
          $active={state.countryType === item.value}
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

export default ThingType1;
