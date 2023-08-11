import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from "react-toastify";
import { Link, useHistory } from "react-router-dom";
import { useUser } from '../../hooks/UserContext'
import ErrorMessage from "../../components/ErrorMessage"
import api from "../../services/api"
import { Container, Background, Label, Input, Buttons, ButtonLogin, ContainerItens, SignInLink, GoogleLoginButton } from "./styles"
import Header from "../../components/Header";
import Footer from "../../components/Footer";



function Login() {
  const history = useHistory()
  const [emailInputValue, setEmailInputValue] = useState('');
  const [passwordInputValue, setPasswordInputValue] = useState('');
  const { putUserData } = useUser()
 

  /* Validação do formulario */
  const schema = yup.object().shape({
    email: yup.string().email('Digite um e-mail válido')
      .required('O e-mail é obrigatório'),
    password: yup.string().required('A senha e obrigatória')
      .min(6, 'A senha deve ter pelo 6 digitos')
  })

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
    setTimeout(() => {
      if (data.admin) {      //se o usuario for admin ele vai direto para a tela de pedidos 
        history.push('/pedidos')
      }
      else {
        history.push('/carrinho')
      }
    }, 1000)


  }

 

  const handleEmailInputChange = e => {
    setEmailInputValue(e.target.value);
  };

  const handlePasswordInputChange = e => {
    setPasswordInputValue(e.target.value);
  };

 


  return (
    <Background>
      <Header />

      <Container>


        <ContainerItens>
          <h1>Realizar Login</h1>

          <form noValidate onSubmit={handleSubmit(onSubmit)}>

            <Label className={emailInputValue ? 'active' : ''}>Email</Label>

            <Input
              type="email"
              {...register('email')}
              className={emailInputValue ? 'active' : ''}
              onChange={handleEmailInputChange} />
            <ErrorMessage>{errors.email?.message}</ErrorMessage>


            <Label className={passwordInputValue ? 'active' : ''}>Senha</Label>

            <Input
              type="password"
              {...register('password')}
              className={passwordInputValue ? 'active' : ''}
              onChange={handlePasswordInputChange} />
            <ErrorMessage>{errors.password?.message}</ErrorMessage>

            <Buttons>
              <ButtonLogin type="submit">Entrar</ButtonLogin>
            
            </Buttons>
          </form>

          <SignInLink>
            Não possui conta ? {' '}
            <Link style={{ color: '#36e73d' }} to="/cadastro">Cadastre-se</Link>

          </SignInLink>
        </ContainerItens>
      </Container>
      <Footer />
    </Background>
  )
}
export default Login