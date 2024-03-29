import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
// import * as Yup from 'yup';
import Select from 'react-select';
import AsyncSelect from 'react-select/async';

import { Container } from '~/components/Container/styles';
import { PageHeader } from '~/components/PageHeader/styles';
import { FormContainer } from './styles';
import { studentListRequest } from '~/store/modules/students/actions';
import { planListRequest } from '~/store/modules/plans/actions';
import { enrollmentCreateRequest } from '~/store/modules/enrollments/actions';
// import api from '~/services/api';
// import { Container } from './styles';

export default function EnrollmentForm({ match }) {
  const dispatch = useDispatch();
  const { id } = match.params;
  const [inputValue, setInputValue] = useState('');
  const [student, setStudent] = useState('');
  const [plan, setPlan] = useState('');

  useEffect(() => {
    async function loadData() {
      await dispatch(studentListRequest());
      await dispatch(planListRequest());
    }
    loadData();
  }, [dispatch]);

  const students = useSelector(state => state.students.list);
  const plans = useSelector(state => state.plans.list);

  const teste = students.find(student => student.id === 1); // preciso pegar esse id hardcodado do enrollment, acho q eh melhor por dispatch e tals .. o mesmo valerá p/ o plano
  function filterStudents() {
    return students.filter(i =>
      String(i.name)
        .toLowerCase()
        .includes(String(inputValue).toLowerCase())
    );
  }

  const loadOptions = (inputValue, callback) => {
    setTimeout(() => {
      callback(filterStudents(inputValue));
    }, 1000);
  };

  const handleInputChange = newValue => {
    setTimeout(() => {
      const input = newValue.replace(/\W/g, '');
      setInputValue(input);
      return inputValue;
    }, 80);
  };

  function handleChange(option) {
    setStudent(option.id);
  }

  function handlePlanChange(option) {
    setPlan(option.id);
  }

  function handleSubmit(data) {
    dispatch(
      enrollmentCreateRequest({
        plan_id: plan,
        start_date: data.start_date,
        student_id: student,
      })
    );
  }

  return (
    <Container>
      <FormContainer>
        <PageHeader>
          <strong>
            {id ? 'Edição de matrículas' : 'Criação de matrículas'}
          </strong>
          <aside>
            <Link to="/enrollments">VOLTAR</Link>
            <button type="submit" form="enrollmentForm" value="Submit">
              SALVAR
            </button>
          </aside>
        </PageHeader>
        <label htmlFor="title">
          <p>ALUNO</p>
          <AsyncSelect
            isDisabled={!!id}
            defaultValue={teste}
            getOptionValue={option => option.id}
            getOptionLabel={option => option.name}
            cacheOptions
            placeholder="Buscar aluno"
            defaultOptions={students}
            loadOptions={loadOptions}
            onInputChange={handleInputChange}
            onChange={option => handleChange(option)}
          />
        </label>
        <label htmlFor="plan">
          <p>PLANO</p>
          <Select
            getOptionLabel={option => option.title}
            getOptionValue={option => option.id}
            placeholder="Selecionar plano"
            options={plans}
            defaultValue={plans[0]}
            onChange={option => handlePlanChange(option)}
          />
        </label>
        <Form id="enrollmentForm" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="price">
              <p>DATA DE INÍCIO</p>
              <Input
                type="date"
                name="start_date"
                id="start_date"
                placeholder="Escolha a data de início"
              />
            </label>
            <label htmlFor="end_date">
              <p>DATA DE TÉRMINO</p>
              <Input disabled type="date" name="end_date" id="end_date" />
            </label>
            <label htmlFor="total">
              <p>PREÇO TOTAL (em R$)</p>
              <Input disabled type="number" name="total" id="total" />
            </label>
          </div>
        </Form>
      </FormContainer>
    </Container>
  );
}

EnrollmentForm.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};
