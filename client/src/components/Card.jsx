import styled from "styled-components";
import {Link} from "react-router-dom";
 
const Container = styled.div`
    width:360px;
    margin-bottom:${(props) => props.type === "small" ? "10px" : "50px"};
    cursor:pointer;
    display:${(props) => props.type != "small" ? "column" : "flex"};
    gap:0.5rem;
    
    box-sizing:border-box;

    @media only screen and (max-width:1400px){
      display:block;
      width:300px;
      margin-bottom:50px;
      cursor:pointer;
    }

    @media only screen and (max-width:720px){
      display:block;
      width:300px;
      margin-bottom:50px;
      cursor:pointer;
    }
    
`
const CardImage = styled.img`
    width:100%;
    height:${(props) => props.type === "small" ? "150px" : "250px"};
    background-color:#999;
    @media only screen and (max-width:720px){
      height:250px;
      
    }
`
const VideoDetails = styled.div`
    display:flex;
    width:100%;
    margin-top:${(props) => props.type === "small" ? "" : "1rem"};
    gap:1rem;
    color:${({theme}) => theme.text};
    @media only screen and (max-width:720px){
      gap:1rem;
      
    }
`
const ChannelIcon = styled.img`
    border-radius:50%;
    width:40px;
    height:40px;
    background-color:#999;
    display:${(props) =>props.type === "small" && "none"};
`
const VideoTitle = styled.div`
    font-size:${(props) => props.type === "small" && "16px"}; 
    font-weight:bold;
    color:inherit;
    @media only screen and (max-width:720px){
      font-size:${(props) => props.type === "small" && "16px"}; 
      font-weight:none;
    }
`;


const ChannelName = styled.span`
    font-weight:bold;
    color:${({theme}) => theme.textSoft};
    font-size:${(props) => props.type === "small" && "14px"}; 
    
    @media only screen and (max-width:720px){
      font-size:${(props) => props.type === "small" && "12px"}; 
      font-weight:none;
    }
`
const VidoeInformation = styled.div`
    display:flex;
    flex-direction:column;
    gap:1rem;
    
    
`
const Info = styled.div`
  
  color:${({theme}) => theme.textSoft};
  font-size:${(props) => props.type === "small" && "10px"}; 

  @media only screen and (max-width:720px){
    font-size:${(props) => props.type === "small" && "8px"}; 
    font-weight:none;
}
`


function Card({type}) {
  return (
    <Link to="/video/test" style={{textDecoration:"none"}}>
    <Container type={type}>
        <CardImage type={type} src="https://images.unsplash.com/photo-1678717122482-770e12b40202?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"/>
        <VideoDetails type={type}>
          <ChannelIcon type={type}/>
          <VidoeInformation type={type}>
              <VideoTitle type={type}>Video Detail</VideoTitle>   
              <ChannelName type={type}>Harsh Vardhan</ChannelName>
              <Info type={type}>660,500 views . 1 day ago</Info>
          </VidoeInformation>
          </VideoDetails>
    </Container>
    </Link>
  )
}

export default Card