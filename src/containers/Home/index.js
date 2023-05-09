import React from "react";
import OfferProducts from "../../components/OfferProducts";
import Category from "../../components/Categorys";
import { Container, H1 } from './styles'




function Home() {


    return (
        <Container>
             <Category /> 
            <H1>Ofertas em destaque</H1>
            <OfferProducts />
        </Container>

    )
}
export default Home
