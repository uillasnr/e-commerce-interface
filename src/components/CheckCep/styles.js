import styled from "styled-components";

export const Container = styled.div`
    background: rgb(119 122 143 / 53%);
    filter: drop-shadow(5px 5px 5px rgba(0,0,0,1.9));
    padding: 10px;
    border-radius: 20px;
    margin: 90px 80px 0px 107px;
    width: max-content;
    

    h1{
      color: #44d62c;
    margin-left: 10px;
    }

    h3{
    color: #fff;
    margin-left: 10px;
    font-size: 15px;
    padding-bottom: 5px;
    border-bottom: 1px solid #b5b5b5;
    }
  
div{
  margin-bottom: 10px;
  
}
@media (max-width: 1180px){
  margin: 90px 80px 0px 70px;
}
@media (max-width: 1140px){
  margin: 90px 80px 0px 57px;
}
@media (max-width: 1100px){
  margin: 90px 80px 0px 45px;
}
@media (max-width: 1045px){
  margin: 90px 80px 0px 23px;
    width: 67%;
}
@media (max-width: 880px){
  margin: 90px 80px 0px 27px;
  width: 64%;
}
@media (max-width: 826px){
  margin: 90px 80px 0px 52px;
    width: 86%;
}
@media (max-width: 790px){
  margin: 90px 80px 0px 35px;
    width: 89%;
}
@media (max-width: 772px){
  margin: 90px 80px 0px 27px;
    width: 91%;
}
@media (max-width: 680px){
  margin: 90px 80px 0px 50px;
    width: 87%;
    height: 345px;
}
@media (max-width: 660px){
  margin: 90px 80px 0px 34px;
    width: 90%;
   
}
@media (max-width: 605px){
  margin: 90px 80px 0px 46px;
    width: 84%;
    
}
@media (max-width: 560px){
  margin: 90px 80px 0px 30px;
    width: 89%;
}
@media (max-width: 525px){
  div{
  width: 400px;
}
}
@media (max-width: 470px){
  margin: 90px 80px 0px 23px;
  h1{
      color: #44d62c;
    margin-left: 10px;
    }

    h3{
    color: #fff;
    margin-left: 10px;
    font-size: 11px;
    }
}
@media (max-width: 455px){
  div{
width: 330px;
}
}
@media (max-width: 400px){
  margin: 90px 80px 0px 23px;
  height: auto;
  h1{
      color: #44d62c;
    margin-left: 10px;
    }

    h3{
    color: #fff;
    margin-left: 10px;
    font-size: 11px;
    }
}
`
export const Error = styled.p`
position: absolute;
    top: 36%;
    left: 360px;
    font-size: 10px;
    color: red;
    text-align: center;
    width: 90px;
    padding: 5px;
    background-color: #fff;
    border: 1px solid red;
    border-radius: 10px;
    transform: translateY(-50%);
  /* display: ${({ show }) => (show ? 'block' : 'none')}; */

  &:after {
    content: '';
    position: absolute;
    top: 70%;
    right: 35px;
    margin-top: 12px;
    border-width: 8px;
    border-style: solid;
    border-color: #2d242400 #f10404 transparent transparent;
    transform: rotate(270deg);
  }

  @media (max-width: 400px){
    top: 23%;
    left: 239px;
  }
  @media (max-width: 940px){
    top: 25%;
    left: 424px;
  }
  @media (max-width: 920px){
    top: 25%;
    left: 397px;
  }
  @media (max-width: 870px){
    top: 23%;
    left: 377px;
  }
  @media (max-width: 870px){
    top: 24%;
    left: 392px;
  }
  @media (max-width: 825px){
    top: 38%;
    left: 392px;
  }
  @media (max-width: 750px){
    top: 38%;
    left: 343px;
  }
  @media (max-width: 680px){
    top: 27%;
    left: 405px;
  }
  @media (max-width: 590px){
    top: 27%;
    left: 320px;
  }
  @media (max-width: 510px){
    top: 26%;
    left: 246px;
  }

`
export const Input = styled.input`
  height: 30px;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px 10px;
    margin: 0px 5px 0px 0px;
    width: 170px;
    text-align: center;
`
export const ConatinerCep = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    width: 660px;
    margin: 10px;
    
  .formCep{
  
}
    .room-icon {
  color: #44d62c;
  position: absolute;
  left: 20px;
  top: 96px;
  transform: translateY(-50%);
  z-index: 10;
  }

