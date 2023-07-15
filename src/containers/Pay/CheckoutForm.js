/* import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useState } from "react";

export default function CheckoutForm({ handlePayment }) {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // O Stripe.js ainda não foi carregado.
      // Certifique-se de desabilitar o envio do formulário até que o Stripe.js tenha sido carregado.
      return;
    }

    setIsProcessing(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
      setMessage(error.message);
    } else {
      handlePayment(paymentMethod);
    }

    setIsProcessing(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <CardElement id="payment-element" />
      <button disabled={isProcessing || !stripe || !elements} id="submit">
        <span id="button-text">
          {isProcessing ? "Processando..." : "Pagar agora"}
        </span>
      </button>
      {/* Exibir mensagens de erro ou sucesso */
/*    {message && <div id="payment-message">{message}</div>}
 </form>
);
}
*/


import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import api from "../../services/api"
import { Container, FormContainer, CardElementContainer, Button, ErrorMessage } from "./styles"

const CheckoutForm = ({ orderData }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    setLoading(false);

    if (error) {
      setErrorMessage(error.message);
    } else {
      try {
        const response = await api.post('/api/payment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            paymentMethodId: paymentMethod.id,
            totalPrice: orderData.totalPrice,
          }),
        });

        if (response.ok) {
          console.log('Pagamento processado com sucesso!');
          // Redirecione o usuário para a página de sucesso ou exiba uma mensagem de sucesso
        } else {
          console.error('Ocorreu um erro durante o processamento do pagamento.');
          // Exiba uma mensagem de erro para o usuário
        }
      } catch (error) {
        console.error('Ocorreu um erro durante o processamento do pagamento:', error);
        // Exiba uma mensagem de erro para o usuário
      }
    }
  };

  return (
    <Container>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <CardElementContainer>
            <CardElement />
          </CardElementContainer>
          <Button type="submit" disabled={!stripe || loading}>
            {loading ? 'Processando...' : 'Pagar'}
          </Button>
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </form>
      </FormContainer>
    </Container>
  );
};

export default CheckoutForm;
