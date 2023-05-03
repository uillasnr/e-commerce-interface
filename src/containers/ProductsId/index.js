//tela dos dethales do produto

import React, { useEffect, useState } from "react";
import api from "../../services/api";
//import OfferProducts from "../../components/OfferProducts";
import formatCurrency from '../../utils/formarCurrency'
//import { Button } from "../../components/Button";
//import PropTypes from 'prop-types'
import { Container, Image, Img, ContainerImg, ImgOptions, ContainerItems, Button, ButtonCart, ContainerTex, Description } from './styles'
import { useParams } from "react-router-dom";


import { useCart } from "../../hooks/CartContext";

function ProductsId(/*  { product } */) {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [currentImg, setCurrentImg] = useState(product.url_img1);
  const { putProductInCart, increaseProducts, decreaseProducts } = useCart() //função do carrinho de compras



  useEffect(() => {
    async function fetchProduct() {
      try {
        const { data } = await api.get(`products/${id}`);
        setProduct(data);
        setCurrentImg(data.url_img1)
        console.log(data)
      } catch (error) {
        console.error(error);
      }
    }
    fetchProduct();

  }, [id]);


  function ImageClick(imgUrl) {
    console.log(imgUrl)
    setCurrentImg(imgUrl)
  }

  return (
    <Container>
      <h1>Produto</h1>

      <ContainerItems>
        <ContainerTex>
          <h2>{product.name}</h2>
          <h3>{formatCurrency(product.price)}</h3>
          <p>À vista no PIX com até 5% OFF</p>

          <div className="quantity-container">
            <button onClick={() => decreaseProducts(product.id)}>-</button>
            <h1><h6>{product.quantity}</h6></h1>
            <button onClick={() => increaseProducts(product.id)}>+</button>
          </div>



          <Button style={{ width: '530', marginTop: 36, fontSize: 12 }}
            onClick={() => putProductInCart(product)}>COMPRAR</Button>

          <ButtonCart style={{ width: '530', marginTop: 36, fontSize: 12 }}>ADICIONAR AO CARINHO</ButtonCart>


        </ContainerTex>


        <ContainerImg>

          <ImgOptions>
            <Img src={product.url_img1} alt="Foto do produto1" onClick={() => ImageClick(product.url_img1)} />
            <Img src={product.url_img2} alt="Foto do produto2" onClick={() => ImageClick(product.url_img2)} />
            <Img src={product.url_img3} alt="Foto do produto3" onClick={() => ImageClick(product.url_img3)} />
            <Img src={product.url_img4} alt="Foto do produto4" onClick={() => ImageClick(product.url_img4)} />
          </ImgOptions>
          <Image src={currentImg} alt="Foto do produto" />

        </ContainerImg>
      </ContainerItems>


      <Description>Descrição do produto</Description>

   {/*    <line />
        <OfferProducts />

      <line />
       */}

      <h5>{product.description}</h5>


    </Container>
  );
}
/* ProductsId.propTypes = {
  product: PropTypes.object
} */

export default ProductsId;
