import styled, { ThemeProvider } from "styled-components";
import './App.css';
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { lightTheme,darkTheme } from "./utils/Theme";
import { useState } from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Pages/Home";
import Video from "./Pages/Video";
import SignIn from "./Pages/SignIn";

const Container = styled.div`
  display:grid;
  grid-template-columns: 20% 80%;
  grid-template-areas: menu main;

  @media only screen and  (max-width:1400px){
    display:grid;
    grid-template-columns: 100%;
    grid-template-areas: main;
  }

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
        <BrowserRouter>
          <Menu className="menu" darkMode={darkMode} setDarkMode={setDarkMode}/>
          <Main className="main">
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/video/:id" element={<Video />} />
                <Route path="/signin" element={<SignIn />} />
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
