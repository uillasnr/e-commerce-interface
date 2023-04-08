import React from "react";
//import api from "../../services/api";
import OfferProducts from "../../components/OfferProducts";
import {Container } from './styles'


function Home() {

    /*     useEffect(() => {
            async function loadCategories() {
                const response = await api.get('products')
    
                console.log(response)
            }
            loadCategories()
        }, []) */

    return (
        <Container>
            <h1>Ofertas em destaque</h1>
            <OfferProducts />
        </Container>

    )
}
export default Home
