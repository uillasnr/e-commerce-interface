import React, { useEffect, useState } from 'react';
import { Container, Background, ContainerItems, Div } from './styles';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import api from '../../services/api';
import formatCurrency from '../../utils/formarCurrency';
import { Home } from '@mui/icons-material';
import Header from '../Header';
import Footer from '../Footer';

function CheckoutSuccess() {
  const [lastOrder, setLastOrder] = useState()


  useEffect(() => {
    async function loadLastOrder() {
      const response = await api.get('/orders/last')
      const data = response.data;
      console.log(response)
      setLastOrder(data)
    }
    loadLastOrder()

  }, [])


  return (
    <Background>
      <Header />
      <Div>
        {lastOrder && (
          <Container key={lastOrder._id} >
            <h1>Compra efetuada</h1>
            <h2>com sucesso</h2>

            <ContainerItems>
              {lastOrder.products.map((product) => (

                <div key={product.id}>
                  <img src={product.url_img1} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p>Quantidade: {product.quantity}</p>
                  <p>{formatCurrency(product.price)}</p>
                </div>
              ))}
            </ContainerItems>

            <h4>Valor total da compra: {formatCurrency(lastOrder.totalPrice)}</h4>
          </Container>
        )}
        <button>
          <Home style={{ color: '#44d62c', alignItems: 'center' }} />
          <Link style={{ color: '#44d62c', textDecoration: 'underline' }} to="/" >Continuar Comprando</Link>
        </button>
      </Div>
      <Footer />

    </Background>
  );

}
export default CheckoutSuccess
