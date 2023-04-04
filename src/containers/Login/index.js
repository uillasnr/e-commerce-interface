import React from "react";

import { Container, Label, Input, Button,ContainerItens } from "./styles"



function Login() {



    return (
        <Container>
            <ContainerItens>
                <Label>Email</Label>
                <Input></Input>

                <Label>Senha</Label>
                <Input></Input>

                <Button>Sing up</Button>
            </ContainerItens>
        </Container>
    )
}
export default Login