import React from "react";
//import api from "../../services/api";
import OfferProducts from "../../components/OfferProducts";
import Category from "../../components/Categorys";
import { Container, H1, Image } from './styles'
import banner from '../../assets/Banner.png'



function Home() {


    return (
        <Container>
         
         {/*     <Image src={banner} alt='banner'></Image>  */}
             <Category /> 
            <H1>Ofertas em destaque</H1>

            <OfferProducts />
        </Container>

    )
}
export default Home
