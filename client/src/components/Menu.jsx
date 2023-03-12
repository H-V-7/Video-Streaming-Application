import styled from "styled-components";
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';

const Container = styled.div`
  box-sizing:border-box;
  background-color:#202020;
  color:white;
  display:flex;
  flex-direction:column;
  gap:10px;
  align-items:flex-start;
  padding:10px;
  max-width:250px;
  min-width:100px;
  height:100vh
`;

const LogoContainer = styled.div`
  display:flex;
  align-items:center;
  padding:0px;
`
const MenuItem = styled.div`
  display:flex;
  align-items:center;
  gap:10px;
  cursor:pointer;
  
`




const Menu = () => {
  return (
    <Container>
      <LogoContainer>
          Video Gram
      </LogoContainer>
      <MenuItem>
        <HomeIcon />
        Menu
      </MenuItem>
      <MenuItem>
        <ExploreIcon />
        Explore
      </MenuItem>
      <MenuItem>
        <SubscriptionsIcon />
        Subscription
      </MenuItem>
      
    </Container>
  )
}

export default Menu