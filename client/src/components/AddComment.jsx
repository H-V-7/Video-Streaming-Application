import styled from "styled-components";
import AddCommentTwoToneIcon from '@mui/icons-material/AddCommentTwoTone';
const Container = styled.div`
    display:flex;
    align-items:center;
    gap:1rem;
`;

const ChannelIcon = styled.img`
    border-radius:50%;
    width:50px;
    height:50px;
    background-color:#999;
    
`;
const InputWrapper = styled.div`
    width:90%;
    display:flex;
    align-items:center;
    gap:1rem;
`;

const Input = styled.input`
    background-color:transparent;
    border:none;
    color:${({theme}) => theme.text};
    width:100%;
    outline:none;
    border-bottom:1px solid black;
`;

function AddComment() {
    return(
        <Container>
            <ChannelIcon />
            <InputWrapper>
                <Input placeholder="Add Comment"/>
                <AddCommentTwoToneIcon style={{cursor:"pointer"}}/>
            </InputWrapper>
        </Container>
    )
}

export default AddComment;