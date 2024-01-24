interface FoodTypes {
  name: string;
  countryType: string;
  ingredient: string;
  fried: string;
  src: string;
}

const getRandomFood = (foods: FoodTypes[]) => {
  const randomIndex = Math.floor(Math.random() * foods.length);
  return foods[randomIndex];
};

export default getRandomFood;
