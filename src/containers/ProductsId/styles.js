import styled from "styled-components";


export const Container = styled.div`
background: #222222;
width: 100%;
color: #fff;

line{
    width: 100%;
    display: flex;
    margin-top: 10px;
    border: 0.5px solid #d5d5d5;
}


h1{
    margin-bottom: 120px;
    display: flex;
    justify-content: center;
}
h5{
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    height: 300px;
    align-items: center;
    text-align: center;
    margin: 0px 100px;
}


.rec.rec-arrow{
    background-color:#36E73D;
    color: #efefef;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border: none;
}
.rec.rec-arrow:hover{
    border: 2px solid #36E73D;
    background-color: #efefef;
    color: #36E73D;
}
.rec.rec-arrow:disabled{
    border: none;
    background-color: #bebebf;
    color: #efefef;
}
button.rec-dot{
    display: none;

}
@media (max-width: 800px){
    h5{
        display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    height: auto;
    align-items: center;
    text-align: center;
    margin: 20px 20px;
    }
}



`


export const ContainerOffers = styled.div`
 
 background: #464646;
    border-radius: 10.6557px;
    width: 200px;
    height: 290px;
    position: relative;

    &:hover {
    transform: scale(1.03); /* Aumenta o tamanho em 5% */
    cursor: pointer;
  }
    
h4{
  position: absolute;
    left: 160px;
    font-size: 15px;
    margin-top: 15px;
    color: #FFFFFF;
    z-index: 1;
}


   
h6::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  border: 40px solid transparent;
  border-top: 40px solid #44D62C;
  border-right: 40px solid #44D62C;
  border-radius: 0px 10px 0px 10px;
  z-index: 1;
}



  div {
    display: grid;
    justify-content: center;
    margin: 15px;
  }

  h2 {
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    text-align: center;
    line-height: 17px;
    margin: 10px;
    color: #ffffff;
  }

  h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 13px;
    text-align: center;
    margin: 15px;
    color: #ffffff;
  }

  p {
    font-size: 20px;
    color: #44d62c;
    font-weight: 800;
    text-align: center;
  }

  img {
    width: 100px;
    background: none;
  }

  button {
    width: 150px;
    height: 30px;
    background: #36e73d;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 24px;
    text-align: center;
    color: #2c2b2b;
    margin-top: 20px;
    margin-left: 25px;
    margin-bottom: 0px;

    &:hover {
      opacity: 0.8;
    }

    &:active {
      opacity: 0.6;
    }
  }

  
  
`




