

import React, { useState } from "react";
import { Container, Wrapper } from "./styles";
import CartItems from "../../components/CartItems";
import Checkout from "../../components/Checkout";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CheckCep from "../../components/CheckCep";

function CartResume() {
    const [freightData, setFreightData] = useState(null);

    const updateFreightData = (data) => {
        setFreightData(data); // Receba os dados do frete através do callback
    };

    return (
        <Container>
            <Header />
            <CheckCep onFreightData={updateFreightData} />
            <Wrapper>
                <CartItems />
                <Checkout freightData={freightData} />
            </Wrapper>
            <Footer />
        </Container>
    );
}

export default CartResume;
