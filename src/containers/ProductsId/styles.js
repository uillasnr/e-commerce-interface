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
    margin: 20px 100px;
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



p{
    margin-left: 530px;
    margin-top: 5px;
}

h2{
    margin-left: 530px;
    font-size: 2.5rem;
    width: 540px;
    margin-top: -30px;
}
h3{
    margin-left: 530px;
    margin-top: 90px;
    font-size: 1.3rem;
    color: rgb(54, 231, 61);
}
.quantity-container{
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
    p{
        margin-top: 5px;
    }
    h1{
    font-size: 16px;
    color: #000000;
    margin-top: 15px;
}
h6{
    width: 40px;
    height: 30px;
    background: #fff;
    border-radius: 5px;
    padding: 5px 15px 0px;
    font-size: 16px;
}




}
@media (max-width: 1090px){
h2{
    font-size: 2.3rem;
    width: 330px;
}
}
@media (max-width: 1040px){
h2{
    font-size: 2.1rem;
     width: 450px; 
}

}
@media (max-width: 1000px){
h2{
    font-size: 1.8em;
    margin-left: 505px;
    width: 375px;
}
h3{
    margin-left: 505px;
    width: 120;
}
p{
    margin-left: 505px;
    width: 225px;
}

.quantity-container{
    display: flex;
    gap: 20px;
    width: 110px;
    height: 40px;
    margin-left: 505px;

    button {
        height: 30px;
        background: transparent;
        border: none;
        font-size: 24px;
        cursor: pointer;
        margin-top: 15px;
        color: rgb(54, 231, 61);
    }
    p{
        margin-top: 5px;
    }
    h1{
    font-size: 16px;
    color: #000000;
    margin-top: 15px;
}
h6{
    width: 40px;
    height: 30px;
    background: #fff;
    border-radius: 5px;
    padding: 5px 15px 0px;
    font-size: 16px;
}
}
}

@media (max-width: 910px){
    h2{
    font-size: 1.8em;
    margin-left: 455px;
    width: 380px
}
h3 {
    margin-left: 455px;
    width: 150px;
}
 p {
    margin-left: 456px;
    width: 225px;
}

.quantity-container{
    display: flex;
    gap: 20px;
    width: 110px;
    height: 40px;
    margin-left: 455px;

    button {
        height: 30px;
        background: transparent;
        border: none;
        font-size: 24px;
        cursor: pointer;
        margin-top: 15px;
        color: rgb(54, 231, 61);
    }
    p{
        margin-top: 5px;
    }
    h1{
    font-size: 16px;
    color: #000000;
    margin-top: 15px;
}
h6{
    width: 40px;
    height: 30px;
    background: #fff;
    border-radius: 5px;
    padding: 5px 15px 0px;
    font-size: 16px;
}

}

}
@media (max-width: 850px){
    h2{
    font-size: 1.5em;
    margin-left: 455px;
    width: 325px
}
}
@media (max-width: 800px){
h2 {
    font-size: 1.5em;
    margin-left: 410px;
    width: 325px;
}
 h3 {
    margin-left: 410px;
    width: 150px;
}
p {
    margin-left: 410px;
    width: 225px;
}
.quantity-container {
    display: flex;
    gap: 20px;
    width: 110px;
    height: 40px;
    margin-left: 410px;
}
}
@media (max-width: 750px){
  
    h2 {
        font-size: 1.5em;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 153px;
    text-align: center;
    margin-top: -35px;

}
    h3 {
    margin-left: 300px;
    margin-top: 330px;
    width: 150px;
    font-size: 1.2em;
}
p {
    display: flex;
    text-align: center;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-left: 90px;
    margin-top: 20px;
    font-size: 0.9em;;
}
.quantity-container {
    display: flex;
    gap: 20px;
    width: 110px;
    height: 40px;
    margin-left: 300px;
}

}
@media (max-width: 630px){
    h2 {
        margin-left: 90px;
    }
    h3 {
    margin-left: 195px;
    font-size: 1.2em;
}
p {
    
    margin-left: 30px;
    font-size: 0.9em;;
}
.quantity-container {
    display: flex;
    gap: 20px;
    width: 110px;
    height: 40px;
    margin-left: 195px;
}
}
@media (max-width: 510px){
    h2 {
        margin-left: 77px;
    }
    h3 {
    margin-left: 160px;
    font-size: 1.2em;
}
p {
    
    margin-left: 25px;
    font-size: 0.9em;;
}
.quantity-container {
    display: flex;
    gap: 20px;
    width: 110px;
    height: 40px;
    margin-left: 160px;
}
}
@media (max-width: 455px){
    h2 {
        margin-left: 80px;
    }
    h3 {
    margin-left: 160px;
    font-size: 1.2em;
}
p {
    
    margin-left: 30px;
   
}
.quantity-container {
    display: flex;
    gap: 20px;
    width: 110px;
    height: 40px;
    margin-left: 160px;
}
}

