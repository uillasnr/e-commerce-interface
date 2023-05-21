import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from "react-toastify";
import api from "../../services/api"
import  ErrorMessage  from "../../components/ErrorMessage"

import { Container, Label, Input, Button, ContainerItens, SignInLink } from "./styles"



function Register() {
    /* Validação do formulario */
    const schema = yup.object().shape({
        name: yup.string().required('O seu nome é obrigatório'),
        email: yup.string().email('Digite um e-mail válido')
            .required('O e-mail é obrigatório'),
        password: yup.string().required('A senha e obrigatória')
            .min(6, 'A senha deve ter pelo 6 digitos'),
        confirmPassword: yup.string().required('A senha e obrigatória')
            .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
    })

    const { register, handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = async clientData => {
     try {
      const { status } = await api.post("users", {
        name: clientData.name,
        email: clientData.email,
        password: clientData.password
      },
        { validateStatus: () => true }
      )

      if (status === 200 || status === 201) {
        toast.success('Cadastro criado com sucesso!!')
        //{
        // position: 'top-right'
        // autoClose: 2000,
        // hideProgressBar: false,
        // closeOnClick: true,
        // pauseOnHover: true,
        // draggable: true,
        // progress: undefined
        //}
      } else if (status === 409) {
        toast.error('E-mail ja cadastrado, faça login para continuar!')
        // {
        //position: 'top-right'
        // autoClose: 2000,
        // hideProgressBar: false,
        // closeOnClick: true,
        // pauseOnHover: true,
        // draggable: true,
        // progress: undefined
        //}
      } else {
        throw new Error()
      }
    } catch (err) {
      toast.error('Serviço indisponível')
    }
  }


    return (
        <Container>
            <ContainerItens>
                <h1>Cadastre-se</h1>

                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <Label>Nome</Label>
                    <Input type="text" {...register('name')}
                        error={errors.name?.message} />
                    <ErrorMessage>{errors.name?.message}</ErrorMessage>

                    <Label>Email</Label>
                    <Input type="email" {...register('email')}
                        error={errors.email?.message} />
                    <ErrorMessage>{errors.email?.message}</ErrorMessage>

                    <Label>Senha</Label>
                    <Input type="password" {...register('password')}
                        error={errors.email?.message} />
                    <ErrorMessage>{errors.password?.message}</ErrorMessage>

                    <Label>Confirmar senha</Label>
                    <Input type="password" {...register('confirmPassword')}
                        error={errors.confirmPassword?.message} />
                    <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

                    <Button type="submit">Sing up</Button>
                </form>

                <SignInLink>
                    já possui conta ? {''}
                    
                    <Link to='/login'>Sign In</Link>
                </SignInLink>
            </ContainerItens>
        </Container>
    )
}
export default Register