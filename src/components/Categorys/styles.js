import styled from "styled-components";

import { Link } from "react-router-dom";




export const Container = styled.div`
background: blue;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
gap: 35px;
margin-left: 337px;
display: -webkit-box;
@media (max-width: 1250px) {
    display: flex;
    flex-direction: inherit;
    align-items: center;
    justify-content: center;
    margin-left: 100px;
}
@media (max-width: 972px) {
    display: flex;
    flex-direction: inherit;
    align-items: center;
    justify-content: center;
    margin-left: 100px;
    margin: 0;
}
`
export const ContainerItems = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const Image = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 10px;
    padding: 10px;
 
`

export const Button = styled(Link)`
/* margin-top: 16px; */
background: none;
cursor: pointer;
border-radius: 8px;
height: 25px;
border: none;
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 100%;
text-align: center;
color: #FFFFFF;
&:hover{
    opacity: 0.8; 
    
    
}
 &:active{
    opacity: 0.6;
} 
text-decoration: none;
display: flex;
align-items: center;
justify-content: center;
`