//Tela Resumo dos produtos do carrinho

import React, { useEffect, useState } from "react"

import { Container } from "./styles"
import { Button } from "../Button"
import formatCurrency from '../../utils/formarCurrency'
import { useCart } from "../../hooks/CartContext"
import api from "../../services/api"
import { toast } from "react-toastify"
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom"



function CartResume() {
    const [finalPrice, setFinalPrice] = useState(0)
    const [deliveryTax] = useState(5)
    const { cartProducts } = useCart()  // Informações do carrinho
    const history = useHistory()

    //para armazenar os dados do pedido
    const [orderData, setOrderData] = useState(null);




    // Sempre que as informações do carrinho forem alteradas, será somado todos os produtos do carrinho para ter o preço final
    useEffect(() => {
        const sumAllItems = cartProducts.reduce((acc, current) => {
            return current.price * current.quantity + acc
        }, 0)
        setFinalPrice(sumAllItems)
    }, [cartProducts, deliveryTax])



    // Enviando pedidos para a API
    const submitOrder = async () => {
        const order = cartProducts.map(product => {
            return { id: product.id, quantity: product.quantity }
        })


        //teste de envio  para Pagamentos
        const { data } = await api.post('orders', { products: order })
        //Enviar o pedido para a API e armazenar a resposta em orderData
        setOrderData(data);



        await toast.promise(api.post('orders', { products: order }), {
            pending: 'Realizando seu pedido...',
            success: 'Pedido realizado com sucesso!',
            error: 'Falha ao tentar realizar o seu pedido, tente novamente!'
        })
        console.log(data)   ///eu preciso pegar tudo que vem de ordem e mandar para pagamentos

       /*  history.push("/checkout"); */
    }

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
            <Button style={{ width: '80%', marginTop: 30, marginLeft: 30 }} onClick={submitOrder}>Finalizar Pedido</Button>


            <Link to={`/payment`} >
                <button> pagamento </button>
                
            </Link>

        </div>
    )
}
export default CartResume
