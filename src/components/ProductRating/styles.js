import styled from "styled-components";

export const ContainerItems = styled.div`


h1{
  text-align: center;
  margin: 10px;
  font-size: 2rem;
}
h2{
  text-align: center;
  font-size: 1.4rem;
}
strong{
  font-size: 12px;
    margin-top: 5px;
    text-align: center;
    align-items: center;
    justify-content: center;
    display: flex;
}
.star{
  text-align: center;
  
}
line{
  border: 0.5px solid #d5d5d5;
    margin: 40px 0px 40px 0px;
}
@media (max-width: 720px){

  h1{
    margin: 10px;
    font-size: 1.8rem;
}
h2{
  
  font-size: 1.2rem;
}
strong{
  font-size: 12px;
    margin-top: 5px;
   
}
}
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;
    margin: 10px 0px 50px;
    position: relative;
    
h2{
    text-align: center;
}

form{
    display: flow-root;
   
    
}
.star{
    display: flex;
    justify-content: center;
    font-size: 25px;
}
.Nota{
    display: flex;
    justify-content: center;
    font-size: 13px;
    margin-bottom: 10px;
}

input{
    height: 35px;
    width: 300px;
    margin: 10px;
    border-radius: 5px;
    text-align: center;
    font-size: 12px;
    font-weight: 600;
    filter: drop-shadow(5px 5px 5px rgba(0,0,0,1.9));
}
textarea{
    display: flex;
    width: 300px;
    height: 160px;
    margin: 10px;;
    border-radius: 5px;
    text-align: center;
    font-size: 12px;
    font-weight: 600;
    padding-top: 10px;
    filter: drop-shadow(5px 5px 5px rgba(0,0,0,1.9));
}
button{
    width: 300px;
    height: 30px;
    text-align: center;
    font-size: 12px;
    background: #44d62c;
    color: #2c2b2b;
    font-weight: 600;
    margin: 10px;
    border-radius: 10px;
    cursor: pointer;
    border: none;
    filter: drop-shadow(5px 5px 5px rgba(0,0,0,1.9));

&:hover {
    opacity:  0.8;
}
&:active {
opacity: 0.6;
}
}
@media (max-width: 720px){
  display: grid;
}
`
export const ContainerRating = styled.div`
height: 400px;
overflow: auto;
width: 330px;

.rateOff{
  text-align: center;
    margin-top: 151px;
}

 /* Estilizando a barra de rolagem para ocultá-la */
 scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer e Edge */
  &::-webkit-scrollbar {
    width: 1px; /* Chrome e Safari */
    border: 0.5px solid #d5d5d5;
  }
  @media (max-width: 720px){
    &::-webkit-scrollbar {
    width: 0px; 
    
  }
  }
`;




export const Card = styled.div`
    background: #464646;
    border-radius: 10px;
    width: 290px;
    height: 130px;
    padding: 10px;
    /* display: flex; */
    gap: 10px;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    filter: drop-shadow(5px 5px 5px rgba(0,0,0,1.9));

  img {
    background: #464646;
    border-radius: 50px;
    width: 15%;
    margin: 10px;
  }
  .ContentText{
    display: flex;
  gap: 10px;
  align-items: center;
  }
h3{
  font-size: 15px;
    font-weight: 700;
    margin-top: 5px;
}
p{
  font-size: 12px;
    font-weight: 300;
    margin-top: 5px;
}
  .text {
    width: 210px;
    display: block;
    height: 100px;
  }

  .date {
    text-align: center;
    font-size: 15px;
    font-weight: 300;
  }
  @media (max-width: 720px){
    background: #464646;
    border-radius: 10px;
    width: 330px;
    height: 130px;
    padding: 10px;
    gap: 10px;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    filter: drop-shadow(5px 5px 5px rgba(0,0,0,1.9));
  }
`