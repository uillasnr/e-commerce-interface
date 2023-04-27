//tela sobre os produtos do carrinho

import React from "react"

import { Container, Wrapper } from "./styles"

import  CartItems  from "../../components/CartItems";
import CartResume from "../../components/CartResume";

function Cart() {


    return (
        <Container>

            <Wrapper>
                <CartItems />
                <CartResume />
            </Wrapper>
        </Container>

    )
}
export default Cart