form{
  width: 460px;
}
 .inputCep {
    height: 30px;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px 10px;
    margin: 0px 5px 0px 0px;
    width: 170px;
    text-align: center;
    margin-left: 30px;
    font-weight: 600;
  }
  .inputRua {
    height: 30px;
    background: #fff; 
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px 10px;
    margin: 0px 5px 0px 0px;
    width: 340px;
    text-align: center;
    margin-bottom: 10px;
    font-weight: 600;
  }

  .Number{
    width: 80px;
    height: 30px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px 10px;
    margin: 0px 5px 0px 0px;
    text-align: center;
    font-weight: 600;
  }


  .neighborhood{
    width: 185px;
    height: 30px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px 10px;
    margin: 0px 5px 0px 0px;
    text-align: center;
    font-weight: 600;
  }
  .city{
    height: 30px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px 10px;
    margin: 0px 5px 0px 0px;
    text-align: center;
    font-weight: 600;
  }
  .uf {
    width: 50px;
    height: 30px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px 10px;
    margin: 0px 5px 0px 0px;
    text-align: center;
    font-weight: 600;
  }
  h6 {
    margin: 5px;
    font-size: 11px;
    color: #36e73d;
    margin-top: 13px;
  }

  button {
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 8px 16px;
    cursor: pointer;
    flex: 1;
    margin-top: 10px;
  }

  @media (max-width: 1045px){
  width: 590px;
  }
  @media (max-width: 980px){
    width: 565px;
   form{
 width: 431px;
}
  }
  @media (max-width: 940px){
    width: 560px;
   form{
    width: 431px;
    margin-left: 63px;
}
.room-icon {
  color: #44d62c;
  position: absolute;
  left: 85px;
  top: 98px;
}
  }
