import React from 'react';
import { Container, Background, ContainerItems, Div } from './styles';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Home } from '@mui/icons-material';

function CheckoutCancel() {
 


  return (
    <Background>
      <Div>
     
          <Container  >
            <h1>Compra não efetuada </h1>
          

            <ContainerItems>
        
            </ContainerItems>

           
          </Container>
    
        <button>
        <Home style={{ color: '#44d62c', alignItems: 'center'}}/>
          <Link style={{ color: '#44d62c', textDecoration: 'underline' }} to="/" >Continuar Comprando</Link>
        </button>
      </Div>

   
    </Background>
  );

}
export default CheckoutCancel
