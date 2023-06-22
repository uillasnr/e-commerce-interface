//tela dos dethales do produto

import React, { useEffect, useState } from "react";
import api from "../../services/api";
//import OfferProducts from "../../components/OfferProducts";
import formatCurrency from '../../utils/formarCurrency'
//import { Button } from "../../components/Button";
//import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import {
  Container, Img, ContainerImg, ImgOptions, ContainerItems,
  Button, ButtonCart, ContainerOffers, ContainerTex, Description
} from './styles'
import { useParams } from "react-router-dom";
import ReactImageMagnify from 'react-image-magnify';
import Carousel from 'react-elastic-carousel';

import { useCart } from "../../hooks/CartContext";

function ProductsId(/*  { product } */) {
  const { id } = useParams();
  const [product, setProduct] = useState({ quantity: 1 }); // Inicia a quantidade como 1
  const [currentImg, setCurrentImg] = useState(product.url_img1);
  const { putProductInCart, increaseProducts, decreaseProducts } = useCart() //função do carrinho de compras
  const [offers, setOffers] = useState([])


  useEffect(() => {
    async function fetchProduct() {
      try {
        const { data } = await api.get(`products/${id}`);
        setProduct({ ...data, quantity: 1 }); // Atualiza o produto recebido da API e define a quantidade como 1
        setCurrentImg(data.url_img1)
        console.log(data)
      } catch (error) {
        console.error(error);
      }
    }
    fetchProduct();

  }, [id]);


  useEffect(() => {
    async function loadOffers() {
      const { data } = await api.get('products')

      const onlyOffers = data.filter(product => product.offer)
      console.log(data)
      setOffers(onlyOffers)
    }
    loadOffers()
  }, [])



  function ImageClick(imgUrl) {
    console.log(imgUrl)
    setCurrentImg(imgUrl)
  }

  function handleDecrease() {
    if (product.quantity > 1) {
      const newQuantity = product.quantity - 1;
      setProduct({ ...product, quantity: newQuantity });
      increaseProducts(product.id, -1); // diminui a quantidade do produto no carrinho
    }
  }

  function handleIncrease() {
    const newQuantity = product.quantity + 1;
    setProduct({ ...product, quantity: newQuantity });
    increaseProducts(product.id, 1); // aumenta a quantidade do produto no carrinho
  }


/*   { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 } */
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 4 },
  { width: 768, itemsToShow: 5 },
/*   { width: 1175, itemsToShow: 5 },
  { width: 1200, itemsToShow: 6 } */
  ]

  const LimitDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return `${description.slice(0, maxLength)}...`;
    }
    return description;
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
            <button onClick={() => handleDecrease(product.id)}>-</button>
            <h1><h6>{product.quantity}</h6></h1>
            <button onClick={() => handleIncrease(product.id)}>+</button>
          </div>


          <Link style={{ textDecoration: 'none', }} to={`/carrinho`}>
            <Button style={{ width: '530', marginTop: 36, fontSize: 12 }}
              onClick={() => putProductInCart(product)} >COMPRAR</Button>
          </Link>

          <ButtonCart style={{ width: '530', marginTop: 36, fontSize: 12 }}>ADICIONAR AO CARINHO</ButtonCart>


        </ContainerTex>


        <ContainerImg>

          <ImgOptions>
            <Img src={product.url_img1} alt="Foto do produto1" onClick={() => ImageClick(product.url_img1)} />
            <Img src={product.url_img2} alt="Foto do produto2" onClick={() => ImageClick(product.url_img2)} />
            <Img src={product.url_img3} alt="Foto do produto3" onClick={() => ImageClick(product.url_img3)} />
            <Img src={product.url_img4} alt="Foto do produto4" onClick={() => ImageClick(product.url_img4)} />
          </ImgOptions>
          {/*   <Image src={currentImg} alt="Foto do produto" /> */}
          <div className='image-magnify' style={{ background: '#464646', padding: '15px', }}>
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: 'Foto do produto',
                  src: currentImg,
                  className: 'image-magnify', // Adicione a classe CSS aqui
                  isFluidWidth: true,
                },
                largeImage: {
                  src: currentImg,
                  width: 1200,
                  height: 1200,
                },
                enlargedImageContainerDimensions: {
                  width: '150%',
                  height: '150%',
                },
                enlargedImageContainerClassName: 'zoomed-image-container',
                enlargedImageContainerStyle: {
                  zoom: '1.0', // Ajuste o valor do zoom conforme necessário
                },
              }}
            />
          </div>

        </ContainerImg>



      </ContainerItems>

      <line />

      <Carousel style={{ marginTop: 30, padding: 10 }} itemsToShow={5} breakPoints={breakPoints}>
        {offers &&
          offers.map(product => (

            <ContainerOffers key={product.id}  >
               <h6><h4>OFF</h4></h6>
              <div>
                <img src={product.url_img1} alt="foto do Produto" />
              </div>
              <h2>{product.name}</h2>
              <h3>{LimitDescription(product.description, 50)}</h3>
              <p>{formatCurrency(product.price)}</p>

              <Link style={{ textDecoration: 'none', }} to={`/detalhes/${product.id}`}>
              <button>COMPRAR</button>
              </Link>

            </ContainerOffers>
          ))}
      </Carousel>

      <line />


      <Description>Descrição do produto</Description>

      <h5>{product.description}</h5>


    </Container>
  );
}
/* ProductsId.propTypes = {
  product: PropTypes.object
} */

export default ProductsId;
