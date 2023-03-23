import styled from "styled-components";

import ThumbUpTwoToneIcon from '@mui/icons-material/ThumbUpTwoTone';
import ThumbDownOffAltTwoToneIcon from '@mui/icons-material/ThumbDownOffAltTwoTone';
import ShareTwoToneIcon from '@mui/icons-material/ShareTwoTone';
import LibraryAddTwoToneIcon from '@mui/icons-material/LibraryAddTwoTone';
import AddComment from "../components/AddComment";
import Comment from "../components/Comment";
import Card from "../components/Card";

const Container = styled.section`
    display:grid;
    grid-template-columns:70% 30%;
    grid-template-areas: video sidebar;
    
    
    
    @media only screen and (max-width:1400px){
        display:flex;
        flex-direction:column;
        padding:1rem;
    }
`

const VideoWrapper = styled.div`
    display:flex;
    padding:1rem;
    flex-direction:column;
    gap:1rem;
`
const Content = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`

const VideoTitle = styled.h1`
    font-size:20px;
`
const VideoDetails = styled.div`
    
    display:flex;
    align-items:center;
    justify-content:space-between;
`
const VideoInfo = styled.span`
    font-weight:bold;
`

const Buttons = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    gap:0.5rem;    
`
const Button = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    gap:0.5rem;
    cursor:pointer;
`
const HR = styled.hr`
    margin:15px 0;
    border:0.5px solid ${({theme}) => theme.soft};
`
const Channel = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:2rem;
    
`
const ChannelDetails = styled.div`
    display:flex;
    gap:1rem;
`

const ChannelInfo = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    gap:0.5rem;
`

const ChannelIcon = styled.img`
    border-radius:50%;
    padding:0.5rem;
    width:50px;
    height:50px;
    background-color:#999;
`
const ChannelName = styled.span`
    font-weight:bold;
    font-size:18px;
`
const SubscriberCount = styled.div`
    color: ${({theme}) => theme.textSoft}
`
const VideoDescription = styled.p`
    padding:1rem;
    background-color:${({theme}) => theme.bg}
`
const SubscribeButton = styled.button`
    padding:0.5rem;
    font-weight:bold;
    color:white;
    background-color:#cc1a00;
    border:none;
    border-radius:0.5rem;
    cursor:pointer;
`

const SideBar = styled.div`
    display:flex;
    flex-direction:column;
    
    gap:1rem;
    align-items:center;
`
const SidebarTitle = styled.h1`
    font-size:20px;
    margin-bottom:1rem;
    @media only screen and (max-width:720px){
        font-size:20px;
    }
`






function Video(){
    return(
        <Container>
            <VideoWrapper classNmae="video">
                <Content>
                    <iframe width="200" height="200" src="https://www.youtube.com/embed/-nXj0p3kyzE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </Content>
                <VideoTitle>Video Title</VideoTitle>
                <VideoDetails>
                    <VideoInfo>7,984,145 views | Mar 21, 2023</VideoInfo>
                    <Buttons>
                        <Button><ThumbUpTwoToneIcon /> 123</Button>
                        <Button><ThumbDownOffAltTwoToneIcon /> 321</Button>
                        <Button><ShareTwoToneIcon /> Share</Button>
                        <Button><LibraryAddTwoToneIcon /> Save </Button>
                    </Buttons>
                </VideoDetails>
                <HR />
                <Channel>
                    <ChannelDetails>
                        <ChannelIcon />
                        <ChannelInfo>
                            <ChannelName>Harsh Vardhan</ChannelName>
                            <SubscriberCount>77K subscribers</SubscriberCount>
                            
                        </ChannelInfo>
                    </ChannelDetails>
                    <SubscribeButton>Subscribe</SubscribeButton>
                
                </Channel>
            
                <VideoDescription>
                               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis eaque laborum esse consequatur, illum neque natus reiciendis cumque quae fugiat atque eius impedit alias vero culpa iusto tempora tempore incidunt?
                               Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum tenetur non reiciendis vero facere delectus optio aspernatur accusamus harum fugit. Omnis nemo maxime magni fuga nesciunt at laudantium animi! Perferendis.                            
                </VideoDescription>
                <HR />
                <AddComment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
            </VideoWrapper>
            <SideBar className="sidebar">
                <SidebarTitle>Recommendations</SidebarTitle>
                <Card type="small" />
                <Card type="small" />
                <Card type="small" />
                <Card type="small" />
                <Card type="small" />
                <Card type="small" />
                <Card type="small" />
                <Card type="small" />
                <Card type="small" />
                <Card type="small" />
                <Card type="small" />
                <Card type="small" />
                <Card type="small" />
                <Card type="small" />
                <Card type="small" />
            </SideBar>
        </Container>
    )
}

export default Video;