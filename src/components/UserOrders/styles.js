import styled from "styled-components";


export const Container = styled.div`
 min-height: calc(100vh - 72px);
  width: 100%;
  background: #222222;

  .imgProduct {
    width: 80px;
  }

  h1 {
    color: #fff;
    text-align: center;
    padding-top: 30px;
 /*    min-height: calc(100vh - 238px); */

    @media (max-width: 850px) {

      padding-top: 50px;
      font-size: 24px;
    }
  }

  
  @media (max-width: 400px) {


}

`;


export const Card = styled.div`
 border-radius: 8px;
  padding: 10px;
  margin: 20px 130px 60px;
  background: #464646;
  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 1.9));

  .status {
    display: inline-block;
    margin: 5px;
    color: #fff;
    font-size: 15px;
    
  }

  .Total {
    display: flex;
    justify-content: space-between;
    color: #44d62c;
    font-size: 14px;
    font-weight: 700;
    gap: 10px; 

    @media (max-width: 850px) {
      flex-direction: column;
      align-items: center;
      text-align: center;
      margin: 20px auto; /* Ajuste a margem */
    }
  }

  h3 {
    color: #fff;
  }
  .PrazoEntrega {
    color: #fff;
    font-size: 13px;
    display: flex;
    justify-content: flex-end; 
  }
  .dia {
    color: #44d62c;
    margin-left: 5px;
  }
 @media (max-width: 750px) {
margin: 20px 60px auto
 }
  @media (max-width: 550px) {
    margin: 20px 60px auto;
  h3{
    text-align: center;
  }
  .status {
    display: block;
    text-align: center;
  }
  .PrazoEntrega {
    color: #fff;
    font-size: 13px;
    display: flex;
    justify-content: center;
    margin-top: 10px;
}
.Total {
  flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 5px;
    font-size: 12px;
}

}
  @media (max-width: 400px) {
    margin: 20px 25px auto;
  }
`;



export const ProductItens = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Ajuste para uma coluna em telas menores */
  gap: 10px; /* Ajuste o espaçamento */
  background: #464646;
  border-top: 2px solid rgb(213, 213, 213);
  border-bottom: 2px solid rgb(213, 213, 213);
  margin: 10px;
  justify-content: center;

  li {
    list-style-type: none;
    padding: 0;
    text-align: center;
    margin: 20px;
    color: #fff;
    font-size: 14px;
   

  }
  h4 {
    font-size: 0.9rem;
    color: #44d62c;
  }

  .address {
    color: #fff;
    margin: 20px auto; 
  }
  p {
    font-size: 12px;
  }
  h3 {
    color: #44d62c;
    margin-bottom: 5px;
  }

  @media (max-width: 850px) {

    flex-direction: column;
    align-items: center;
    text-align: center;

    li {
      margin: 10px;
    }
  }

  @media (max-width: 650px) {
    display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;

}

@media (max-width: 550px) {
    display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 10px;

  h3{
    text-align: center;
  }

}

  @media (max-width: 400px) {
    display: flex;
    gap: 1px;
    background: #464646;
    border-bottom: 2px solid rgb(213, 213, 213);
    border-top: 2px solid rgb(213, 213, 213);
    margin: 10px;
    justify-content: center;
li{
  display: contents;
}

}

`
