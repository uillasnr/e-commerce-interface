import React from "react";

import { Container } from "./styles";
import Orders from "./Orders";
import SlideMenuAdmin from "../../components/SlideMenuAdmin";

function Admin() {
    return (
        <Container>
           
            <SlideMenuAdmin />
            <Orders />
        </Container>
    )
}

export default Admin