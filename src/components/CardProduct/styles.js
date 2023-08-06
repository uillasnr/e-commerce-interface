//card

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
  @media (max-width: 881px) {
    width: 80px;
  }
  @media (max-width: 655px) {
    width: 80px;
  }
  @media (max-width: 390px) {
    width: 65px;
  }
`;

export const Button = styled.button`
  width: 150px;
  height: 30px;
  background: #36E73D;
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
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
  @media (max-width: 881px) {
    width: 130px;
    height: 27px;
    background: #36E73D;
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
    margin-left: 23px;
    margin-bottom: 0px;
  }
  
  @media (max-width: 655px) {
    width: 130px;
    height: 27px;
    background: #36E73D;
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
    margin-left: 23px;
    margin-bottom: 0px;
  }
  @media (max-width: 390px) {
    width: 130px;
    height: 27px;
    background: #36E73D;
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
    margin-left: 15px;
    margin-bottom: 0px;
  }
`;

export const ContainerItems = styled.h1`
  background: #464646;
  border-radius: 10.6557px;
  width: 200px;
  height: 290px;
  filter: drop-shadow(5px 5px 5px rgba(0,0,0,1.9));

  &:hover {
    transform: scale(1.03);
    cursor: pointer;
  }

  h6 {
    position: absolute;
    left: 160px;
    font-size: 15px;
    margin-top: 15px;
    color: #ffffff;
  }

  div {
    display: flex;
    justify-content: center;
    margin: 20px;
  }

  h2 {
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    text-align: center;
    line-height: 17px;
    margin: 10px;
    color: rgb(255, 255, 255);
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

  @media (max-width: 881px) {
    width: 180px;
    height: 280px;
  }

  @media (max-width: 655px) {
    width: 175px;
    height: 275px;
  }
  @media (max-width: 390px) {
    width: 160px;
    height: 260px;
  }
`;
