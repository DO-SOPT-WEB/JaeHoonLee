import { ThemeProvider } from "styled-components";
import GlobalStyle from "./style/globalStyles";
import theme from "./style/theme";
import styled from "styled-components";
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <h1>hello world</h1>
        <HeadText>Theme!</HeadText>
      </ThemeProvider>
    </>
  );
}

const HeadText = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.head1};
  color: ${({ theme }) => theme.colors.mainBlue};
`;
export default App;
