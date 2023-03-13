import styled from "styled-components";
import {Link} from "react-router-dom";
 
const Container = styled.div`
    width:360px;
    margin-bottom:50px;
    cursor:pointer;
    

`
const CardImage = styled.img`
    width:100%;
    height:250px;
    background-color:#999;
`
const VideoDetails = styled.div`
    display:flex;
    align-items:center;
    gap:10px;
    color:${({theme}) => theme.text}

`
const ChannelIcon = styled.img`
    border-radius:50%;
    width:40px;
    height:40px;
    background-color:#999;
`
const ChannelName = styled.span`
    font-weigth:bold;
    color:${({theme}) => theme.textSoft}
`
const VidoeInformation = styled.div`
    display:flex;
    flex-direction:column;
    gap:10px;
    margin-left:50px;
`
const Info = styled.div`
    color:${({theme}) => theme.textSoft}
`


function Card() {
  return (
    <Link to="/video/test" style={{textDecoration:"none"}}>
    <Container>
        <CardImage src="https://images.unsplash.com/photo-1678717122482-770e12b40202?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"/>
        <VideoDetails>
          <ChannelIcon />  <span>Video Detail</span>
        </VideoDetails>
          <VidoeInformation>
            <ChannelName>Harsh Vardhan</ChannelName>
            <Info>660,500 views . 1 day ago</Info>
            </VidoeInformation>
    </Container>
    </Link>
  )
}

export default Card