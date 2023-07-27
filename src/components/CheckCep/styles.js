import styled from "styled-components";

export const Container = styled.div`
    background: rgb(119 122 143 / 53%);
    filter: drop-shadow(5px 5px 5px rgba(0,0,0,1.9));
    padding: 10px;
    border-radius: 20px;
    margin: 90px 80px 0px 68px;
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
  margin: 90px 80px 0px 54px;
}
@media (max-width: 1140px){
  margin: 90px 80px 0px 40px;
}
@media (max-width: 1100px){
  margin: 90px 80px 0px 26px;
}
@media (max-width: 1045px){
  margin: 90px 80px 0px 26px;
  width: 63%;
}
@media (max-width: 826px){
  margin: 90px 80px 0px 78px;
    width: 81%;
}
@media (max-width: 772px){
  margin: 90px 80px 0px 50px;
    width: 87%;
}
@media (max-width: 560px){
  margin: 90px 80px 0px 30px;
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
@media (max-width: 400px){
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
    left: 407px;
  }
  @media (max-width: 870px){
    top: 23%;
    left: 377px;
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
    margin-left: 50px;
}
.room-icon {
  color: #44d62c;
  position: absolute;
  left: 73px;
    top: 98px;
}

}
@media (max-width: 870px){
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
  
  @media (max-width: 745px){
   
    form{
  width: 431px;
}
   


}
@media (max-width: 680px){
  width: 456px;
  
}
@media (max-width: 560px){
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
@media (max-width: 470px){
  width: 345px;
  margin-left: 0px;
  
  .room-icon {
  color: #44d62c;
  position: absolute;
  left: 20px;
  top: 96px;
  } 
  .inputRua {
    width: 240px;
  }
  .neighborhood{
    width: 145px
  }
  .city{
    width: 120px;
  }
}
@media (max-width: 460px){
  width: 345px;
  
  .inputRua {
    width: 240px;
  }
  .neighborhood{
    width: 145px
  }
  .city{
    width: 120px;
  }
}
@media (max-width: 400px){
   form {
    width: 312px;
}
  width: 335px;
  .room-icon {
  color: #44d62c;
  position: absolute;
  left: 20px;
  top: 93px;
  transform: translateY(-50%);
  z-index: 10;
  }
  .inputRua {
    width: 222px;
  }
  .neighborhood{
    width: 145px
  }
  .city{
    width: 100px;;
  }
   h6 {
    margin-left: 10px;
    font-size: 10px;
    width: 290px;
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
    .Result {
      width: 123px;
    }
  }
  @media (max-width: 980px){

  .Result {
    width: 130px;
    text-align: center;
}
  }
  @media (max-width: 940px){
    .Result {
    width: 130px;
    text-align: center;
    margin-left: 185px;
}
}
@media (max-width: 826px){
    .Result {
    width: 130px;
    text-align: center;
    margin-left: -130px;
}
}
  @media (max-width: 745px){
  .Result {
    width: 130px;
    text-align: center;
}
  }
  @media (max-width: 680px){
    .Result {
    width: 130px;
    text-align: center;
    margin-left: 145px;
}
}
@media (max-width: 500px){
  .Result {
    width: 130px;
    text-align: center;
    margin-left: 120px;
}
}
@media (max-width: 460px){
  .Result {
margin-left: 105px;
  }
}
@media (max-width: 400px){
  .Result {
margin-left: 82px;
  }
}
`