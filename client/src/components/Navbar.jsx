import styled from "styled-components";
import LoginIcon from '@mui/icons-material/Login';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from "react-router-dom";

import MenuOpenTwoToneIcon from '@mui/icons-material/MenuOpenTwoTone';


const Container = styled.nav`
  box-sizing:border-box;
  background-color:${({theme}) => theme.bg};
  height:5rem;
  display:flex;
  align-items:center;
  justify-content:space-around;
  position:sticky;
  top:0;
`

const Search = styled.div`
  display:flex;
  align-items:center;
  
  width:50%;
  border:1px solid #ccc;

  @media only screen and (max-width:720px){
    height:50%;
  }
`
const Input = styled.input`
  width:100%;
  outline:none;
  padding:10px;
  color: ${({theme}) => theme.text};
  background-color:transparent;
  border:none;
`

const SignInButton = styled.button`
  display:flex;
  align-items:center;
  justify-content:center;
  gap:10px;
  margin-right:20px;
  background-color:transparent;
  font-weight:bold;
  padding:5px;
  cursor:pointer;
  color:#3ea6ff;
  border:1px solid #3ea6ff;
  border-radius:3px;
`;

const MenuButton = styled.div`
    cursor:pointer;
    display:none;
    @media screen only and (max-wdith:1400px){
        display:visible;
    }
`;




const Navbar = () => {
  return (
    <Container>
      <MenuButton>
        <MenuOpenTwoToneIcon />
      </MenuButton>
     <Search>
      <Input placeholder="Search" />
      <SearchOutlinedIcon />
     </Search>
     <Link to="/signin" style={{textDecoration:"none", color:"inherit"}}>
        <SignInButton><LoginIcon /> Sign In</SignInButton>
      </Link>
    </Container>
  )
}

export default Navbar