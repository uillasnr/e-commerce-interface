import styled from "styled-components";

export const Container = styled.div`
 margin-top:150px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
 /*  align-items: flex-start; */
  max-width: 400px;
  margin: 0 auto;
`;

export const CardElementContainer = styled.div`
  width: 100%;
  padding: 10px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

export const Button = styled.button`
  background-color: #0069d9;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
`;

export const ErrorMessage = styled.p`
  color: red;
  margin-top: 10px;
`;