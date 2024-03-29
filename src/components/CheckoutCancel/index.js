import React from 'react';
import { Container, Background, ContainerItems, Div } from './styles';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Home } from '@mui/icons-material';
import Header from '../Header';
import Footer from '../Footer';

function CheckoutCancel() {



  return (
    <Background>
      <Header />
      <Div>

        <Container  >
          <h1>Compra não efetuada </h1>
          <ContainerItems>

          </ContainerItems>


        </Container>

        <button>
          <Home style={{ color: '#44d62c', alignItems: 'center' }} />
          <Link style={{ color: '#44d62c', textDecoration: 'underline' }} to="/" >Continuar Comprando</Link>
        </button>
      </Div>

      <Footer />
    </Background>
  );

}
export default CheckoutCancel