@media (max-width: 445px){
    h2 {
        margin-left: 35px;
    }
    h3 {
    margin-left: 160px;
    font-size: 1.2em;
}
p {
    
    margin-left: 25px;
    font-size: 0.9em;;
}
.quantity-container {
    display: flex;
    gap: 20px;
    width: 110px;
    height: 40px;
    margin-left: 160px;
}
}
@media (max-width: 440px){
    h2 {
        margin-left: 35px;
    }
    h3 {
    margin-left: 142px;
    font-size: 1.2em;
}
p {
    
    margin-left: 17px;
   
}
.quantity-container {
    display: flex;
    gap: 20px;
    width: 110px;
    height: 40px;
    margin-left: 154px;
}
}
@media (max-width: 420px){
    h2 {
        margin-left: 60px;
    }
    h3 {
    margin-left: 114px;
    font-size: 1.2em;
}
p {
    
    margin-left: 25px;
   
}
.quantity-container {
    display: flex;
    gap: 20px;
    width: 110px;
    height: 40px;
    margin-left: 120px;
}
}


@media (max-width: 400px){
    h2 {
        margin-left: 75px;
    }
    h3 {
    margin-left: 135px;
    font-size: 1.2em;
}
p {
    
    margin-left:40px;
   
}
.quantity-container {
    display: flex;
    gap: 20px;
    width: 110px;
    height: 40px;
    margin-left: 143px;
}
}

`





export const ImgOptions = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

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


@media (max-width: 1090px){
    margin-left: -815px;

}

@media (max-width: 1040px){
    margin-left: -940px;

}

@media (max-width: 1000px){
    margin-left: -850px;
    width: 421px;
    height: 306px;
    }
@media (max-width: 950px){
    margin-left: -865px;
    width: 417px;
    height: 306px;
    }
    @media (max-width: 910px){
    margin-left: -820px;
    width: 417px;
    height: 306px;
    }
    @media (max-width: 850px){
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
    @media (max-width: 750px){
    margin-left: -355px;
    width: 380px;
    height: 306px;
    }
    @media (max-width: 630px){
    margin-left: -345px;
    width: 380px;
    height: 306px;
    }
    @media (max-width: 445px){
    margin-left: -345px;
    width: 380px;
    height: 306px;
    }
    @media (max-width: 420px){
     margin-left: -294px;
    width: 380px;
    height: 306px;
   } 
    @media (max-width: 400px){
       
        margin-left: -365px;
        div{
           width: 280px;
           height: 146px;
           margin-top: -20px;
        }
    .image-magnify {
    width: 70%;
    height: 70%;
    margin-left: -180px;
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
margin-top: 0px;
margin-left: 530px;
margin-bottom: 0px; 
&:hover {
    opacity:  0.8;
}
&:active {
opacity: 0.6;
}



@media (max-width: 1040px){
    margin-left: 530px;

}

@media (max-width: 1000px){
    margin-left: 500px;
   
    }
@media (max-width: 950px){
    margin-left: 500px;
  
    }
    @media (max-width: 910px){
        margin-left: 450px;

    }
    @media (max-width: 800px){
        margin-left: 400px;
    }
    @media (max-width: 750px){
   
        margin-left: 185px;
    }
    @media (max-width: 630px){
        margin-left: 75px;
    }
    @media (max-width: 510px){
        margin-left: 42px;
    }
    @media (max-width: 445px){
        margin-left: 50px;
    }
    @media (max-width: 420px){
        margin-left: 60px;
        width: 120px;
        font-size: 10px;
    }

`
export const ContainerItems = styled.div`
display: flex;
`

export const ButtonCart = styled.button`
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
margin-top: 20px;
margin-left: 20px;
margin-bottom: 0px; 
&:hover {
    opacity:  0.8;
}
&:active {
opacity: 0.6;
}

@media (max-width: 1040px){
    margin-left: 25px;

}
    @media (max-width: 440px){
   
        margin-left: 5px;
   
}
@media (max-width: 420px){
    font-size: 10px;
    width: 120px;
    margin-left: 15px;
}

`