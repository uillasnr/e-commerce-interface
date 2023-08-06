

import styled from 'styled-components';


export const ModalContainer = styled.div`
  position: fixed;   
  top: -245px;
  left: 216px;             /*    background: ; */
  width: 100%;
  height: 100%;

  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const ModalContent = styled.div`
  position: relative;
  background-color: #222222;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 150px;
  height: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid rgb(213, 213, 213);
  h3{
    color: #fff;
    font-weight: 500;
    font-size: 15px;
    margin-bottom: 5px;
  }
`;



export const Button = styled.button`
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  margin: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;