export const ContainerTex = styled.div`
    display: inline-block;
  /*   background: red; */
    margin: 0px 15px 0px 120px;
    width: 80%;

  p {
    margin-left: 530px;
    margin-top: 5px;
    font-size: 0.875rem;
    line-height: 1.3125rem;
    color: rgb(255 255 255 / 65%);
    text-decoration: line-through;
    width: 150px;
  }

  h2 {
    margin-left: 530px;
    font-size: 2.5rem;
    width: 430px;
    margin-top: 42px;
  }

  .star {
    width: 155px;
    margin-left: 531px;
    font-size: 12px;
  }

  span {
    font-size: 18px;
  }

  h3 {
    margin-left: 530px;
    font-size: 1.3rem;
    color: rgb(54, 231, 61);
    width: 200px;
  }

  .quantity-container {
    display: flex;
    gap: 20px;
    width: 110px;
    height: 40px;
    margin-left: 530px;

    button {
      height: 30px;
      background: transparent;
      border: none;
      font-size: 24px;
      cursor: pointer;
      margin-top: 15px;
      color: rgb(54, 231, 61);
    }

    h1 {
      font-size: 16px;
      color: #000000;
      margin-top: 15px;
    }

    h6 {
      width: 40px;
      height: 30px;
      background: #fff;
      border-radius: 5px;
      padding: 5px 15px 0px;
      font-size: 16px;
    }
  }


  @media (max-width: 1140px) {
    display: inline-block;

    margin: 0px 15px 0px 120px;
    width: 80%;

  p {
    margin-left: 463px;
    margin-top: 5px;
    font-size: 0.875rem;
    line-height: 1.3125rem;
    color: rgb(255 255 255);
    text-decoration: line-through;
    width: 150px;
  }

  h2 {
    margin-left: 460px;
    font-size: 2.5rem;
    width: 430px;
    margin-top: 42px;
  }

  .star {
    width: 155px;
    margin-left: 460px;
    font-size: 12px;
  }

  span {
    font-size: 18px;
  }

  h3 {
    margin-left: 460px;
    font-size: 1.3rem;
    color: rgb(54, 231, 61);
    width: 200px;
  }

  .quantity-container {
    display: flex;
    gap: 20px;
    width: 110px;
    height: 40px;
    margin-left: 460px;

    button {
      height: 30px;
      background: transparent;
      border: none;
      font-size: 24px;
      cursor: pointer;
      margin-top: 15px;
      color: rgb(54, 231, 61);
    }

    h1 {
      font-size: 16px;
      color: #000000;
      margin-top: 15px;
    }

    h6 {
      width: 40px;
      height: 30px;
      background: #fff;
      border-radius: 5px;
      padding: 5px 15px 0px;
      font-size: 16px;
    }
  }
  a{
    margin-left: -70px;
  }
  }
  @media (max-width: 1030px) {
    display: inline-block;
  
    margin: 0px 15px 0px 120px;
    width: 80%;

  p {
    margin-left: 443px;
    margin-top: 5px;
    font-size: 0.875rem;
  }

  h2 {
    margin-left: 440px;
    font-size: 2.3rem;
    width: 344px;
    margin-top: 42px;
  }

  .star {
    width: 155px;
    margin-left: 440px;
    font-size: 12px;
  }

  span {
    font-size: 18px;
  }

  h3 {
    margin-left: 443px;
    font-size: 1.3rem;
    color: rgb(54, 231, 61);
    width: 200px;
  }

  .quantity-container {
    display: flex;
    gap: 20px;
    width: 110px;
    height: 40px;
    margin-left: 445px;

    button {
      height: 30px;
      background: transparent;
      border: none;
      font-size: 24px;
      cursor: pointer;
      margin-top: 15px;
      color: rgb(54, 231, 61);
    }

    h1 {
      font-size: 16px;
      color: #000000;
      margin-top: 15px;
    }

    h6 {
      width: 40px;
      height: 30px;
      background: #fff;
      border-radius: 5px;
      padding: 5px 15px 0px;
      font-size: 16px;
    }
  }
  a{
    margin-left: -88px;
  }
  }
   @media (max-width: 950px) {
    display: inline-block;
   
    margin: 0px 15px 0px 120px;
    width: 80%;

  p {
    margin-left: 400px;
    margin-top: 5px;
    font-size: 0.875rem;
  }

  h2 {
    margin-left: 400px;
    font-size: 2.2rem;
    width: 344px;
  }

  .star {
    width: 155px;
    margin-left: 400px;
    font-size: 12px;
  }

  span {
    font-size: 18px;
  }

  h3 {
    margin-left: 400px;
    font-size: 1.2rem;
    color: rgb(54, 231, 61);
    width: 200px;
  }

  .quantity-container {
    display: flex;
    gap: 20px;
    width: 110px;
    height: 40px;
    margin-left: 400px;

    button {
      height: 30px;
      background: transparent;
      border: none;
      font-size: 24px;
      cursor: pointer;
      margin-top: 15px;
      color: rgb(54, 231, 61);
    }

    h1 {
      font-size: 16px;
      color: #000000;
      margin-top: 15px;
    }

    h6 {
      width: 40px;
      height: 30px;
      background: #fff;
      border-radius: 5px;
      padding: 5px 15px 0px;
      font-size: 16px;
    }
  }
  a{
    margin-left: -99px;
  }
  }
  @media (max-width: 900px) {
    display: inline-block;
   
    margin: 0px 15px 0px 120px;
    width: 80%;

  p {
    margin-left: 365px;
    margin-top: 5px;
    font-size: 0.875rem;
  }

  h2 {
    margin-left: 365px;
    font-size: 2.1rem;
    width: 344px;
  }

  .star {
    width: 155px;
    margin-left: 365px;
    font-size: 11px;
  }

  span {
    font-size: 18px;
  }

  h3 {
    margin-left: 365px;
    font-size: 1.2rem;
    color: rgb(54, 231, 61);
    width: 200px;
  }

  .quantity-container {
    display: flex;
    gap: 20px;
    width: 110px;
    height: 40px;
    margin-left: 365px;

    button {
      height: 30px;
      background: transparent;
      border: none;
      font-size: 24px;
      cursor: pointer;
      margin-top: 15px;
      color: rgb(54, 231, 61);
    }

    h1 {
      font-size: 16px;
      color: #000000;
      margin-top: 15px;
    }

    h6 {
      width: 40px;
      height: 30px;
      background: #fff;
      border-radius: 5px;
      padding: 5px 15px 0px;
      font-size: 16px;
    }
  }
  a{
    margin-left: -84px;
  }
  }
  @media (max-width: 845px) {
    display: inline-block;
   
    margin: 0px 15px 0px 120px;
    width: 80%;

  p {
    margin-left: 330px;
    margin-top: 5px;
    font-size: 0.875rem;
  }
  .star {
    width: 155px;
    margin-left: 330px;
    font-size: 11px;
}
 h3 {
    margin-left: 330px;
    font-size: 1.2rem;
    color: rgb(54, 231, 61);
    width: 200px;
}

  h2 {
    margin-left: 330px;
    font-size: 2.1rem;
    width: 315px;
  }
   .quantity-container {
    display: flex;
    gap: 20px;
    width: 110px;
    height: 40px;
    margin-left: 330px;
}
}
  @media (max-width: 835px) {
    display: inline-block;
    
    margin: 0px 15px 0px 120px;
    width: 80%;

  p {
    margin-left: 330px;
    margin-top: 5px;
    font-size: 0.875rem;
  }

  h2 {
    margin-left: 330px;
    font-size: 2.1rem;
    width: 315px;
  }

  .star {
    width: 155px;
    margin-left: 330px;
    font-size: 11px;
  }

  span {
    font-size: 18px;
  }

  h3 {
    margin-left: 330px;
    font-size: 1.2rem;
    color: rgb(54, 231, 61);
    width: 200px;
  }

  .quantity-container {
    display: flex;
    gap: 20px;
    width: 110px;
    height: 40px;
    margin-left: 330px;
  

    button {
      height: 30px;
      background: transparent;
      border: none;
      font-size: 24px;
      cursor: pointer;
      margin-top: 15px;
      color: rgb(54, 231, 61);
    }

    h1 {
      font-size: 16px;
      color: #000000;
      margin-top: 15px;
    }

    h6 {
      width: 40px;
      height: 30px;
      background: #fff;
      border-radius: 5px;
      padding: 5px 15px 0px;
      font-size: 16px;
    }
  }
  a{
    margin-left: -84px;
  }
  }/////////////////////////////////////////////////////////////////////////////////
  @media (max-width: 780px) {
    display: inline-block;
   
   /*  margin: 0px 15px 0px 120px; */
    width: 80%;

  p {
    margin-left: 220px;
    margin-top: 5px;
    font-size: 0.875rem;
  }

  h2 {
    margin-left: 104px;
    font-size: 2.1rem;
    width: 315px;
    text-align: center;
  }

  .star {
    width: 155px;
    margin-left: 180px;
    font-size: 11px;
  }

  span {
    font-size: 18px;
  }

  h3 {
    margin-left: 202px;
    font-size: 1.2rem;
    color: rgb(54, 231, 61);
    width: 125px;
  }

  .quantity-container {
    display: flex;
    gap: 20px;
    width: 110px;
    height: 40px;
    margin-left:  201px;
    

    button {
      height: 30px;
      background: transparent;
      border: none;
      font-size: 24px;
      cursor: pointer;
      margin-top: 15px;
      color: rgb(54, 231, 61);
    }

    h1 {
      font-size: 16px;
      color: #000000;
      margin-top: 15px;
    }

    h6 {
      width: 40px;
      height: 30px;
      background: #fff;
      border-radius: 5px;
      padding: 5px 15px 0px;
      font-size: 16px;
    }
  }
  a{
    margin-left: -100px;
  }
}
@media (max-width: 740px) {
    display: inline-block;
  
   /*  margin: 0px 15px 0px 120px; */
   width: 60%;

  p {
    margin-left:195px;
    margin-top: 5px;
    font-size: 0.875rem;
  }

  h2 {
    margin-left: 80px;
    font-size: 2.1rem;
    width: 315px;
  }

  .star {
    width: 155px;
    margin-left: 156px;
    font-size: 11px;
  }

  span {
    font-size: 18px;
  }

  h3 {
    margin-left: 180px;
    font-size: 1.2rem;
    color: rgb(54, 231, 61);
    width: 125px;
  }

  .quantity-container {
    display: flex;
    gap: 20px;
    width: 110px;
    height: 40px;
    margin-left:  182px;
    margin-bottom: 20px;

    button {
      height: 30px;
      background: transparent;
      border: none;
      font-size: 24px;
      cursor: pointer;
      margin-top: 15px;
      color: rgb(54, 231, 61);
    }

    h1 {
      font-size: 16px;
      color: #000000;
      margin-top: 15px;
    }

    h6 {
      width: 40px;
      height: 30px;
      background: #fff;
      border-radius: 5px;
      padding: 5px 15px 0px;
      font-size: 16px;
    }
  }
  a{
    margin-left: -120px;
  }
}

@media (max-width: 690px) {
    display: inline-block;

   /*  margin: 0px 15px 0px 120px; */
   width: 60%;

  p {
    margin-left: 168px;
    margin-top: 5px;
    font-size: 0.875rem;
  }

  h2 {
    margin-left: 55px;
    font-size: 2.1rem;
    width: 315px;
  }

  .star {
    width: 155px;
    margin-left: 130px;
    font-size: 11px;
  }

  span {
    font-size: 18px;
  }

  h3 {
    margin-left: 152px;
    font-size: 1.2rem;
    color: rgb(54, 231, 61);
    width: 125px;
  }

  .quantity-container {
    display: flex;
    gap: 20px;
    width: 110px;
    height: 40px;
    margin-left: 157px;
    margin-bottom: 20px;

    button {
      height: 30px;
      background: transparent;
      border: none;
      font-size: 24px;
      cursor: pointer;
      margin-top: 15px;
      color: rgb(54, 231, 61);
    }

    h1 {
      font-size: 16px;
      color: #000000;
      margin-top: 15px;
    }

    h6 {
      width: 40px;
      height: 30px;
      background: #fff;
      border-radius: 5px;
      padding: 5px 15px 0px;
      font-size: 16px;
    }
  }
  a{
    margin-left: -145px;
  }
}

@media (max-width: 630px) {
    display: inline-block;
  
   /*  margin: 0px 15px 0px 120px; */
   width: 60%;

  p {
    margin-left: 168px;
    margin-top: 5px;
    font-size: 0.875rem;
  }

  h2 {
    margin-left: 55px;
    font-size: 2.1rem;
    width: 315px;
  }

  .star {
    width: 155px;
    margin-left: 130px;
    font-size: 11px;
  }

  span {
    font-size: 18px;
  }

  h3 {
    margin-left: 152px;
    font-size: 1.2rem;
    color: rgb(54, 231, 61);
    width: 125px;
  }

  .quantity-container {
    display: flex;
    gap: 20px;
    width: 110px;
    height: 40px;
    margin-left: 157px;
   /*  margin-bottom: 20px; */

    button {
      height: 30px;
      background: transparent;
      border: none;
      font-size: 24px;
      cursor: pointer;
      margin-top: 15px;
      color: rgb(54, 231, 61);
    }

    h1 {
      font-size: 16px;
      color: #000000;
      margin-top: 15px;
    }

    h6 {
      width: 40px;
      height: 30px;
      background: #fff;
      border-radius: 5px;
      padding: 5px 15px 0px;
      font-size: 16px;
    }
  }
  a{
    margin-left: -35px;
  }
}

@media (max-width: 590px) {
    display: inline-block;
   
   /*  margin: 0px 15px 0px 120px; */
   width: 60%;

  p {
    margin-left: 144px;
    margin-top: 5px;
    font-size: 0.875rem;
  }

  h2 {
    margin-left: 30px;
    font-size: 2.1rem;
    width: 315px;
  }

  .star {
    width: 155px;
    margin-left: 105px;
    font-size: 11px;
  }

  span {
    font-size: 18px;
  }

  h3 {
    margin-left: 125px;
    font-size: 1.2rem;
    color: rgb(54, 231, 61);
    width: 125px;
  }

  .quantity-container {
    display: flex;
    gap: 20px;
    width: 110px;
    height: 40px;
    margin-left: 134px;
    margin-bottom: 20px;

    button {
      height: 30px;
      background: transparent;
      border: none;
      font-size: 24px;
      cursor: pointer;
      margin-top: 15px;
      color: rgb(54, 231, 61);
    }

    h1 {
      font-size: 16px;
      color: #000000;
      margin-top: 15px;
    }

    h6 {
      width: 40px;
      height: 30px;
      background: #fff;
      border-radius: 5px;
      padding: 5px 15px 0px;
      font-size: 16px;
    }
  }
  a{
    margin-left: -56px;
  }
}
@media (max-width: 520px) {
    display: inline-block;
   
   /*  margin: 0px 15px 0px 120px; */
   width: 60%;

  p {
    margin-left: 102px;
    margin-top: 5px;
    font-size: 0.875rem;
  }

  h2 {
    margin-left: -10px;
    font-size: 2.1rem;
    width: 315px;
  }

  .star {
    width: 155px;
    margin-left: 58px;
    font-size: 11px;
  }

  span {
    font-size: 18px;
  }

  h3 {
    margin-left: 85px;
    font-size: 1.2rem;
    color: rgb(54, 231, 61);
    width: 125px;
  }

  .quantity-container {
    display: flex;
    gap: 20px;
    width: 110px;
    height: 40px;
    margin-left: 90px;
    margin-bottom: 20px;

    button {
      height: 30px;
      background: transparent;
      border: none;
      font-size: 24px;
      cursor: pointer;
      margin-top: 15px;
      color: rgb(54, 231, 61);
    }

    h1 {
      font-size: 16px;
      color: #000000;
      margin-top: 15px;
    }

    h6 {
      width: 40px;
      height: 30px;
      background: #fff;
      border-radius: 5px;
      padding: 5px 15px 0px;
      font-size: 16px;
    }
  }
  a{
    margin-left: -99px;
  }
}
@media (max-width: 460px) {
    display: inline-block;
    width: 60%;
    margin-left: 88px;
    h2 {
      font-size: 1.5rem;
    width: 108%;
    margin-left: -26px;
    }


p {
  margin-left: 78px;
    margin-top: 5px;
    font-size: 0.8rem;
}

.star {
  width: 155px;
    margin-left: 37px;
    font-size: 11px;
}

span {
 font-size: 18px;
}

h3 {
  margin-left: 67px;
    font-size: 1rem;
    color: rgb(54, 231, 61);
    width: 125px;
}

.quantity-container {
  display: flex;
    gap: 15px;
    width: 110px;
    height: 40px;
    margin-left: 74px;
   margin-top: 0px;

 button {
  height: 30px;
    background: transparent;
    border: none;
    font-size: 20px;
    cursor: pointer;
    margin-top: 15px;
    color: rgb(54, 231, 61);
 }

 h1 {
   font-size: 16px;
   color: #000000;
   margin-top: 15px;
 }

 h6 {
  width: 30px;
    height: 24px;
    background: #fff;
    border-radius: 5px;
    padding: 5px 12px 0px;
    font-size: 13px;
 }
}
a{
 margin-left: -101px;
}
}
  @media (max-width: 440px) {
    display: inline-block;
    width: 60%;
    margin-left: 88px;
    h2 {
      font-size: 1.5rem;
    width: 108%;
    margin-left: -26px;
    }


p {
  margin-left: 78px;
    margin-top: 5px;
    font-size: 0.8rem;
}

.star {
  width: 155px;
    margin-left: 37px;
    font-size: 11px;
}

span {
 font-size: 18px;
}

h3 {
  margin-left: 67px;
    font-size: 1rem;
    color: rgb(54, 231, 61);
    width: 125px;
}

.quantity-container {
  display: flex;
    gap: 15px;
    width: 110px;
    height: 40px;
    margin-left: 74px;
   margin-top: 0px;

 button {
  height: 30px;
    background: transparent;
    border: none;
    font-size: 20px;
    cursor: pointer;
    margin-top: 15px;
    color: rgb(54, 231, 61);
 }

 h1 {
   font-size: 16px;
   color: #000000;
   margin-top: 15px;
 }

 h6 {
  width: 30px;
    height: 24px;
    background: #fff;
    border-radius: 5px;
    padding: 5px 12px 0px;
    font-size: 13px;
 }
}
a{
 margin-left: -101px;
}
}
@media (max-width: 400px) {
    display: inline-block;
    width: 60%;
    margin-left: 88px;
    margin-top: -40px;
    h2 {
      font-size: 1.5rem;
    width: 108%;
    margin-left: -27px;
    }


p {
  margin-left: 64px;
    margin-top: 5px;
    font-size: 0.8rem;
}

.star {
  width: 155px;
  margin-left: 22px;
    font-size: 11px;
}

span {
 font-size: 18px;
}

h3 {
  margin-left: 52px;
    font-size: 1rem;
    color: rgb(54, 231, 61);
    width: 125px;
}

.quantity-container {
  display: flex;
    gap: 15px;
    width: 110px;
    height: 40px;
    margin-left: 59px;
    margin-bottom: 20px;

 button {
  height: 30px;
    background: transparent;
    border: none;
    font-size: 20px;
    cursor: pointer;
    margin-top: 15px;
    color: rgb(54, 231, 61);
 }

 h1 {
   font-size: 16px;
   color: #000000;
   margin-top: 15px;
 }

 h6 {
  width: 30px;
    height: 24px;
    background: #fff;
    border-radius: 5px;
    padding: 5px 12px 0px;
    font-size: 13px;
 }
}
a{
  margin-left: -94px;
}
}

`;





