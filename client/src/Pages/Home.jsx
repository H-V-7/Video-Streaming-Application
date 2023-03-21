import styled from "styled-components"
import Card from "../components/Card"

const Container = styled.div`
  
  display:flex;
  gap:10px;
  margin-top:50px;
  flex-wrap:wrap;
  justify-content:space-evenly;
  align-items:center;

`

function Home() {
  return (
    <Container>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      
    </Container>
  )
}

export default Home