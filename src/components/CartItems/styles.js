import styled from "styled-components";


export const Container = styled.div`
background: rgb(119 122 143 / 53%);
filter: drop-shadow(5px 5px 5px rgba(0,0,0,1.9));
padding: 10px;
border-radius: 20px;
margin: 50px 25px;
width: max-content;
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
`
export const EmptyCart = styled.p`
padding: 20px;
text-align: center;
font-weight: bold;
color: #fff;
`