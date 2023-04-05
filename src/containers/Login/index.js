import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

import api from "../../services/api"

import { Container, Label, Input, Button, ContainerItens, SignInLink, ErrorMessage } from "./styles"



function Login() {
    /* Validação do formulario */
    const schema = yup.object().shape({
        email: yup.string().email('Digite um e-mail válido')
            .required('O e-mail é obrigatório'),
        password: yup.string().required('A senha e obrigatória')
            .min(6, 'A senha deve ter pelo 6 digitos')
    })

    const { register, handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = async clientData => {
const response = await api.post('sessions', {
    email: clientData.email,
    password: clientData.password
})
console.log(response)
    }

    return (
        <Container>
            <ContainerItens>
                <h1>Login</h1>

                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Label>Email</Label>
                    <Input type="email" {...register('email')}
                        error={errors.email?.message} />
                    <ErrorMessage>{errors.email?.message}</ErrorMessage>

                    <Label>Senha</Label>
                    <Input type="password" {...register('password')}
                        error={errors.email?.message} />
                    <ErrorMessage>{errors.password?.message}</ErrorMessage>

                    <Button type="submit">Sing up</Button>
                </form>

                <SignInLink>
                    Não possui conta ? <a>SignUp</a>
                </SignInLink>
            </ContainerItens>
        </Container>
    )
}
export default Login