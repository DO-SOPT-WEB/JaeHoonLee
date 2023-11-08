import { DefaultTheme } from "styled-components";

const colors = {
  mainBlue: "#3498DB", //sky
  mainBackground: "#ECF0F1", //grey
};

const fontSize = {
  head1: "2.4rem",
  head2: "2.0rem",
  head3: "1.6rem",
  body1: "1.2rem",
  body2: "1.0rem",
};

export type ColorTypes = typeof colors;
export type FontsTypes = typeof fontSize;

const theme: DefaultTheme = {
  colors,
  fontSize,
};

export default theme;
