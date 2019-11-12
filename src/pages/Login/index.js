import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo from '~/assets/logo.svg';
import { loginRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function Login() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);
  function handleSubmit({ email, password }) {
    dispatch(loginRequest(email, password));
  }
  return (
    <>
      <img src={logo} alt="GymPoint" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <span>SEU E-MAIL</span>
        <Input name="email" type="email" placeholder="exemplo@email.com" />
        <span>SUA SENHA</span>
        <Input name="password" type="password" placeholder="********" />
        <button type="submit">{loading ? 'Carregando' : 'Acessar'} </button>
      </Form>
    </>
  );
}
