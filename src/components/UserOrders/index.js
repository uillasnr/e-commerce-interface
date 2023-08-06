import React, { useEffect, useState } from "react";
import formatDate from '../../utils/formatDate'
import formatCurrency from '../../utils/formarCurrency';
import { Container, Card, ProductItens } from "./styles"
import Header from "../Header";
import Footer from "../Footer";
import api from "../../services/api";


export function UserOrders() {
    const [userOrders, setUserOrders] = useState([]);

    useEffect(() => {
        async function loadUserOrder() {
            try {
                const response = await api.get('/compras');
                setUserOrders(response.data.orders);
                console.log(response)
            } catch (error) {
                console.error('Failed to get user orders:', error);
            }
        }
        loadUserOrder();
    }, []);

    return (
        <Container>
            <Header />

            <h1>Informações da compra</h1>

            {userOrders.map((order, index) => (
                <div key={index}>
                    <Card>
                        <div className="status">
                            <h3>Detalhe da compra</h3>
                            <span>Status: {order.status}</span>
                        </div>
                        {order.address.freteData && (
                            <span>O produto chega em até {order.address.freteData[0].PrazoEntrega} dias úteis.</span>
                        )}

                        <ProductItens>
                            {order.products.map((product) => (
                                <li key={product.id}>
                                    <img className="imgProduct" src={product.url_img1} alt="product" />
                                    <h4>{product.name}</h4>
                                    <p>Valor: {formatCurrency(product.price)}</p>
                                    <p>Quantidade: {product.quantity}</p>
                                </li>
                            ))}


                            {order.address && (
                                <div className="address">
                                    <h3>Local de Entrega</h3>
                                    <p>Endereço: {order.address.address}</p>
                                    <p>CEP: {order.address.cep}</p>
                                    <p>Cidade: {order.address.city}</p>
                                    <p>Bairro: {order.address.neighborhood}</p>
                                    <p>Número: {order.address.number}</p>
                                    <p>UF: {order.address.uf}</p>
                                </div>
                            )}



                        </ProductItens>
                        <div class="Total">
                            <p>Valor total da compra: {formatCurrency(order.totalPrice)}</p>
                            <p>Data da compra: {formatDate(order.address.createdAt)}</p>
                        </div>
                    </Card>
                </div>
            ))}

            <Footer />
        </Container>
    );
}



export default UserOrders;
