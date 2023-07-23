import styled from "styled-components";

export const Container = styled.div`
 display: flex;
  flex-direction: column;
  align-items: center;

  form{
    margin-left: 210px;
  }

  .RoomIcon{
    color: #36e73d;
    background: #36e73d;
  }
  input {
    margin-top: 10px;
    height: 35px;
    border-radius: 5px;
    text-align: center;
    width: 183px;
  }
  

  button {
    height: 35px;
    width: 40px;
    cursor: pointer;
  }

  div {
    border: 0.5px solid #d5d5d5;
    width: 183px;
    margin-top: 10px;
    padding: 10px;
    text-align: center;
    margin-left: 174px;
  }

  p {
    margin: 0px;
    font-size: 12px;
    width: 80px;
  }
  span{
    font-size: 12px;
    color: #36e73d;
    margin-left: -90px;
  }

  h6 {
    margin: 5px;
    width: 50px;
    font-size: 12px;
    color: #36e73d;
    margin-left: 110px;
    margin-top: -25px;
  }
  @media (max-width: 1090px){
    div {
    border: 0.5px solid #d5d5d5;
    width: 183px;
    margin-top: 10px;
    padding: 10px;
    text-align: center;
    margin-left: 384px;
  }
    form{
    margin-left: 423px;
  }
}
  @media (max-width: 1040px){
    div {
    border: 0.5px solid #d5d5d5;
    width: 183px;
    margin-top: 10px;
    padding: 10px;
    text-align: center;
    margin-left: 266px;
  }
    form{
    margin-left: 305px;
  }
  }
  @media (max-width: 1000px){
    form{
    margin-left: 335px;
  }
  }
  @media (max-width: 910px){
    div {
    border: 0.5px solid #d5d5d5;
    width: 183px;
    margin-top: 10px;
    padding: 10px;
    text-align: center;
    margin-left: 248px;
  }
    form{
      margin-left: 285px;
  }
  }
  @media (max-width: 850px){
    form{
      margin-left: 340px;
  }
  }
  @media (max-width: 800px){
    form{
      margin-left: 285px;
  }
  }
  @media (max-width: 750px){
    div {
    border: 0.5px solid #d5d5d5;
    width: 183px;
    margin-top: 10px;
    padding: 10px;
    text-align: center;
    margin-left: 170px;
  }
    form{
      margin-left: 210px;
  }
  }
  @media (max-width: 630px){
    form{
      margin-left: 92px;
  }
  }
  @media (max-width: 510px){
    form{
      margin-left: 45px;
  }
  }
  @media (max-width: 400px){
    form{
      margin-left: 58px;
  }
  div {
    border: 0.5px solid #d5d5d5;
    width: 183px;
    margin-top: 10px;
    padding: 10px;
    text-align: center;
    margin-left: 60px;
  }
  }
`

export const ConatinerCep = styled.div`
display: none;
`