export const ImgOptions = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    @media (max-width: 460px){
    display: flex;
    align-items: center;
    flex-direction: inherit;
    gap: 10px;
    margin-top: 110px;
    margin-left: 120px
    }
    
    @media (max-width: 450px){
    display: flex;
    align-items: center;
    flex-direction: inherit;
    gap: 10px;
    margin-top: 110px;
    margin-left: 120px
    }
    @media (max-width: 400px){
    display: flex;
    align-items: center;
    flex-direction: inherit;
    gap: 10px;
    margin-top: 110px;
    margin-left: 120px
    }
`

export const ContainerImg = styled.div`
    width: 421px;
    height: 330px;
    margin: 30px;
    display: flex;
    margin-left: -1020px;

div{
   
    width: 328px;
    height: 328px;
}
.zoomed-image-container {

   position: fixed;
   top: 50%;
  left: 500%; 
   transform: translate(5%, -15%); 
  z-index: 9999;
  background: white;
  border: 1px solid #ddd;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  overflow: hidden; 
}

@media (max-width: 1230px){
  margin-left: -970px

}
@media (max-width: 1190px){
    margin-left: -940px

}
@media (max-width: 1090px){
    margin-left: -890px;

}

@media (max-width: 1040px){
    margin-left: -888px;

}
@media (max-width: 1015px){
    margin-left: -850px;
    width: 421px;
    height: 306px;
    }
