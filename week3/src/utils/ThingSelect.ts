import { FOODS } from "../constants/Food";
import { StateTypes } from "../types/stateTypes";

const ThingSelect = ({ state }: { state: StateTypes }) => {
  return FOODS.filter(
    (food) =>
      food.countryType == state.countryType &&
      food.ingredient === state.ingredient &&
      food.fried === state.fried
  );
};

export default ThingSelect;
