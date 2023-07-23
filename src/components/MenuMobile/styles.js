

import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: none;


  @media (max-width: 650px) {
    cursor: pointer;
    display: flex;
    margin: 10px;
    height: 30px;
  }
`;

export const Image = styled.img`
  width: 30px;
`;

export const ContainerItems = styled.div`
     display: flex;
    align-items: center;
    margin: 10px;
    gap: 30px;


`;

export const Button = styled(Link)`

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

export const ContainerText = styled.div`
 border: 0.5px solid #d5d5d5;
display: flex;

img{
  margin: 10px 10px 10px 10px;
}
p{
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    color: #fff;
}
div.user-info {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  width: 100px;
  margin-top: 5px;
}
span{
  font-size: 0.8rem;
  font-weight: 300;
  color: #fff;
  line-height: 13px;
}
div.logout {
  font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    cursor: pointer;
    color: rgb(68 214 44);
    margin-top: 5px;
  }
`;


export const PageLink = styled.div`
 
`;


export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0; 
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: flex-end; 
  align-items: center;
  z-index: 100;

`;

export const ContainerModal = styled.div`
 
  background: #464646;
  display: flex;
  flex-direction: column;
  border: 0.5px solid #d5d5d5;
  max-width: 300px; 
  max-height: 90%;
  overflow-y: auto;
  width: 200px;
  height: 280px;
  margin-top: -228px;

  @media (max-width: 650px) {
    margin-top: -200px;
  }

  @media (max-width: 400px) {
    margin-top: -200px;
  }
`;