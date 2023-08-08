import React, { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { StyledMenu, StyledMenuItem, Container } from './styles'; // Importe os componentes estilizados

import Person from "../../assets/user.png"

function Modal({ isOpen, handleModalOpen, handleModalClose }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const { push } = useHistory();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    handleModalOpen();
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    handleModalClose();
  };

  return (
    <Container>
      <img src={Person} alt="logo-pessoa" onClick={handleClick} />

      <StyledMenu anchorEl={anchorEl} open={isOpen} onClose={handleCloseMenu}>
        <div className="Item">
          <StyledMenuItem onClick={() => push("/Login")}>Login</StyledMenuItem>
          <StyledMenuItem onClick={() => push("/")}>Ofertas</StyledMenuItem>
          <StyledMenuItem onClick={() => push("/compras")}>Minha Compra</StyledMenuItem>
        </div>
      </StyledMenu>
    </Container>
  );
}

export default Modal;
