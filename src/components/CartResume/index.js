//Tela Resumo dos produtos do carrinho

import React, { useEffect, useState } from "react"

import { Container } from "./styles"
import { Button } from "../Button"
import formatCurrency from '../../utils/formarCurrency'
import { useCart } from "../../hooks/CartContext"

function CartResume() {
    const [finalPrice, setFinalPrice] = useState(0)
    const [deliveryTax] = useState(5)
    const { cartProducts } = useCart()


    useEffect(() => {
        const sumAllItems = cartProducts.reduce((acc, current) => {
            return current.price * current.quantity + acc
        }, 0)
        setFinalPrice(sumAllItems)
    }, [cartProducts, deliveryTax])

    return (
        <div>
            <Container>
                <div className="container-top">
                    <h2 className="title">Resumo do pedido</h2>
                    <p className="items">Itens</p>
                    <p className="items-price">{formatCurrency(finalPrice)}</p>
                    <p className="delivery-tax">Taxa de entrega</p>
                    <p className="delivery-tax-price">{formatCurrency(deliveryTax)}</p>
                </div>
                <div className="container-bottom">
                    <p>Total</p>
                    <p>{formatCurrency(finalPrice + deliveryTax)}</p>
                </div>
            </Container>
            <Button style={{ width: '100%', marginTop: 30, marginLeft: 0 }}>Finalizar Pedido</Button>
        </div>
    )
}
export default CartResume
