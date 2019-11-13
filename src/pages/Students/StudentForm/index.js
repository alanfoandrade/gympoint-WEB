import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { Container } from '~/components/Container/styles';
import { PageHeader } from '~/components/PageHeader/styles';
import { FormContainer } from './styles';

import {
  studentCreateRequest,
  studentUpdateRequest,
} from '~/store/modules/students/actions';
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

export default function StudentForm({ match }) {
  const { id } = match.params;
  const dispatch = useDispatch();
  const [student, setStudent] = useState({});

  useEffect(() => {
    async function getStudent() {
      const response = await api.get(`students/${parseInt(id, 10)}`);
      setStudent(response.data);
    }
    getStudent();
  }, [id]);
  async function handleSubmit(data) {
    if (id) {
      dispatch(studentUpdateRequest(data));
    } else {
      dispatch(studentCreateRequest(data));
    }
  }

  return (
    <Container>
      <FormContainer>
        <PageHeader>
          <strong>{id ? 'Edição de aluno' : 'Cadastro de aluno'}</strong>
          <aside>
            <Link to="/students">VOLTAR</Link>
            <button type="submit" form="StudentForm" value="Submit">
              SALVAR
            </button>
          </aside>
        </PageHeader>
        <Form
          schema={schema}
          initialData={student}
          onSubmit={handleSubmit}
          id="StudentForm"
        >
          <label htmlFor="name">
            <p>NOME COMPLETO</p>
            <Input name="name" id="name" placeholder="Fulano" />
          </label>

          <label htmlFor="email">
            <p>ENDEREÇO DE E-MAIL</p>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="exemplo@email.com"
            />
          </label>

          <div>
            <label htmlFor="age">
              <p>IDADE</p>
              <Input type="number" name="age" id="age" />
            </label>

            <label htmlFor="weight">
              <p>PESO (em kg)</p>
              <Input type="number" step=".001" name="weight" id="weight" />
            </label>

            <label htmlFor="height">
              <p>ALTURA (em metros)</p>
              <Input type="number" step=".001" name="height" id="height" />
            </label>
          </div>
        </Form>
      </FormContainer>
    </Container>
  );
}

StudentForm.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};
