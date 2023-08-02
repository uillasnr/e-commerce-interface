import styled from "styled-components";


export const Container = styled.div`
background: rgb(119 122 143 / 53%);
filter: drop-shadow(5px 5px 5px rgba(0,0,0,1.9));
padding: 10px;
border-radius: 20px;
margin: 20px 25px;
width: max-content;


@media  (max-width: 1045px) {
    width: 655px;
}
 @media  (max-width: 826px) {
    margin: 50px 25px;
    margin-top: -75px;
    width: 92%;
} 
@media  (max-width: 720px) {
    width: 615px;
} 
@media  (max-width: 680px) {
    width: 576px;
} 
@media  (max-width: 640px) {
    width: 540px;
} 
@media  (max-width: 605px) {
    width: 495px;
} 
@media  (max-width: 560px) {
    width: 485px;
    margin: 10px 10px;
    margin-top: -75px;
} 
@media  (max-width: 530px) {
    width: 441px;
    margin: 10px 10px;
    margin-top: -75px;
} 

@media  (max-width: 480px) {
    width: 400px;
    margin: 10px 10px;
    margin-top: -75px;
}
@media  (max-width: 435px) {
    width: 370px;
    margin: 10px 10px;
    margin-top: -75px;
}

@media  (max-width: 400px) {
    width: 340px;
    margin: 10px 10px;
    margin-top: -75px;
} 

`


export const Header = styled.div`
 display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 10px;
  border-bottom: 1px solid #b5b5b5;
  h3 {
    font-size: 16px;
    color: #36e73d;
    font-weight: bold;
    margin-left: 20px;
  }

  @media  (max-width: 400px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    padding: 0px 0px 5px 67px;
    border-bottom: 1px solid #b5b5b5;
  h3 {
    font-size: 12px;
    color: #36e73d;
    font-weight: bold;
    margin-left: 20px;
  }
  }
`

export const Body = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
padding: 10px;
width: max-content;
grid-gap: 10px 15px;

img{
    border-radius: 10px;
    width: 120px;
}
p{
    font-size: 16px;
    color: #fff;
    width: 100px;
    margin-top: 50px;
    
}
h1{
    font-size: 16px;
    color: #000000;
    margin-top: 50px;
}
h6{
    width: 40px;
    height: 30px;
    background: #fff;
    border-radius: 5px;
    padding: 5px 15px 0px;
    font-size: 16px;
}
.quantity-container{
    display: flex;
    gap: 20px;
    button {
        height: 30px;
        background: transparent;
        border: none;
        font-size: 24px;
        cursor: pointer;
        margin-top: 50px;
        color: #fff;
    }
    p{
        margin-top: 5px;
       
    
    }
}

@media  (max-width: 1045px) {
    width: 628px;
}
@media  (max-width: 1000px) {
    width: 580px;
}
@media  (max-width: 950px) {
    width: 560px;
    grid-gap: 10px 15px;
    img{
    width: 80%;
    margin-top: 35px;
}
p{
    width: 75px;
    margin-top: 50px;
    
}
}

@media  (max-width: 926px) {
    width: 500px;
}
@media  (max-width: 852px) {
    width: 475px
}
@media  (max-width: 826px) {
  
    width: 630px;
}
@media  (max-width: 720px) {
    width: 615px;
} 
@media  (max-width: 680px) {
    width: 576px;
} 
@media  (max-width: 640px) {
    width: 540px;
} 
@media  (max-width: 605px) {
    width: 465px;

    .quantity-container {
    display: flex;
    gap: 5px;
    margin-top: -5px;
    }
    p{
        width: 75px;
    font-size: 12px;
    margin-top: 55px;
    width: 67px;
    }
} 
@media  (max-width: 530px) {
    width: 435px;

     .quantity-container {
    display: flex;
    gap: 5px;
    margin-top: -38px;
    }
     img {
    width: 80%;
    margin-top: 10px;
    }
    p{
        width: 75px;
    font-size: 12px;
    margin-top: 20px;
    width: 67px;
    }
}
@media  (max-width: 525px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    padding: 5px;
    width: 415px;
    grid-gap: 0px 3px;

img{
    border-radius: 10px;
    width: 65px;
}
p{
    font-size: 13px;
    color: #fff;
    width: 60px;
    margin-top: 30px;
}
h1{
    font-size: 16px;
    color: #000000;
    margin-top: 50px;
}
h6{
    width: 40px;
    height: 30px;
    background: #fff;
    border-radius: 5px;
    padding: 5px 15px 0px;
    font-size: 16px;
}
.quantity-container{
    display: flex;
    margin-top: -30px;
    button {
        height: 30px;
        background: transparent;
        border: none;
        font-size: 24px;
        cursor: pointer;
        margin-top: 50px;
        color: #fff;
    }
    p{
        margin-top: 5px;
       
    
    }
}

}
@media  (max-width: 480px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    padding: 5px;
    width: 380px;
    grid-gap: 0px 3px;

img{
    border-radius: 10px;
    width: 50px;
}
p{
    font-size: 11px;
    color: #fff;
    width: 50px;
    margin-top: 20px;
}
h1{
    font-size: 16px;
    color: #000000;
    margin-top: 50px;
}
h6{
    width: 30px;
    height: 30px;
    background: #fff;
    border-radius: 5px;
    padding: 8px 12px 0px;
    font-size: 13px;
}
.quantity-container{
    display: flex;
    margin-top: -40px;
    gap: 7px;
    button {
        height: 30px;
    background: transparent;
    border: none;
    font-size: 15px;
    cursor: pointer;
    margin-top: 50px;
    color: #fff;
    }
    p{
        margin-top: 5px
    }
}
}
@media  (max-width: 435px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    padding: 5px;
    width: 351px;
    grid-gap: 0px 3px;

img{
    border-radius: 10px;
    width: 50px;
}
p{
    font-size: 11px;
    color: #fff;
    width: 50px;
    margin-top: 20px;
}
h1{
    font-size: 16px;
    color: #000000;
    margin-top: 50px;
}
h6{
    width: 30px;
    height: 30px;
    background: #fff;
    border-radius: 5px;
    padding: 8px 12px 0px;
    font-size: 13px;
}
.quantity-container{
    display: flex;
    margin-top: -40px;
    gap: 7px;
    button {
        height: 30px;
    background: transparent;
    border: none;
    font-size: 15px;
    cursor: pointer;
    margin-top: 50px;
    color: #fff;
    }
    p{
        margin-top: 5px
    }
}
}
@media  (max-width: 400px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    padding: 5px;
    width: 335px;
    grid-gap: 0px 3px;

img{
    border-radius: 10px;
    width: 50px;
}
p{
    font-size: 11px;
    color: #fff;
    width: 50px;
    margin-top: 20px;
}
h1{
    font-size: 16px;
    color: #000000;
    margin-top: 50px;
}
h6{
    width: 30px;
    height: 30px;
    background: #fff;
    border-radius: 5px;
    padding: 8px 12px 0px;
    font-size: 13px;
}
.quantity-container{
    display: flex;
    margin-top: -40px;
    gap: 7px;
    button {
        height: 30px;
    background: transparent;
    border: none;
    font-size: 15px;
    cursor: pointer;
    margin-top: 50px;
    color: #fff;
    }
    p{
        margin-top: 5px;
       
    
    }
}

}

`
export const EmptyCart = styled.p`
padding: 20px;
text-align: center;
font-weight: bold;
color: #fff;
`