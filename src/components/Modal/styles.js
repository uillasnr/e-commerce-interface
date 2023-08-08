
import styled from 'styled-components';
import { Menu, MenuItem } from '@mui/material';

export const Container = styled.div`  
  
 
    margin: 0px 10px;

img{
  cursor: pointer;
  position: relative;
  margin-top: 10px;
}


  
`



export const StyledMenu = styled(Menu)`

  .MuiPaper-root {
    background-color: #464646;
    margin-left: -85px;
    margin-top: 10px;
    width: 123px;
    filter: drop-shadow(5px 5px 5px rgba(0,0,0,1.9));
    position: absolute;
    border: 0.5px solid #d5d5d5;
  }
  &:after {
    content: '';
    position: absolute;
    top: 39px;
    right: 268px;
    margin-top: 12px;
    border-width: 8px;
    border-style: solid;
    border-color: #2d242400 #d5d5d5 transparent transparent;
    transform: rotate(90deg);
  }

  .MuiButtonBase-root{
    color: #fff;
    font-size: 12px;
    margin: 5px 0px;
    display: flex;
    justify-content: center;
  }
  .MuiMenuItem-root:hover {
   
    color: #44d62c;
}

@media (max-width: 1245px){
  .MuiPaper-root {
    background-color: #464646;
    margin-left: -85px;
    margin-top: 10px;
    width: 123px;
    filter: drop-shadow(5px 5px 5px rgba(0,0,0,1.9));
    position: absolute;
    border: 0.5px solid #d5d5d5;
  }
  &:after {
    content: '';
    position: absolute;
    top: 39px;
    right: 264px;
    margin-top: 12px;
    border-width: 8px;
    border-style: solid;
    border-color: #2d242400 #d5d5d5 transparent transparent;
    transform: rotate(90deg);
  }
}
@media (max-width: 1200px){
  .MuiPaper-root {
    background-color: #464646;
    margin-left: -85px;
    margin-top: 10px;
    width: 123px;
  }
  &:after {
    top: 39px;
    right: 260px;
    margin-top: 12px;
  }
}
@media (max-width: 1160px){
  .MuiPaper-root {
    background-color: #464646;
    margin-left: -85px;
    margin-top: 10px;
    width: 123px;
  }
  &:after {
    top: 39px;
    right: 255px;
    margin-top: 12px;
  }
}
@media (max-width: 1100px){
  .MuiPaper-root {

  }
  &:after {
    top: 39px;
    right: 250px;
    margin-top: 12px;
  }
}
@media (max-width: 1090px){
  .MuiPaper-root {

  }
  &:after {
    top: 39px;
    right: 265px;
    margin-top: 12px;
  }
}
@media (max-width: 1024px){
  .MuiPaper-root {

  }
  &:after {
    top: 39px;
    right: 257px;
    margin-top: 12px;
  }
}
@media (max-width: 970px){
  .MuiPaper-root {

  }
  &:after {
    top: 39px;
    right: 251px;
    margin-top: 12px;
  }
}
@media (max-width: 870px){
  .MuiPaper-root {

  }
  &:after {
    top: 39px;
    right: 214px;
    margin-top: 12px;
  }
}
@media (max-width: 770px){
  .MuiPaper-root {

  }
  &:after {
    top: 39px;
    right: 174px;
    margin-top: 12px;
  }
}
@media (max-width: 700px){
  .MuiPaper-root {

  }
  &:after {
    top: 39px;
    right: 165px;
    margin-top: 12px;
  }
}
`;

export const StyledMenuItem = styled(MenuItem)`
/*    .MuiMenuItem-root:hover {
   
   color: rgb(243 0 0);
} */

`;