@media (max-width: 920px){
  width: 560px;
  .inputRua {
    width: 305px;
  }
  .neighborhood{
    width: 170px;
  }
  .city{
    width: 160px;
  }
   form{
    width: 431px;
    margin-left: 70px;
}
.room-icon {
  color: #44d62c;
  position: absolute;
  left:90px;
    top: 98px;
}
}
@media (max-width: 880px){
    width: 560px;
   form{
    width: 431px;
    margin-left: 66px;
}
.room-icon {
  color: #44d62c;
  position: absolute;
  left:88px;
    top: 98px;
}

}
  
  @media (max-width: 750px){
    width: 560px;
   form{
    width: 431px;
    margin-left: 15px;
}
.room-icon {
  color: #44d62c;
  position: absolute;
  left: 35px;
    top: 98px;
}

}
/////////////////////////////////////
@media (max-width: 680px){
  width: 560px;
   form{
    width: 431px;
    margin-left: 76px;
}
.room-icon {
  color: #44d62c;
  position: absolute;
  left: 97px;
    top: 98px;
}
  
}
@media (max-width: 645px){
  width: 460px;
   form{
    width: 431px;
    margin-left: 57px;
}
.room-icon {
  color: #44d62c;
  position: absolute;
  left: 77px;
    top: 98px;
}
  
}
@media (max-width: 590px){
  width: 460px;
   form{
    width: 431px;
    margin-left: 26px;
}
.room-icon {
  color: #44d62c;
  position: absolute;
  left: 45px;
    top: 98px;
}
  
}
@media (max-width: 525px){
.formCep {
   
    width: 366px;
}
}
@media (max-width: 560px){
  div{
    width: 370px;
  }
  .inputRua {
    width: 275px
  }
  .neighborhood{
    width: 150px;
  }
  .city{
    width: 150px;
  }
}
@media (max-width: 510px){
  width: 460px;
   form{
    width: 326px;
    margin-left: 38px;
};
  
  .room-icon {
  color: #44d62c;
  position: absolute;
  left: 60px;
  top: 96px;
  } 
  .inputRua {
    width: 220px
  }
  .neighborhood{
  width: 125px;
  }
  .city{
    width: 120px;
  }
}
@media (max-width: 473px){
  width: 345px;
  margin-left: 0px;
  div{
    width: 300px;
  }
  .room-icon {
  color: #44d62c;
  position: absolute;
  left: 70px;
  top: 92px;
  } 
  .inputCep {
    margin-left: 58px;
  }
  .inputRua {
    width: 195px;
  }
  .neighborhood{
    width: 130px;
  }
  .city{
    width: 90px;
  }
   h6 {
    margin: 5px;
    font-size: 10px;
    color: #36e73d;
    margin-top: 10px;
    margin-left: -3px;
}
}
@media (max-width: 460px){
  width: 345px;
  margin-left: 0px;
  
  .room-icon {
  color: #44d62c;
  position: absolute;
  left: 70px;
  top: 92px;
  } 
  .inputCep {
    margin-left: 58px;
  }
  .inputRua {
    width: 195px;
  }
  .neighborhood{
    width: 130px;
  }
  .city{
    width: 90px;
  }
   h6 {
    margin: 5px;
    font-size: 10px;
    color: #36e73d;
    margin-top: 10px;
    margin-left: -3px;
}
}
@media (max-width: 455px){
  .formCep {
    width: 294px;
}
}
@media (max-width: 400px){
  width: 345px;
  margin-left: -15px;
  
  .room-icon {
  color: #44d62c;
  position: absolute;
  left: 43px;
    top: 94px;
  } 
  .inputCep {
    margin-left: 38px;
  }
  .inputRua {
    width: 195px;
  }
  .neighborhood{
    width: 130px;
  }
  .city{
    width: 90px;
  }
   h6 {
    margin: 5px;
    font-size: 10px;
    color: #36e73d;
    margin-top: 10px;
    margin-left: -3px;
}
}
  `
  export const ConatinerFrete = styled.div`
  
  .Result{
    width: 183px;
    text-align: center;
  }

  img{
    width: 50px;
  }

  h5 {
     color: #fff;
    font-size: 12px;
  }
  span{
    font-size: 12px;
    color: #36e73d;
   
  }

  h3 {
    margin: 5px;
    font-size: 15px;
    color: #36e73d;
    font-weight: bold;
  }
  @media (max-width: 1045px){
    margin-left: -135px;
    .Result {
      width: 123px;
    }
  }
  @media (max-width: 980px){
    margin-left: -115px;
  .Result {
    width: 113px;
    text-align: center;
}
  }
  @media (max-width: 940px){
    .Result {
      width: 130px;
    text-align: center;
    margin-left: 304px;
}
}
@media (max-width: 920px){
  margin-left: -136px;
  .Result {
    width: 113px;
    text-align: center;
    margin-left: 323px;
}
}
@media (max-width: 800px){
.kcwmvs .Result {
    width: 123px;
    text-align: center;
    margin: -63px;
}
}
@media (max-width: 826px){
    .Result {
      width: 160px;
    text-align: center;
    /* margin-left: -127px; */
    margin: -63px;
}
}
  @media (max-width: 750px){
    margin-left: -85px;
  .Result {
    width: 113px;
    text-align: center;
    margin-left: -120px;
}
  }
  @media (max-width: 680px){
    .Result {
      width: 130px;
    text-align: center;
    margin-left: 288px;
    margin-top: -5px;;
}
}
@media (max-width: 645px){
  .Result {
    width: 130px;
    text-align: center;
    margin-left: 253px;
}
}
@media (max-width: 510px){
  .Result {
    width: 130px;
    text-align: center;
    margin-left: 210px;
}
}
@media (max-width: 560px){
  .Result {
    width: 130px;
    text-align: center;
    margin-left: 200px;
}
}
@media (max-width: 500px){
  .Result {
    width: 130px;
    text-align: center;
    margin-left: 200px;
}
}
@media (max-width: 460px){
  .Result {
margin-left: 192px;
  }
}
@media (max-width: 400px){
  .Result {
    margin-left: 195px;
  }
}
`