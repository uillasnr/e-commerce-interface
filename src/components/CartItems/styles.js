import styled from "styled-components";


export const Container = styled.div`
background: rgb(119 122 143 / 53%);
filter: drop-shadow(5px 5px 5px rgba(0,0,0,1.9));
padding: 10px;
border-radius: 20px;
margin: 50px 25px;
width: max-content;

@media  (max-width: 1045px) {
    width: 655px;
}
 @media  (max-width: 826px) {
    margin: 50px 25px;
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

`


export const Header = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
padding: 10px;
border-bottom: 1px solid #b5b5b5;
h3{
    font-size: 16px;
    /* color: #b5b5b5; */
    color: #fff;
  
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
    width: 465px;
} 

`
export const EmptyCart = styled.p`
padding: 20px;
text-align: center;
font-weight: bold;
color: #fff;
`