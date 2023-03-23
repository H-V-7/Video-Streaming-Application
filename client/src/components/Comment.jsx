import styled from "styled-components";

const Container = styled.div`
    margin:1rem;
    display:flex;
    width:100%;
    gap:1rem;
`

const ChannelIcon = styled.img`
    border-radius:50%;
    width:50px;
    height:50px;
    background-color:#999;
    
`;


const DayCounter = styled.span`
    color:${({theme}) => theme.textSoft}
`

const ChannelName = styled.span`
    font-weight:bold;
    
`

const CommentWrapper = styled.div`
    display:flex;
    flex-direction:column;
    gap:1rem;
    justify-content:center;
`
const UserComment = styled.span`
    font-size:14px;

    @media only screen and  (max-width:720px){
        font-size:10px;
      }
`


function Comment(){
    return(
       <Container>
            <ChannelIcon />
            <CommentWrapper>
                <ChannelName>Harsh Vardhan  <DayCounter> 2 days ago </DayCounter> </ChannelName>
                <UserComment>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est porro adipisci rem itaque veniam, perferendis aspernatur numquam quae mollitia explicabo dignissimos corporis nulla delectus tempore, deleniti, suscipit officia voluptatum impedit?</UserComment>
            </CommentWrapper>
       </Container>
    )
}

export default Comment;