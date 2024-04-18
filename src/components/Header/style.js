import Styled from "styled-components";

export const Button = Styled.button`
   color:white;
   background-color:black;
` ;


/*[8:58 AM] Bhuvaneswari (Unverified)
import styled from 'styled-components';
 
export const NextButton = styled.button`
    color:#fff;
    background-color : red;
`;
export const Desc = styled.p`
    color: red;
`
[9:02 AM] 
VISHNU AADITHYAN M (Unverified) no longer has access to the chat.

[9:07 AM] Bhuvaneswari (Unverified)
import styled from 'styled-components';
 
export const NextButton = styled.button`
    color:#000;
    background-color : white;
    ${({active}) => active && `color :  red ; background-color : blue`}
    &:hover{
        color:red;
    }
`;
[9:07 AM] Bhuvaneswari (Unverified)
import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {NextButton} from './style';
import Card from '../Card/Card';
const Header = () =>{
    const [show , setShow] = useState(false);
   
    const clickHandler = (data) =>{
        data.map((item) =>{
            console.log(item.value)
        })
    }
    const Para = styled.p`
        color : red;    
    `;
    return(
        <>
        <Link to = "/Home">Home</Link>
        <Link to = "/">Contact us</Link>
        <Link to = "/About">About us</Link>
        <NextButton active = {show} type = "button">Next</NextButton>
        {show && <Para>Heading</Para>}
        <Card data = "test" clickHandler = {clickHandler} setShow = {setShow} />
        </>
    )
}
 
export default Header; */