

import React, { useState } from "react";
import { Container, Wrapper } from "./styles";
import CartItems from "../../components/CartItems";
import Checkout from "../../components/Checkout";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CheckCep from "../../components/CheckCep";

function CartResume() {
    const [freightData, setFreightData] = useState(null);
    const [cepData, setCepData] = useState(null);

    const updateFreightData = (data) => {
        setFreightData(data);
    };

    const updateCepData = (data) => {
        setCepData(data);
    }


    return (
        <Container>
            <Header />
            <CheckCep onFreightData={updateFreightData} onCepData={updateCepData} />
            <Wrapper>
                <CartItems />
                <Checkout freightData={freightData} cepData={cepData} />
            </Wrapper>
            <Footer />
        </Container>
    );
}

export default CartResume;
