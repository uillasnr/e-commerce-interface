import styled from "styled-components";

export const Container = styled.div`
background: red;
 display: flex;
  flex-direction: column;
  align-items: center;

  form{
    margin-left: 160px;
  }
  .input-wrapper {
    position: relative;
    display: inline-block;
    padding: 0;
    border: none;
    margin-left: 0px;
    margin-top: 10px;
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
`

export const ConatinerCep = styled.div`
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
`