import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from "react-toastify";
import { Link, useHistory } from "react-router-dom";
import { useUser } from '../../hooks/UserContext'
import ErrorMessage from "../../components/ErrorMessage"
import api from "../../services/api"
import { GoogleLogin } from "react-google-login";
import { Container, Label, Input, Buttons, ButtonLogin, ContainerItens, SignInLink, GoogleLoginButton } from "./styles"



function Login({ setShowDropdown }) {
  const history = useHistory()
  const [emailInputValue, setEmailInputValue] = useState('');
  const [passwordInputValue, setPasswordInputValue] = useState('');
  const { putUserData } = useUser()
  const containerRef = useRef();


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
    setTimeout(() => {
      if (data.admin) {      //se o usuario for admin ele vai direto para a tela de pedidos 
        history.push('/pedidos')
      }
      else {
        history.push('/')
      }
    }, 1000)


  }

  // Função de resposta do Google Login
  const responseGoogle = async (response) => {
    try {
      const { tokenId } = response; // Obtém o token de acesso do Google
      const { data } = await api.post("google-login", { tokenId }); // Envie o token de acesso para o backend

      // Armazene os dados do usuário retornado pelo backend ou faça o que for necessário
      putUserData(data);

      // Redirecione o usuário após o login
      if (data.admin) {
        history.push('/pedidos')
      } else {
        history.push('/')
      }
    } catch (error) {
      console.log(error);
      // Trate qualquer erro que ocorra durante a autenticação do Google
      // Exiba uma mensagem de erro ou execute outra ação apropriada
    }
  };


  const handleEmailInputChange = e => {
    setEmailInputValue(e.target.value);
  };

  const handlePasswordInputChange = e => {
    setPasswordInputValue(e.target.value);
  };

  //fechar o modal login
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    // Adiciona um event listener para fechar o modal ao clicar fora dele
    document.addEventListener("mousedown", handleClickOutside);
    // Remove o event listener quando o componente for desmontado
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowDropdown]);



  return (
    <Container>
      <button className='buttonLoginModal' onClick={() => setShowDropdown(false)} >X</button>
      <ContainerItens ref={containerRef}>
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
            <GoogleLoginButton>
              <GoogleLogin
                clientId="428538656949-utus73bqoa2dtn99n615gjk2ttbetcqv.apps.googleusercontent.com"
                buttonText="Login com Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle} 
                className="google-login-button"/>
            </GoogleLoginButton>
          </Buttons>
        </form>

        <SignInLink>
          Não possui conta ? {' '}
          <Link style={{ color: '#36e73d' }} to="/cadastro">Cadastre-se</Link>

        </SignInLink>
      </ContainerItens>
    </Container>
  )
}
export default Login