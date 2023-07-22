import styled from 'styled-components';

export const ContainerItems = styled.div`
  display: flex;
  justify-content: center;

  div {
    display: block;
    margin: 15px;
    width: 150px;
  }
  h3 {
    color: #fff;
    font-size: 0.9rem;
  }
  p {
    font-size: 0.9rem;
    font-weight: 300;
    color: #fff;
  }
  img {
    width: 60%;
  }


  @media (max-width: 768px) {
    div {
      width: 100%;
    }
    img {
      width: 100px;
    }
    h3 {
    font-size: 12px;
  }
  p {
    font-size: 12px;
    color: #fff;
  }
  }
`;

export const Div = styled.div`
     padding: 145px 130px 0px 130px;

  button {
    background: none;
    border: none;
    display: flex;
    margin-left: 40%;
    margin-top: 10px;
    margin-bottom: 29px;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    color: #44d62c; /* Cor inicial do texto */
    transition: color 0.3s; /* Adicionando uma transição de 0.3 segundos na mudança de cor */
  }

  button:hover {
    color: #fff;
    transform: scale(1.03);
  }

  button:active {
    color: #fff;
  }
  @media (max-width: 950px) {
    button{
    margin-left: 35%;
    }
  }
  @media (max-width: 768px) {
   padding: 145px 130px 42px 130px;
    button {
      margin-left: 30%;
    }
  }
  @media (max-width: 650px) {
    button{
      margin-left: 25%;
    }
    padding: 150px 130px 0px 130px;
  }
  @media (max-width: 565px) {
    padding: 150px 86px 0px 86px;
  }
  @media (max-width: 500px) {
    padding: 150px 50px 0px 50px;
  }
  @media (max-width: 400px) {
    button{
      margin-left: 23%;
    }
    padding: 150px 15px 0px 15px;
  }
`;

export const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 335px;
  border-radius: 30px;
  border: 8px solid rgb(68 214 44);

  h1 {
    font-size: 3rem;
    font-weight: bold;
    color: #fff;
  }
  h2 {
    font-size: 2.5rem;
    font-weight: bold;
    color: #fff;
  }
  h4 {
    color: #44d62c;
  }


  @media (max-width: 850px) {
    h1{
      font-size: 2rem;
    }
  }

  @media (max-width: 768px) {
    height: auto;
  }
`;

export const Background = styled.div`
  height: 543px;
  width: 100%;
  background: #222222;
 
`;

