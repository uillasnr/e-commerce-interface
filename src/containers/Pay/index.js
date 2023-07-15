/* import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Container } from "./styles";
import api from "../../services/api";

import CheckoutForm from "./CheckoutForm";

function Pay() {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Faz uma chamada à API para obter a chave pública do Stripe e o clientSecret
    api.get("/config").then((response) => {
      const { publishableKey, clientSecret } = response.data;
      setStripePromise(loadStripe(publishableKey));
      setClientSecret(clientSecret);
    });
  }, []);

  const handlePayment = async () => {
    try {
      const response = await api.post("/payment", {
        // Inclua aqui os dados do pagamento, como valor, moeda, etc.

      });

      console.log(response);

      if (response.status === 200) {
        console.log("Pagamento processado com sucesso!");
      } else {
        console.log("Erro ao processar o pagamento.");
      }
    } catch (error) {
      console.log("Erro ao processar o pagamento:", error);
    }
  };

  return (
    <Container>
      <h1>React Stripe e o Elemento de Pagamento</h1>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm handlePayment={handlePayment} />
        </Elements>
      )}
    </Container>
  );
}

export default Pay;
 */
//////////teste 15/07

/* 
import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Container } from "./styles";
import CheckoutForm from "./CheckoutForm";

function PaymentPage({ orderData }) {
  const stripePromise = loadStripe("pk_test_51NTTWYJAKW5s1XT0ayD0l5cEG3fwcGVFbDokusYL8c2BNfrItGhMttWMKImY1YkZ3HtIu4aDTRTR3pHeXifmdpsT00on9p31bI");

  return (
    <Container>
      <Elements stripe={stripePromise}>
        <CheckoutForm orderData={orderData} />
      </Elements>
    </Container>
  );

}

export default PaymentPage; */


import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51NTTWYJAKW5s1XT0ayD0l5cEG3fwcGVFbDokusYL8c2BNfrItGhMttWMKImY1YkZ3HtIu4aDTRTR3pHeXifmdpsT00on9p31bI');

function PaymentPage() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
}

export default PaymentPage;

