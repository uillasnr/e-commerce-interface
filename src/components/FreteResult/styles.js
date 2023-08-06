import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px;
    width: 1000px;

  label{
    margin: 5px;
    font-size: 13px;
    margin-left: 260px;
    margin-top: 10px;
  }

  form{
    margin-left: 228px;
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
    margin-left: 242px;
  }

  h4 {
    margin: 0px;
    font-size: 12px;
    width: 80px;
    font-weight: 400;
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

  @media (max-width: 1140px){
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px;
    width: 430px;
    margin-left: 295px;

    label{
    margin: 5px;
    font-size: 13px;
    margin-left: 115px;
    margin-top: 10px;
  }
    .Result {
    border: 0.5px solid #d5d5d5;
    width: 183px;
    margin-top: 10px;
    padding: 10px;
    text-align: center;
    margin-left: 96px;
  }
    form{
      margin-left: 82px;
  }
}
@media (max-width: 1030px){
  display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px;
    width: 430px;
    margin-left: 272px;
}
@media (max-width: 950px){
  display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px;
    width: 430px;
    margin-left: 231px;

    span{
    font-size: 12px;
    color: #36e73d;
    margin-left: -90px;
  }
}
@media (max-width: 900px){
  display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px;
    width: 430px;
    margin-left: 197px;
    
    span{
    font-size: 12px;
    color: #36e73d;
    margin-left: -90px;
  }
}
@media (max-width: 845px){
  display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px;
    width: 430px;
    margin-left: 160px;
    
    span{
    font-size: 12px;
    color: #36e73d;
    margin-left: -90px;
  }
}
@media (max-width: 780px){
  display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px;
    width: 430px;
    margin-left: -6px;

span{
    font-size: 12px;
    color: #36e73d;
    margin-left: -90px;
  }
}
@media (max-width: 740px){
  display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px;
    width: 430px;
    margin-left: -33px;

span{
    font-size: 12px;
    color: #36e73d;
    margin-left: -90px;
  }
}
@media (max-width: 690px){
  display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px;
    width: 430px;
    margin-left: -59px;

span{
    font-size: 12px;
    color: #36e73d;
    margin-left: -90px;
  }
}
@media (max-width: 630px){
 span {
    font-size: 12px;
}
}
@media (max-width: 590px){
  display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px;
    width: 430px;
    margin-left: -89px;

span{
    font-size: 12px;
    color: #36e73d;
    margin-left: -90px;
  }
}
@media (max-width: 520px){
  display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px;
    width: 430px;
    margin-left: -130px;

span{
    font-size: 12px;
    color: #36e73d;
    margin-left: -90px;
  }
}
@media (max-width: 440px){
  display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px;
    width: 430px;
    margin-left: -156px;

span{
    font-size: 12px;
    color: #36e73d;
    margin-left: -90px;
  }
}
@media (max-width: 400px){
  display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px;
    width: 430px;
    margin-left: -172px;

span{
    font-size: 12px;
    color: #36e73d;
    margin-left: -90px;
  }
}
`

export const ConatinerCep = styled.div`
display: none;
`