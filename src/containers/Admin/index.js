import React from "react";

import { Container } from "./styles";
import Orders from "./Orders";

function Admin() {
    return (
        <Container>
            <h1>admin</h1>
            <Orders />
        </Container>
    )
}

export default Admin