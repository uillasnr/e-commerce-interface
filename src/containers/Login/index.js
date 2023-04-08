import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from "react-toastify";
import { Link, useHistory } from "react-router-dom";
import { useUser } from '../../hooks/UserContext'
import api from "../../services/api"

import { Container, Label, Input, Button, ContainerItens, SignInLink, ErrorMessage } from "./styles"



function Login() {
  const history = useHistory()
  const { putUserData } = useUser()


  /* Validação do formulario */
  const schema = yup.object().shape({
    email: yup.string().email('Digite um e-mail válido')
      .required('O e-mail é obrigatório'),
    password: yup.string().required('A senha e obrigatória')
      .min(6, 'A senha deve ter pelo 6 digitos')
  })
  /* Configuração react-hook-form */
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })




  /* Acessando a api quando clicar no botão de submit */
  const onSubmit = async clientData => {

    const { data } = await toast.promise(
      api.post("sessions", {
        email: clientData.email,
        password: clientData.password
      }),
      { // Adicionando Toast Messages
        pending: 'Verificando seus dados',
        success: 'Seja bem-vindo(a)',
        error: 'Verifique seu e-mail e senha 🤯'
      }
    )
    putUserData(data)

          
       // Esperando 1s para o usuario ver a menssagem e ser redirecionado para a tela de home
              // setTimeout vai executar o que está dentro depois de um determinado tempo
  /*         setTimeout(() => {
            if (data.admin) {      //se o usuario for admin ele vai direto para a tela de pedidos 
              history.push('/pedidos')
            }
            else {
              history.push('/')
            }
          }, 1000)  */
          setTimeout(() =>{
            history.push('/')
          }, 1000)

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
          Não possui conta ? {' '}
          <Link style={{ color: 'blur' }} to="/cadastro">SignUp</Link>

        </SignInLink>
      </ContainerItens>
    </Container>
  )
}
export default Login