import styled from "styled-components";


export const Container = styled.div`
display: grid;
grid-template-columns: repeat(5,1fr);
gap: 0px;
padding: 10px; 


`

export const Img = styled.img`
width: 100px;
background: none;


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
font-size: 16px;
line-height: 24px;
text-align: center;
color: #2c2b2b;
margin-top: 0px;
margin-left: 25px;
margin-bottom: 0px;
&:hover {
    opacity:  0.8;
}
&:active {
opacity: 0.6;
}
`

export const ContainerItems = styled.h1`

    background: #464646;
    border-radius: 10.6557px;
    width: 200px;
    height: 290px;


    &:hover {
    transform: scale(1.03); /* Aumenta o tamanho em 5% */
    cursor: pointer;
  }
   
 h6{
    position: absolute;
    left: 160px;
    font-size: 15px;
    margin-top: 15px;
    color: #FFFFFF;
 }


div{
    display: flex;
    justify-content: center;
    margin: 20px;
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