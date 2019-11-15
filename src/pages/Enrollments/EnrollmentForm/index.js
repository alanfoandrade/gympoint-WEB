import React, { useEffect, useState, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, useField } from '@rocketseat/unform';
import * as Yup from 'yup';
import AsyncSelect from 'react-select/async';

import { Container } from '~/components/Container/styles';
import { PageHeader } from '~/components/PageHeader/styles';
import { FormContainer } from './styles';
import { studentListRequest } from '~/store/modules/students/actions';

// import { Container } from './styles';

export default function EnrollmentForm() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function loadStudents() {
      await dispatch(studentListRequest());
    }
    loadStudents();
  }, [dispatch]);

  const students = useSelector(state => state.students.list);
  const newStudents = students.map(student => ({
    ...student,
    label: student.name,
    value: student.id,
  }));

  const [inputValue, setInputValue] = useState('');
  const [student, setStudent] = useState('');

  function filterStudents() {
    return newStudents.filter(i =>
      String(i.label)
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
    setInputValue(newValue);
    return inputValue;
  };

  function handleChange(option) {
    setStudent(option.label);
  }

  function handleSubmit(data) {
    console.tron.log(data);
    console.tron.log(student);
  }

  return (
    <Container>
      <FormContainer>
        <PageHeader>
          <strong>CRIAÇÃO DE MATRÍCULAS</strong>
          <aside>
            <Link to="/plans">VOLTAR</Link>
            <button type="submit" form="enrollmentForm" value="Submit">
              SALVAR
            </button>
          </aside>
        </PageHeader>
        <label htmlFor="title">
          <p>ALUNO</p>
          <AsyncSelect
            cacheOptions
            value={student}
            placeholder="Buscar aluno"
            defaultOptions
            loadOptions={loadOptions}
            onInputChange={handleInputChange}
            onChange={e => setStudent(e.target.value)}
          />
        </label>
        <Form id="enrollmentForm" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="plan">
              <p>PLANO</p>
              <Input
                type="number"
                name="plan"
                id="duration"
                placeholder="Selecionar plano"
              />
            </label>
            <label htmlFor="price">
              <p>DATA DE INÍCIO</p>
              <Input
                type="date"
                name="price"
                id="price"
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
