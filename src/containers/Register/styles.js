import styled from "styled-components";



export const Background = styled.div`
    background: #222222;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 0px;
  h1{
    text-align: center;
    color: #fff;
    margin-top: 100px;
  }

`;

export const Container = styled.div`
    display: flex;
    width: 375px;
    height: 388px;
    justify-content: center;
    align-items: center;
    background-color: #666;
    border-radius: 8px;
    border: 2px solid #d5d5d5;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin: 20px 0px 25px 0px;
    margin-top:20px;

  @media (max-width: 768px) {
    width: auto;
    height: auto;
    padding: 20px;
  }
  .buttonLoginModal {
    position: absolute;
    top: 0;
    right: 0;
    margin: 5px;
    width: 10%;
    border: none;
    height: 10%;
    color: #ffffff;
    background: none;
    cursor: pointer;
    font-size: 25px;
  }

  @media (max-width: 768px) {
    width: auto;
    height: auto;
    padding: 20px;
  }
`;

export const ContainerItens = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    color: #36e73d;
    margin: 20px;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 24px;
    }
  }
`;

export const Label = styled.label`
    color: #fff;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 0.8;
    margin-bottom: 5px;
    margin-top: 5px;
    position: absolute;
    transition: all 0.3s;
    transform-origin: top left;
    pointer-events: none;

  &.active {
    transform: translateY(-20px) scale(0.8);
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Input = styled.input`
  background: none;
  width: 100%;
  border: none;
  border-bottom: solid 2px ${(props) => (props.error ? "#cc1717" : "#44d62c")};
  padding-left: 10px;
  margin-bottom: 25px;
  font-size: 16px;
  color: ${(props) => (props.error ? "#cc1717" : "#fff")};

  &.active {
    border-bottom-color: #44d62c;
  }
   /* Estilo para evitar preenchimento automático */
  /* Pode ser necessário adicionar mais estilos específicos do navegador se necessário */
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    /* Defina a cor do texto  */
    -webkit-text-fill-color: #fff;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const SignInLink = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 10px;
  line-height: 16px;
  color: #fff;
  text-align: center;
  margin-top: 10px;
  a {
    cursor: pointer;
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 8px;
  }
`;



export const ButtonLogin = styled.button`
  width: 280px;
    height: 36.13px;
    background: #36E73D;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #2c2b2b;
    margin-top: 10px;
    

 &:hover {
    opacity:  0.8;
}
&:active {
opacity: 0.6;
}
`;


