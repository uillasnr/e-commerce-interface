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
        const { data } = await api.get(`products`);
        console.log(data.product.id)
        setProduct(data);
      }
      fetchProduct();
    }, [id]);
  

    return (
        <Container>

            <h1> Produto</h1>

            <div>{product.id}</div>
            <div>{product.name}</div>
           
        </Container>

    )
} 
export default ProductsId