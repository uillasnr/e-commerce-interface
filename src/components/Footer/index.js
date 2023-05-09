

import React from "react";
import {Container } from './styles'


function Footer() {
    return (
        <Container>
        <div className="footer">
        <div className="footer-section">


          <h4>Sobre </h4>
          <ul>
            <li><a href="#">Sobre nós</a></li>
            <li><a href="#">Trabalhe conosco</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </div>
        <div className="footer-section">



          <h4>Suporte</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Política de Trocas e Devoluções</a></li>
            <li><a href="#">Política de Privacidade</a></li>
          </ul>
        </div>
        <div className="footer-section">



          <h4>Dúvidas</h4>
          <ul>
            <li><a href="#">Como comprar</a></li>
            <li><a href="#">Prazos e entregas</a></li>
            <li><a href="#">Formas de Pagamento</a></li>
          </ul>
        </div>
        <div className="footer-section">



          <h4>Redes Sociais</h4>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
          </ul>
        </div>
      </div>
      </Container>
    );
  }
    
export default Footer
