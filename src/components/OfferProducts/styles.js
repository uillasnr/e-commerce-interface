import styled from "styled-components";

export const Container = styled.div``

export const H1 = styled.h1`
color: #fff;
margin-left: 35px;
margin-top: 50px;
font-size: 2rem;

@media (max-width: 768px) {
    font-size: 1.5rem;
    margin-left: 20px;
    margin-top: 30px;
  }
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin-left: 10px;
    margin-top: 20px;
  }
`


export const ContainerCardOffer = styled.div`
display: grid;
grid-template-columns: repeat(5,1fr);
gap: 10px;
padding: 40px; 




@media  (max-width: 1120px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    width: 996px;
    margin-left: 52px;
    padding: 40px;
      }
@media  (max-width: 1065px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    width: 944px;
    margin-left: 52px;
    padding: 40px;
      }
      @media (max-width: 1012px) {

    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    width: 910px;
    margin-left: 52px;
    padding: 40px;
      } 
      @media (max-width: 980px) {
        grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    width: 800px;
    margin-left: 95px;
    padding: 40px;
      } 
      @media (max-width: 910px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    width: 800px;
    margin-left: 50px;
    padding: 40px;
      } 
      @media (max-width: 865px) {
        grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    width: 800px;
    margin-left: 22px;
    padding: 40px;
      } 
      @media (max-width: 837px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    width: 757px;
    margin-left: 31px;
    padding: 40px;
      } 
      @media (max-width: 805px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    width: 700px;
    margin-left: 31px;
    padding: 40px;
      } 
      @media (max-width: 750px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    width: 700px;
    margin-left: 10px;
    padding: 40px;
      } 
      @media (max-width: 725px) {
        grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    width: 631px;
    margin-left: 32px;
    padding: 40px 10px;
      } 
      @media (max-width: 680px) {
        grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    width: 631px;
    margin-left: 0px;
    padding: 40px 10px;
      }
      @media (max-width: 650px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    width: 567px;
    margin-left: 28px;
    padding: 40px;
      }
      @media (max-width: 610px) {
        grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    width: 525px;
    margin-left: 28px;
    padding: 40px;
      }
      @media (max-width: 570px) {
        grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    width: 490px;
    margin-left: 28px;
    padding: 40px;
      }
      @media (max-width: 533px) {
        grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    width: 411px;
    margin-left: 35px;
    padding: 40px 0px;
      }
      @media (max-width: 570px) {
        grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    width: 411px;
    margin-left: 35px;
    padding: 40px 0px;
      }
      @media (max-width: 470px) {
      grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    width: 411px;
    margin-left: 8px;
    padding: 40px 0px;
      }
`


export const Img = styled.img`
width: 100px;
background: none;


`
export const ButtonOffers = styled.button`

background: rgb(68, 214, 44);
border: none;
cursor: pointer;
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 24px;
text-align: center;
color: #fff;
margin: 15px;
height: 21px;
`

export const ContainerItems = styled.h1`

    background: #464646;
    border-radius: 10.6557px;
    width: 200px;
    height: 290px;
    position: relative;

  
    
h5{
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



div{
    display: grid;
    justify-content: center;
    margin: 10px;
}
h2{
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    text-align: center;
    line-height: 17px;
    margin: 10px;
    color: rgb(255, 255, 255);
}

h3{
    font-style: normal;
font-weight: 700;
font-size: 10px;
line-height: 13px;
text-align: center;
margin: 15px;
color: #FFFFFF;
}
p{
    font-size: 20px;
    color: #44D62C;
    font-weight: 800;
    text-align: center;
}


`

export const Stopwatch = styled.div`
display: grid;
background: rgb(68, 214, 44);
border-radius: 10px;
cursor: pointer;

h4{
  font-size: 15px;
 color: #fff;
margin: 5px;
}
span{
  font-size: 10px;
  color: #fff;
  text-align: center;
  display: inherit;
}
 .time{
  display: -webkit-box;
    margin: 0;
}  
img{
  width: 30px;
  height: 30px;

}
`
