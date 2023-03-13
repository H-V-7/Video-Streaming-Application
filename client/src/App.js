import styled, { ThemeProvider } from "styled-components";
import './App.css';
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { lightTheme,darkTheme } from "./utils/Theme";
import { useState } from "react";


const Container = styled.div`
  display:grid;
  grid-template-columns: 20% 80%;
  grid-template-areas: menu main;
`

const Main = styled.div`
  color:${({theme}) => theme.text};
  background-color:${({theme}) => theme.bgLighter};
`;

const Wrapper = styled.div``;




function App() {
  const [darkMode, setDarkMode] = useState(true)
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <Menu className="menu" darkMode={darkMode} setDarkMode={setDarkMode}/>
        <Main className="main">
          <Navbar />
          <Wrapper>
            video cards
          </Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
