import { createGlobalStyle } from "styled-components";

import { reset } from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    html, body {

margin: 0 auto;
background-color: #141414;
font-size: 62.5%;
}
`;

export default GlobalStyle;
