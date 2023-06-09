import styled from "styled-components";
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import HistoryIcon from '@mui/icons-material/History';
import LoginIcon from '@mui/icons-material/Login';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import BugReportIcon from '@mui/icons-material/BugReport';
import HelpIcon from '@mui/icons-material/Help';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import { Link } from "react-router-dom";

const Container = styled.div`
  box-sizing:border-box;
  
  height:100vh;
  position:sticky;
  top:0;
  background-color:${({theme}) => theme.bg};
  color: ${({theme}) => theme.text};
  display:flex;
  flex-direction:column;
  gap:1rem;
  align-items:flex-start;
  padding:20px;
  @media only screen and  (max-width:1400px){
    display:none;

  }
  
`;

const LogoContainer = styled.div`
  display:flex;
  align-items:center;
  gap:10px;
 
`
const MenuItem = styled.div`
  display:flex;
  overflow:hidden;
  width:100%;
  align-items:center;
  gap:1rem;
  padding:0.5rem;
  cursor:pointer;

  &:hover{
    background-color:${({theme}) => theme.bgLighter};
  }
  
`
const SignIn = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:10px;
  color:${({theme}) => theme.textSoft}
`

const SignInButton = styled.button`
  display:flex;
  align-items:center;
  width:70%;
  gap:10px;
  background-color:transparent;
  font-weight:bold;
  padding:5px;
  cursor:pointer;
  color:#3ea6ff;
  border-radius:3px;
  border:1px solid #3ea6ff;
`
const Hr = styled.hr`
  width:100%;
  border: 0.5px solid ${({theme}) => theme.soft}
  
  
`
const Title = styled.h2`
  color:${({theme}) => theme.textSoft}
`

const Menu = ({darkMode,setDarkMode}) => {
  return (
    <Container>
       <Link to="/" style={{textDecoration:"none", color:"inherit"}}>
      <LogoContainer>
          <OndemandVideoOutlinedIcon />
          <h1 style={{fontSize:20, fontWeight:"bold"}}>Video Gram</h1>
      </LogoContainer>
      </Link>
      <Link to="/" style={{textDecoration:"none", color:"inherit", width:"100%"}}>
      <MenuItem>
        <HomeIcon />
        Home
      </MenuItem>
      </Link>
      <MenuItem>
        <ExploreIcon />
        Explore
      </MenuItem>
      <MenuItem>
        <SubscriptionsIcon />
        Subscription
      </MenuItem>
      <Hr />
      <MenuItem>
        <LibraryAddIcon />
        Library
      </MenuItem>
      <MenuItem>
        <HistoryIcon />
        History
      </MenuItem>
      <Hr />
      <SignIn>
        Sign In to Like, Comment and Subscribe
        <Link to="/signin" style={{textDecoration:"none", color:"inherit",width:"70%"}}>
          <SignInButton><LoginIcon/> Sign In</SignInButton>
        </Link>
      </SignIn>
      <Hr />
      <Title>Categories</Title>
      <MenuItem>
        <LibraryMusicIcon />
        Music
      </MenuItem>
      <MenuItem>
        <SportsBaseballIcon />
        Sports
      </MenuItem>
      <MenuItem>
        <VideogameAssetIcon />
        Gaming
      </MenuItem>
      <MenuItem>
        <LocalMoviesIcon/>
        Movies
      </MenuItem>
      <MenuItem>
        <NewspaperIcon />
        News
      </MenuItem>
      <MenuItem>
        <LiveTvIcon />
        Live
      </MenuItem>
      <Hr />
      <MenuItem>
        <SettingsApplicationsIcon />
        Settings
      </MenuItem>
      <MenuItem onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <><LightModeIcon /> Light Mode </>: <><DarkModeOutlinedIcon /> Dark Mode</>}
      </MenuItem>
      <MenuItem>
        <BugReportIcon />
        Report
      </MenuItem>
      <MenuItem>
        <HelpIcon />
        Help
      </MenuItem>

    </Container>
  )
}

export default Menu