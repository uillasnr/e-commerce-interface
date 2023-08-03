//tela dos dethales do produto

import React, { useEffect, useState } from "react";
import api from "../../services/api";
import formatCurrency from '../../utils/formarCurrency'
import { Link } from "react-router-dom";
import {
  Container, Img, ContainerImg, ImgOptions, ContainerItems,
  Button, ButtonCart, ContainerOffers, ContainerTex, Description
} from './styles'
import { useParams } from "react-router-dom";
import ReactImageMagnify from 'react-image-magnify';

import { Swiper, SwiperSlide } from 'swiper/react';
//import 'swiper/swiper.min.css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { useCart } from "../../hooks/CartContext";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FreteResult from "../../components/FreteResult";
import ProductRating from "../../components/ProductRating";




function ProductsId() {
  const { id } = useParams();
  const [product, setProduct] = useState({ quantity: 1 }); // Inicia a quantidade como 1
  const [currentImg, setCurrentImg] = useState(product.url_img1);
  const [selectedImage, setSelectedImage] = useState(null);
  const { putProductInCart, increaseProductQuantity, decreaseProductQuantity } = useCart() //função do carrinho de compras
  const [offers, setOffers] = useState([])
  const [totalRatings, setTotalRatings] = useState(0);


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
    const fetchProductRatings = async () => {
      try {
        const response = await api.get(`/products/${id}/ratings`);
        setTotalRatings(response.data.length);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProductRatings();

    const interval = setInterval(fetchProductRatings, 1000);
    return () => clearInterval(interval);
  }, [id]);


  useEffect(() => {
    async function loadOffers() {
      const { data } = await api.get('products')

      const onlyOffers = data.filter(product => product.offer)

      setOffers(onlyOffers)
    }
    loadOffers()
  }, [])



  function ImageClick(imgUrl) {
  //  console.log(imgUrl)
    setCurrentImg(imgUrl)
    setSelectedImage(imgUrl)
  }

  function handleDecrease() {
    if (product.quantity > 1) {
      const newQuantity = product.quantity - 1;
      setProduct({ ...product, quantity: newQuantity });
      decreaseProductQuantity(product.id);
    }
  }

  function handleIncrease() {
    const newQuantity = product.quantity + 1;
    setProduct({ ...product, quantity: newQuantity });
    increaseProductQuantity(product.id);
  }

  const breakpoints = {
    390: {
      slidesPerView: 3,
      spaceBetween: -50
    },
    445: {
      slidesPerView: 3,
      spaceBetween: -80
    },
    450: {
      slidesPerView: 3,
      spaceBetween: -80
    },
    480: {
      slidesPerView: 3,
      spaceBetween: -100
    },
    500: {
      slidesPerView: 2,
      spaceBetween: -80
    },
    550: {
      slidesPerView: 3,
      spaceBetween: 20
    },

    600: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    660: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    750: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    780: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    800: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    880: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    900: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    950: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    1000: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    1050: {
      slidesPerView: 5,
      spaceBetween: 20
    },
    1215: {
      slidesPerView: 6,
      spaceBetween: 20
    }
  }

  const LimitDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return `${description.slice(0, maxLength)}...`;
    }
    return description;
  }

  return (
    <Container>
      <Header />
      <h1>Produto</h1>

      <ContainerItems>
        <ContainerTex>

          <h2>{product.name}</h2>
          
            <div className='star'>
              {[1, 2, 3, 4, 5].map((value) => (
                <span key={value} style={{
                  color: value <= totalRatings ? '#44d62c' : '#fff',
                }}>★</span>
              ))}
               {' '} {totalRatings} Avaliações
            </div>

          <p>De: {formatCurrency(product.previou_price)}</p>
          <h3>{formatCurrency(product.price)}</h3>



          <div className="quantity-container">
            <button onClick={handleDecrease}>-</button>
            <h1><h6>{product.quantity}</h6></h1>
            <button onClick={handleIncrease}>+</button>
          </div>


          <Link style={{ textDecoration: 'none', }} to={`/carrinho`}>
            <Button
              onClick={() => putProductInCart(product)} >COMPRAR</Button>
          </Link>

          <ButtonCart >ADICIONAR AO CARINHO</ButtonCart>

       {/*    <FreteResult /> */}
        </ContainerTex>


        <ContainerImg>

          <ImgOptions> {/*  4 img */}
            {[ 
            product.url_img1,
            product.url_img2,
            product.url_img3,
            product.url_img4
          ].map((imgUrl, index) => (
            <Img
              key={imgUrl} src={imgUrl}
              alt={`Foto do produto${index + 1}`}
              isSelected={selectedImage === imgUrl || (selectedImage === null && index === 0)}
              onClick={() => ImageClick(imgUrl)}
            />
          ))}
           
          </ImgOptions>

          <div className='image-magnify' style={{ background: '#464646', padding: '15px', }}>
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: 'Foto do produto',
                  src: currentImg,
                  className: 'image-magnify',
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

      {/*     <line />

      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        breakpoints={breakpoints}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {offers &&
          offers.map(product => (

            <SwiperSlide key={product.id}  >
              <ContainerOffers>
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
            </SwiperSlide>
          ))}
      </Swiper>

      <line />
 */}

      <Description>Descrição do produto</Description>

      <h5>{product.description}</h5>

      <ProductRating productId={id} totalRatings={totalRatings} />
      <Footer />
    </Container>
  );
}

export default ProductsId;
