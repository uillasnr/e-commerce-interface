//tela sobre os produtos do carrinho

import React from "react"
import { useCart } from "../../hooks/CartContext"
import formatCurrency from '../../utils/formarCurrency'
import { Container, Header, Body, EmptyCart } from "./styles"

function CartItems() {
    const { cartProducts } = useCart()
    console.log(cartProducts)
    return (
        <Container>
            <Header>
                <p></p>
                <p>Itens</p>
                <p>Preço</p>
                <p style={{ paddingRight: 30}}>Quantidade</p>
                <p>Total</p>
            </Header>
            {cartProducts && cartProducts.length > 0 ? (
                cartProducts.map(product => (
                    <Body key={product.id}>
                        <img src={product.url_img1} alt="" />
                        <p>{product.name}</p>
                        <p>{formatCurrency(product.price)}</p>
                        <p>{product.quantity}</p>
                        <p>{product.quantity * product.price}</p>
                    </Body>
                ))
            ) : (
                <EmptyCart>Carrinho vazio</EmptyCart>
            )}
        </Container>

    )
}
export default CartItems
