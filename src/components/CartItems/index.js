//tela sobre os produtos do carrinho

import React from "react"
import { useCart } from "../../hooks/CartContext"
import formatCurrency from '../../utils/formarCurrency'
import { Container, Header, Body, EmptyCart } from "./styles"

function CartItems() {
    const { cartProducts, increaseProducts, decreaseProducts } = useCart()
    console.log(cartProducts)
    return (
        <Container>
            <Header>
                <p></p>
                <p>Itens</p>
                <p>Preço</p>
                <p style={{ paddingRight: 30 }}>Quantidade</p>
                <p>Total</p>
            </Header>
            {cartProducts && cartProducts.length > 0 ? (
                cartProducts.map(product => (
                    <Body key={product.id}>
                        <img src={product.url_img1} alt="" />
                        <p>{product.name}</p>
                        <p>{formatCurrency(product.price)}</p>

                        <div className="quantity-container">
                            <button onClick={() => decreaseProducts(product.id)}>-</button>
                            <h1><h6>{product.quantity}</h6></h1>
                            <button onClick={() => increaseProducts(product.id)}>+</button>
                        </div>
                        <p>{formatCurrency(product.quantity * product.price)}</p>
                    </Body>
                ))
            ) : (
                <EmptyCart>Carrinho vazio</EmptyCart>
            )}
        </Container>

    )
}
export default CartItems
