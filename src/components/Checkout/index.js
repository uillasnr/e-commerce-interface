//Total do pedido do checkout
import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import { Button } from "../Button";
import formatCurrency from '../../utils/formarCurrency';
import api from "../../services/api";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { useCart } from "../../hooks/CartContext";




function Checkout({ freightData}) {
    const [finalPrice, setFinalPrice] = useState(0);
    const [freightValue, setFreightValue] = useState(0);
    const { cartProducts, clearCart } = useCart();
    const history = useHistory();



    const clearCartOnSuccess = () => {
        // Deleta os itens do carrinho
        clearCart();

        // Redireciona o usuário para a página de sucesso ou qualquer outra página desejada
        history.push("/sucesso");
    };

    // Atualiza o preço final sempre que as informações do carrinho forem alteradas
    useEffect(() => {
        const sumAllItems = cartProducts.reduce((acc, current) => {
            return current.price * current.quantity + acc;
        }, 0);
        setFinalPrice(sumAllItems);
    }, [cartProducts, freightValue]);


    // Envia o pedido para a API
    const submitOrder = async () => {
        const order = cartProducts.map(product => {
            return { id: product.id, quantity: product.quantity, };
        });

        try {
            toast.success("Faça o pagamento do seu pedido...");

            const payload = {
                products: order,
                freightValu: freightValueAsNumber, // Adiciona o valor do frete ao payload
               /*  cepData: cepData, */ // Add the CEP data to the payload
            };
console.log(payload)
            // Envia o pedido para a API e aguarda a resposta
            const response = await api.post('orders', payload);
            console.log(response)
            // Obtém a URL do checkout da resposta da API e redireciona o usuário
            if (response.data && response.data.url) {
                const checkoutUrl = response.data.url;


                // Redireciona o usuário para a tela de checkout após um pequeno atraso
                setTimeout(() => {
                    window.location.href = checkoutUrl;
      //              console.log(checkoutUrl)
      //              clearCartOnSuccess(); // Chama a função para deletar os itens do carrinho
               }, 2000)

            } else {
                throw new Error("A resposta da API não possui uma URL de checkout válida.");
            }
        } catch (error) {
            //    console.error(error);
            toast.error("Falha ao tentar realizar o seu pedido, tente novamente!");
        }
    };


    // Atualiza o valor do frete ao obter o valor de freightData
    const freightValueAsNumber = freightData && freightData[0]?.Valor
        ? parseFloat(freightData[0].Valor.replace(",", "."))
        : 0;



    return (
        <div>
            <Container>
                <div className="container-top">
                    <h2 className="title">Resumo do pedido</h2>
                    <p className="items">Itens</p>
                    <p className="items-price">{formatCurrency(finalPrice)}</p>
                    <p className="delivery-tax">Frete</p>
                    <p className="delivery-tax-price">{formatCurrency(freightValueAsNumber)}</p>
                </div>
                <div className="container-bottom">
                    <p>Total</p>
                    <p>{formatCurrency(finalPrice + freightValueAsNumber)}</p>
                </div>
            </Container>

            <Button style={{ width: "80%", marginTop: 30, marginLeft: 30 }} onClick={submitOrder}>
                Finalizar Pedido
            </Button>
        </div>
    );
}

export default Checkout;
