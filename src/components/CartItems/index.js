//tela sobre os produtos do carrinho

import React from "react"
import { useCart } from "../../hooks/CartContext"
import formatCurrency from '../../utils/formarCurrency'
import { Container, Header, Body, EmptyCart } from "./styles"

function CartItems() {
    const { cartProducts, increaseProductQuantity, decreaseProductQuantity } = useCart()
    console.log(cartProducts)
    return (
        <Container>
            <Header>
                <p></p>
                <h3>Itens</h3>
                <h3>Preço</h3>
                <h3 style={{ paddingRight: 30 }}>Quantidade</h3>
                <h3>Total</h3>
            </Header>
            {cartProducts && cartProducts.length > 0 ? (
                cartProducts.map(product => (
                    <Body key={product.id}>
                        <img src={product.url_img1} alt="" />
                        <p>{product.name}</p>
                        <p>{formatCurrency(product.price)}</p>

                        <div className="quantity-container">
                            <button onClick={() => decreaseProductQuantity(product.id)}>-</button>
                            <h1><h6>{product.quantity}</h6></h1>
                            <button onClick={() => increaseProductQuantity(product.id)}>+</button>
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
