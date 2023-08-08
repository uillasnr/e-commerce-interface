import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from "react-toastify";
import { GoogleLogin } from "react-google-login";
import api from "../../services/api";
import ErrorMessage from "../../components/ErrorMessage";

import {
  Container,
  Label,
  Input,
  ButtonLogin,
  ContainerItens,
  SignInLink,
  Background
} from "./styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

function Register() {
  const history = useHistory()
  const [nameInputValue, setNameInputValue] = useState('');
  const [emailInputValue, setEmailInputValue] = useState('');
  const [passwordInputValue, setPasswordInputValue] = useState('');
  const [confirmPasswordInputValue, setConfirmPasswordInputValue] = useState('');

  /* Validação do formulário */
  const schema = yup.object().shape({
    name: yup.string().required('O seu nome é obrigatório'),
    email: yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório'),
    password: yup.string().required('A senha é obrigatória').min(6, 'A senha deve ter pelo menos 6 dígitos'),
    confirmPassword: yup.string().required('A senha é obrigatória').oneOf([yup.ref('password')], 'As senhas devem ser iguais')
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (formData) => {
    try {
      const { status } = await api.post("users", {
        name: formData.name,
        email: formData.email,
        password: formData.password
      },
        { validateStatus: () => true }
      );
      if (status === 200 || status === 201) {
        toast.success('Cadastro criado com sucesso!!');
        // Redirecionar para a tela de login após criar a conta com sucesso
        setTimeout(() => {
          history.push('/Login');
        }, 1000); // Adicionando setTimeout de 1 segundo
      } else if (status === 409) {
        toast.error('E-mail já cadastrado, faça login para continuar!');
      } else {
        throw new Error();
      }
    } catch (err) {
      toast.error('Serviço indisponível');
    }
  };


  const handleNameInputChange = (e) => {
    setNameInputValue(e.target.value);
  };

  const handleEmailInputChange = (e) => {
    setEmailInputValue(e.target.value);
  };

  const handlePasswordInputChange = (e) => {
    setPasswordInputValue(e.target.value);
  };

  const handleConfirmPasswordInputChange = (e) => {
    setConfirmPasswordInputValue(e.target.value);
  };

  return (
    <Background>
      <Header />

      <Container>
        <ContainerItens>
          <h1>Cadastre-se</h1>

          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Label className={nameInputValue ? 'active' : ''}>Nome</Label>
            <Input
              type="text"
              {...register('name')}
              className={nameInputValue ? 'active' : ''}
              onChange={handleNameInputChange}
            />
            <ErrorMessage>{errors.name?.message}</ErrorMessage>

            <Label className={emailInputValue ? 'active' : ''}>Email</Label>
            <Input
              type="email"
              {...register('email')}
              className={emailInputValue ? 'active' : ''}
              onChange={handleEmailInputChange}
            />
            <ErrorMessage>{errors.email?.message}</ErrorMessage>

            <Label className={passwordInputValue ? 'active' : ''}>Senha</Label>
            <Input
              type="password"
              {...register('password')}
              className={passwordInputValue ? 'active' : ''}
              onChange={handlePasswordInputChange}
            />
            <ErrorMessage>{errors.password?.message}</ErrorMessage>

            <Label className={confirmPasswordInputValue ? 'active' : ''}>Confirmar senha</Label>
            <Input
              type="password"
              {...register('confirmPassword')}
              className={confirmPasswordInputValue ? 'active' : ''}
              onChange={handleConfirmPasswordInputChange}
            />
            <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>


            <ButtonLogin type="submit">Cadastrar</ButtonLogin >

          </form>

          <SignInLink>
            Já tem cadastro?{' '}
            <Link style={{ color: '#36e73d' }} to="/login">ENTRAR</Link>
          </SignInLink>
        </ContainerItens>
      </Container>
      <Footer />
    </Background>
  );
}

export default Register;
