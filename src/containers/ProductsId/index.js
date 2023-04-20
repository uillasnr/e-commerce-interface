import React, { useEffect, useState } from "react";
import api from "../../services/api";
//import OfferProducts from "../../components/OfferProducts";

import { Container,Image,Img, ContainerImg } from './styles'
import { useParams } from "react-router-dom";



function ProductsId() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

   useEffect(() => {
    async function fetchProduct() {
      try {
        const { data } = await api.get(`products/${id}`);
        setProduct(data);
        //console.log(data)
      } catch (error) {
        console.error(error);
      }
    }
    fetchProduct();
  }, [id]);
   

  return (
    <Container>
      <h1>Produto</h1>
      <div>
        <h2>{product.name}</h2>
        <h3>{product.description}</h3>
        <p>{product.price}</p>

        <ContainerImg> 
        <Image style={{width: 300}} src={product.url_img1} alt="Foto do produto" />
        <Img   src={product.url_img2} alt="Foto do produto1" />
        <Img   src={product.url_img3} alt="Foto do produto2"/>
        <Img   src={product.url_img4} alt="Foto do produto3"/>
        </ContainerImg>
      </div>
    </Container>
  );
}

export default ProductsId;

{/* <Img src={product.url_img2} alt="Foto do produto1" onClick={() => handleImageClick(product.url_img2)} /> */}