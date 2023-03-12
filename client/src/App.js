import styled from "styled-components";
import './App.css';
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";


const Container = styled.div`
  display:grid;
  grid-template-columns: 20% 80%;
  grid-template-areas: menu main;
  gap:1rem;
  
  
`

const Main = styled.div`

`;

const Wrapper = styled.div``;

function App() {
  return (
    <Container>
      <Menu className="menu"/>
      <Main className="main">
        <Navbar />
        <Wrapper>
          video cards
        </Wrapper>
      </Main>
    </Container>
  );
}

export default App;
