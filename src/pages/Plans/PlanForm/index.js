import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { Container } from '~/components/Container/styles';
import { PageHeader } from '~/components/PageHeader/styles';
import { FormContainer } from './styles';

import { planCreateRequest } from '~/store/modules/plans/actions';
import api from '~/services/api';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Informe um e-mail válido')
    .required('O e-mail é obrigatório'),
  age: Yup.number()
    .positive('Idade inválida')
    .required('A idade é obrigatória'),
  weight: Yup.number()
    .positive('Peso inválido')
    .required('O peso é obrigatório'),
  height: Yup.number()
    .positive('Altura inválida')
    .required('A altura é obrigatória'),
});

export default function PlanForm({ match }) {
  const { id } = match.params;
  const [duration, setDuration] = useState('');
  const [price, setPrice] = useState('');
  const [title, setTitle] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    async function getPlan() {
      const response = await api.get(`plans/${parseInt(id, 10)}`);
      setTitle(response.data.title);
      setPrice(response.data.price);
      setDuration(response.data.duration);
    }
    if (id) {
      getPlan();
    }
  }, []);

  const total = useMemo(() => (duration * price).toFixed(2), [
    duration,
    price,
    id,
  ]);

  function handleSubmit(plan) {
    if (id) {
      console.tron.log(id);
    } else {
      console.tron.log(plan);
      // dispatch(planCreateRequest(plan));
    }
  }

  return (
    <Container>
      <FormContainer>
        <PageHeader>
          <strong>{id ? 'Edição de planos' : 'Cadastro de plano'}</strong>
          <aside>
            <Link to="/plans">VOLTAR</Link>
            <button type="submit" form="planForm" value="Submit">
              SALVAR
            </button>
          </aside>
        </PageHeader>
        <Form id="planForm" onSubmit={handleSubmit}>
          <label htmlFor="title">
            <p>TÍTULO DO PLANO</p>
            <Input
              type="text"
              name="title"
              id="title"
              placeholder="Exemplo: gold"
            />
          </label>
        </Form>
      </FormContainer>
    </Container>
  );
}

PlanForm.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};
