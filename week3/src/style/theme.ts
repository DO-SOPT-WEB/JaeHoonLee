import { DefaultTheme } from "styled-components";

const colors = {
  mainBlue: "#3498DB", //sky
  backgroundGrey: "#ECF0F1", //grey
  backgroundBeige: "#F1ECF0",
  subBlue: "#90bbe7",
  mainGreen: " #a8f0e5",
  subGreen: "#91d8c9",
};

const fontSize = {
  head0: "3.5rem",
  head1: "2.8rem",
  head2: "2.4rem",
  head3: "2rem",
  body1: "1.8rem",
  body2: "1.6rem",
};

export type ColorTypes = typeof colors;
export type FontsTypes = typeof fontSize;

const theme: DefaultTheme = {
  colors,
  fontSize,
};

export default theme;
