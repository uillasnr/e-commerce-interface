import styled from "styled-components";


export const Container = styled.div`
  height: auto;
  width: 100%;
  background: #222222;

  .imgProduct {
    width: 80px;
  }

  h1 {
    color: #fff;
    text-align: center;
    padding-top: 110px;

    @media (max-width: 768px) {

      padding-top: 50px;
      font-size: 24px;
    }
  }
`;


export const Card = styled.div`
  border-radius: 8px;
  padding: 10px;
  margin: 30px 150px;
  background: #464646;
  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 1.9));

  .status {
    display: inline-block;
    margin: 10px 553px 0px 10px;

    @media (max-width: 768px) {
    
      margin: 10px auto;
      text-align: center;
    }
  }

  .Total {
    gap: 423px;
    display: flex;
    margin: 0px 20px;
    color: #44d62c;
    font-size: 14px;
    font-weight: 700;

    @media (max-width: 1235px) {
      .Total {
    gap: 423px;
    }
  }
    @media (max-width: 768px) {
     
      flex-direction: column;
      align-items: center;
      text-align: center;
      margin: 20px;
    }
  }

  h3 {
    color: #fff;
  }
  span {
    color: #fff;
    font-size: 13px;
  }
`;


export const ProductItens = styled.div`
  display: flex;
  gap: 50px;
  background: #464646;
  border-bottom: 2px solid rgb(213, 213, 213);
  border-top: 2px solid rgb(213, 213, 213);
  margin: 10px;
  justify-content: center;

  li {
    list-style-type: none;
    padding: 0;
    text-align: center;
    margin: 20px;
    color: #fff;
    font-size: 14px;
    height: 145px;
  }
  h4 {
    font-size: 0.9rem;
    color: #44d62c;
  }

  .address {
    color: #fff;
    margin: 40px;
  }
  p {
    font-size: 12px;
  }
  h3 {
    color: #44d62c;
    margin-bottom: 5px;
  }

  @media (max-width: 768px) {

    flex-direction: column;
    align-items: center;
    text-align: center;

    li {
      margin: 10px;
    }
  }

`
