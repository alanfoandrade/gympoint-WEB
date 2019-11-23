import React, { useEffect, useState, useMemo } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import Container from '~/components/Container';
import PageHeader from '~/components/PageHeader';
import { FormContainer } from './styles';

import {
  planCreateRequest,
  planUpdateRequest,
} from '~/store/modules/plans/actions';
import api from '~/services/api';

const schema = Yup.object().shape({
  title: Yup.string().required('O título é necessário'),
  duration: Yup.number()
    .required('A duração é obrigatória')
    .positive('Não é possível inserir números negativos para tempo'),
  price: Yup.number()
    .required('O preço é obrigatório')
    .positive('Não é possível inserir números negativos no preço'),
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
  }, [id]);

  const total = useMemo(() => (duration * price).toFixed(2), [duration, price]);

  function handleSubmit() {
    if (id) {
      console.tron.log(title, duration, price);
      dispatch(
        planUpdateRequest({
          id,
          title,
          duration,
          price,
        })
      );
    } else {
      console.tron.log(title, duration, price);
      dispatch(
        planCreateRequest({
          title,
          duration,
          price,
        })
      );
    }
  }

  return (
    <Container>
      <FormContainer>
        <PageHeader
          title={id ? 'Edição de planos' : 'Cadastro de plano'}
          action="VOLTAR"
          createUri="/plans"
        />
        <Form id="planForm" schema={schema} onSubmit={handleSubmit}>
          <label htmlFor="title">
            <p>TÍTULO DO PLANO</p>
            <Input
              type="text"
              name="title"
              id="title"
              placeholder="Exemplo: gold"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </label>
          <div>
            <label htmlFor="duration">
              <p>DURAÇÃO (em meses)</p>
              <Input
                type="number"
                name="duration"
                id="duration"
                placeholder="Exemplo: 2"
                value={duration}
                onChange={e => setDuration(e.target.value)}
              />
            </label>
            <label htmlFor="price">
              <p>PREÇO MENSAL (em R$)</p>
              <Input
                type="number"
                step=".01"
                name="price"
                id="price"
                placeholder="Exemplo: 30.00"
                value={price}
                onChange={e => setPrice(e.target.value)}
              />
            </label>
            <label htmlFor="total">
              <p>PREÇO TOTAL (em R$)</p>
              <Input
                disabled
                type="number"
                name="total"
                id="total"
                value={total}
              />
            </label>
          </div>
          <button type="submit">ENVIAR</button>
        </Form>
      </FormContainer>
    </Container>
  );
}

PlanForm.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};
