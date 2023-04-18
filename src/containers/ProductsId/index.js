import React, { useEffect, useState } from "react";
import api from "../../services/api";
//import OfferProducts from "../../components/OfferProducts";

import { Container } from './styles'
import { useParams } from "react-router-dom";



function ProductsId() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

   useEffect(() => {
    async function fetchProduct() {
      try {
        const { data } = await api.get(`${id}`);
        setProduct(data);
        console.log(data)
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
        <img src={product.url} alt={product.name} />
      </div>
    </Container>
  );
}

export default ProductsId;