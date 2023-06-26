import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 375px;
  height: 330px;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #666;
  border-radius: 8px;
  border: 2px solid #d5d5d5;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

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
    margin-bottom: 50px;
    color: #36e73d;
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
  font-weight: normal;
  font-size: 18px;
  line-height: 0.8;
  margin-bottom: 5px;
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

export const Buttons = styled.div`
  display: flex;
  gap: 10px;
`;

export const ButtonLogin = styled.button`
  width: 150px;
  height: 60px;
  background: #36e73d;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #828282;
  margin-top: 0px;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 50px;
  }
`;

export const GoogleLoginButton = styled.div`
  width: 150px;
  height: 60px;
  display: flex;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 50px;
  }
`;
