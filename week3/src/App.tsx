import { ThemeProvider } from "styled-components";
import GlobalStyle from "./style/globalStyles";
import theme from "./style/theme";
import styled from "styled-components";
import MainPage from "./pages/MainPage";
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <h1>hello world</h1>
        <MainPage></MainPage>
      </ThemeProvider>
    </>
  );
}

export default App;
