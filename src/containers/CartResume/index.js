//tela sobre os produtos do Checkout

import React from "react"

import { Container, Wrapper } from "./styles"

import CartItems from "../../components/CartItems";
import Checkout from "../../components/Checkout";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CheckCep from "../../components/CheckCep";



function CartResume() {


    return (
        <Container>
            <Header />
            <CheckCep />
            <Wrapper>
                
                <CartItems />
                <Checkout />
            </Wrapper>
            <Footer />
        </Container>

    )
}
export default CartResume
