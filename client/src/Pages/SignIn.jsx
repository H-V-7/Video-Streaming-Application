import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    display:flex;
    height:100vh;
    align-items:center;
    justify-content:center;
    
`

const Heading = styled.h1`
    position:absolute;
    font-size:16px;
    top:10%;
    left:10%;
`

const Form  = styled.form`
    display:flex;
    position:relative;
    border-radius:1rem;
    flex-direction:column;
    gap:1rem;
    justify-content:center;
    align-items:center;
    height:50%;
    width:50%;
    background-color:${({theme}) => theme.bg};

    @media only screen and (max-width:720px){
        width:70%;
    }
    
`

const Feildset = styled.fieldset`
    display:flex;
    align-items:center;
    gap:1.5rem;
    
    justify-content:space-between;
    border:none;
`

const Input = styled.input`
    width:60%;
    border-radius:0.5rem;
    border:none;
    padding:0.5rem;
`

const Button = styled.button`
    width:50%;
    margin-top:1rem;
    cursor:pointer;
    color:${({theme}) => theme.text};
    border-radius:1rem;
    padding:1rem;
    background-color:${({theme}) => theme.bgLighter};
    border:none;
`;

const Label = styled.label`
    font-weight:bold;
   
    
`
const Paragraph = styled.p`

`

const page = {
    login:{
        view:"login",
        Heading:"Login"
    },
    signUp:{
        view:"signup",
        Heading:"Sign Up"
    }
}




function SignIn() {
    const [pageState, setPageState] = useState(page.login);

    const toogleSignUp = () => {
        setPageState(page.signUp);
    }

    const tooglelogin = () => {
        setPageState(page.login);
    }

    return(
        <Container>
            
            <Form>
                {pageState.view === "login" ?
                    <>
                        <Heading>{pageState.Heading}</Heading>
                        <Feildset>
                        <Label htmlFor="username">UserName</Label>
                        <Input id="username" name="username"/>
                        </Feildset>
                        <Feildset>
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" name="password" />
                        </Feildset>
                        <Button>Login</Button>
                        <Paragraph>Don't have an account ?  </Paragraph>
                        <Paragraph style={{textDecoration:"underline",cursor:"pointer"}} onClick={toogleSignUp}>Sign Up</Paragraph>
                    </>
                    : 
                    <>
                        <Heading>{pageState.Heading}</Heading>
                        <Feildset>
                        <Label htmlFor="username">UserName</Label>
                        <Input id="username" name="username"/>
                        </Feildset>
                        <Feildset>
                            <Label htmlFor ="email">Email ID</Label>
                            <Input type="email" id="email" name="email" />
                        </Feildset>
                        <Feildset>
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" name="password" />
                        </Feildset>
                        <Button>Sign Up</Button>
                        <Paragraph>Already have an account ?  </Paragraph>
                        <Paragraph style={{textDecoration:"underline",cursor:"pointer"}} onClick={tooglelogin}  >Log In</Paragraph>
                    </>
                }
                
            </Form>
        </Container>
    )
}


export default SignIn;