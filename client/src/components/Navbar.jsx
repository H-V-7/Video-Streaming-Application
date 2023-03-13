import styled from "styled-components";
import LoginIcon from '@mui/icons-material/Login';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';



const Container = styled.nav`
  box-sizing:border-box;
  background-color:${({theme}) => theme.bg};
  height:4rem;
  display:flex;
  align-items:center;
  justify-content:space-between;
  positiion:sticky;
  top:0;
`

const Search = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  width:50%;
  border:1px solid #ccc;
  margin-left:100px;
  
`
const Input = styled.input`
  width:100%;
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




const Navbar = () => {
  return (
    <Container>
     <Search>
      <Input placeholder="Search" />
      <SearchOutlinedIcon />
     </Search>
     <SignInButton><LoginIcon /> Sign In</SignInButton>
    </Container>
  )
}

export default Navbar