@media (max-width: 1000px){
    margin-left: -850px;
    width: 421px;
    height: 306px;
    }
@media (max-width: 950px){
    margin-left: -835px;
    width: 417px;
    height: 306px;
    }
    @media (max-width: 910px){
    margin-left: -820px;
    width: 417px;
    height: 306px;
    }
    @media (max-width: 870px){
     margin-left: -755px;
    width: 380px;
    height: 306px;

    .image-magnify {
    width: 80%;
    height: 93%;
}
   
}
    
    @media (max-width: 800px){
    margin-left: -725px;
    width: 380px;
    height: 306px;
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////
    @media (max-width: 780px){
      margin-left: -560px;
    width: 380px;
    height: 306px;
    margin-top: -275px;
    }
    @media (max-width: 740px) {
      margin-left: -407px;
    width: 380px;
    height: 306px;
    margin-top: -275px;
    }
    @media (max-width: 630px){
    margin-left: -376px;
    width: 380px;
    height: 306px;
    }
    @media (max-width: 460px){
       
      margin-left: -408px;
         div{
            width: 280px;
            height: 146px;
            margin-top: -20px;
         }
     .image-magnify {
     width: 70%;
     height: 70%;
     margin-left: -180px;
     background: red;
     }
     .zoomed-image-container {
     display: none;
     position: fixed;
     top: 50%;
     left: 500%; 
     transform: translate(5%, -15%); 
     z-index: 9999;
     background: white;
     border: 1px solid #ddd;
     box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
     overflow: hidden; 
 }
 
     }
    @media (max-width: 450px){
    margin-left: -345px;
    width: 380px;
    height: 306px;
    }
    @media (max-width: 445px){
       
    margin-left: -400px;
    width: 380px;
    height: 306px;
   
         div{
            width: 280px;
            height: 146px;
            margin-top: -20px;
         }
     .image-magnify {
     width: 70%;
     height: 70%;
     margin-left: -180px;
     background: red;
     }
     .zoomed-image-container {
     display: none;
     position: fixed;
     top: 50%;
     left: 500%; 
     transform: translate(5%, -15%); 
     z-index: 9999;
     background: white;
     border: 1px solid #ddd;
     box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
     overflow: hidden; 
 }
 
     }
    
    @media (max-width: 420px){
      margin-left: -396px;
    width: 380px;
    height: 306px;
   } 
    @media (max-width: 400px){
       
      margin-left: -392px;
        div{
           width: 280px;
           height: 146px;
           margin-top: -20px;
        }
    .image-magnify {
    width: 70%;
    height: 70%;
    margin-left: -180px;
    background: red;
    }
    .zoomed-image-container {
    display: none;
    position: fixed;
    top: 50%;
    left: 500%; 
    transform: translate(5%, -15%); 
    z-index: 9999;
    background: white;
    border: 1px solid #ddd;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    overflow: hidden; 
}

    }
    
`
export const Img = styled.img`
    border: 0.5px solid ${props => props.isSelected ? '#36e73d' : 'none'};
    width: 80%;
    cursor: pointer;
    padding: 10px;
    background: #464646;
    @media (max-width: 950px){
        width: 84%;
    }
    @media (max-width: 460px){
        width: 36%;
    margin-left: -5px;
    margin-top: 355px;
    }
    @media (max-width: 450px){
        width: 36%;
    margin-left: -5px;
    margin-top: 355px;
    }
    @media (max-width: 400px){
        width: 36%;
    margin-left: -5px;
    margin-top: 355px;
    }
`
export const Description = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-size: 2rem;
margin-top: 30px;
`
export const Button = styled.button`
    border: none;
    background: none;
button{
width: 150px;
height: 30px;
background: #36E73D;;
border-radius: 20px;
border: none;
cursor: pointer;
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 24px;
text-align: center;
color: #2c2b2b;
&:hover {
    opacity:  0.8;
}
&:active {
opacity: 0.6;
}
}
.carrinho{
  width: 150px;
height: 30px;
background: #36E73D;;
border-radius: 20px;
border: none;
cursor: pointer;
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 24px;
text-align: center;
color: #2c2b2b;


&:hover {
    opacity:  0.8;
}
&:active {
opacity: 0.6;
}
}

img{
  margin: -2px;
}
.buttonProductId{
    margin-left: 533px;
    justify-content: center;
    display: flex;
    gap: 10px;
    margin-top: 20px;
}
@media (max-width: 950px) {
  .buttonProductId{
    margin-left: 500px;
    justify-content: center;
    display: flex;
    gap: 10px;
}
}
@media (max-width: 900px) {
  .buttonProductId{
    margin-left: 450px;
    justify-content: center;
    display: flex;
    gap: 10px;
}
}
@media (max-width: 845px) {
  .buttonProductId{
    margin-left: 415px;
    justify-content: center;
    display: flex;
    gap: 10px;
    
}
}
@media (max-width: 780px) {
 .buttonProductId {
    margin-left: 194px;
    justify-content: center;
    display: flex;
    gap: 10px;
   
}
}
@media (max-width: 630px) {
 .buttonProductId {
  margin-left: 82px;
    justify-content: center;
    display: flex;
    gap: 10px;
   
}
}
@media (max-width: 440px) {
  .buttonProductId {
    margin-left: 56px;
    justify-content: center;
    display: flex;
    gap: 10px;
}
}
@media (max-width: 400px) {
  .buttonProductId {
    margin-left: 34px;
    justify-content: center;
    display: flex;
    gap: 10px;
}
}
`
export const ContainerItems = styled.div`
display: flex;

@media (max-width: 780px){
  margin-top: 365px; 
    }
`

