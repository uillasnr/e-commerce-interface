import styled from "styled-components";

export const Container = styled.div`
 display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;

  label{
    margin: 5px;
    font-size: 13px;
    margin-left: 190px;
    margin-top: 10px;
  }

  form{
    margin-left: 160px;
  }
  .input-wrapper {
    position: relative;
    display: inline-block;
    padding: 0;
    border: none;
    margin-left: 0px;
   
}

.room-icon {
  color: #44d62c;
  position: absolute;
  left: 10px;
  top: 17px;
  transform: translateY(-50%);
  z-index: 10;
}

input {
  height: 35px;
  border-radius: 5px;
  text-align: center;
  padding-left: 10px; 
  width: 100%;
}
  button {
    margin-left: -25px;
    position: absolute;
    height: 32px;
    width: 39px;
    cursor: pointer;
    border: none;
    margin-top: 2px;
    border-radius: 5px;
  }

  .Result{
    border: 0.5px solid #d5d5d5;
    width: 183px;
    margin-top: 10px;
    padding: 10px;
    text-align: center;
    margin-left: 180px;
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
    .Result {
    border: 0.5px solid #d5d5d5;
    width: 183px;
    margin-top: 10px;
    padding: 10px;
    text-align: center;
    margin-left: 394px;
  }
    form{
    margin-left: 380px;
  }
}
  @media (max-width: 1040px){
    .Result {
    border: 0.5px solid #d5d5d5;
    width: 183px;
    margin-top: 10px;
    padding: 10px;
    text-align: center;
    margin-left: 266px;
  }
    form{
    margin-left: 250px;
  }
  }
  @media (max-width: 1000px){
    .Result {
    border: 0.5px solid #d5d5d5;
    width: 183px;
    margin-top: 10px;
    padding: 10px;
    text-align: center;
    margin-left: 300px;
  }
    form{
    margin-left: 288px;
  }
  }
  @media (max-width: 910px){
    .Result {
    border: 0.5px solid #d5d5d5;
    width: 183px;
    margin-top: 10px;
    padding: 10px;
    text-align: center;
    margin-left: 248px;
  }
    form{
      margin-left: 234px;
  }
  }
  @media (max-width: 850px){
    .Result {
    border: 0.5px solid #d5d5d5;
    width: 183px;
    margin-top: 10px;
    padding: 10px;
    text-align: center;
    margin-left: 300px;
  }
    form{
      margin-left: 290px;
  }
  }
  @media (max-width: 800px){
    .Result {
    border: 0.5px solid #d5d5d5;
    width: 183px;
    margin-top: 10px;
    padding: 10px;
    text-align: center;
    margin-left: 247px;
  }
    form{
      margin-left: 235px;
  }
  }
  @media (max-width: 750px){
    .Result {
    border: 0.5px solid #d5d5d5;
    width: 183px;
    margin-top: 10px;
    padding: 10px;
    text-align: center;
    margin-left: 170px;
  }
    form{
      margin-left: 157px;
  }
  }
  @media (max-width: 630px){
    .Result {
    border: 0.5px solid #d5d5d5;
    width: 183px;
    margin-top: 10px;
    padding: 10px;
    text-align: center;
    margin-left: 73px;
  }
    form{
      margin-left: 60px;
  }
  }
  @media (max-width: 510px){
    .Result {
    border: 0.5px solid #d5d5d5;
    width: 183px;
    margin-top: 10px;
    padding: 10px;
    text-align: center;
    margin-left: 45px;
  }
    form{
      margin-left: 30px;
  }
  }
  @media (max-width: 400px){
    .Result {
    border: 0.5px solid #d5d5d5;
    width: 183px;
    margin-top: 10px;
    padding: 10px;
    text-align: center;
    margin-left: 60px;
  }
    form{
      margin-left: 47px;
  }

  }
`

export const ConatinerCep = styled.div`
display: none;
`