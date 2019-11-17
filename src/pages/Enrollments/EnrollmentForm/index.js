import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import DatePicker from 'react-datepicker';
// import * as Yup from 'yup';
import Select from 'react-select';
import AsyncSelect from 'react-select/async';

import { Container } from '~/components/Container/styles';
import { PageHeader } from '~/components/PageHeader/styles';
import { FormContainer, GridContainer } from './styles';
import { studentListRequest } from '~/store/modules/students/actions';
import { planListRequest } from '~/store/modules/plans/actions';
import {
  enrollmentCreateRequest,
  enrollmentListRequest,
} from '~/store/modules/enrollments/actions';
import api from '~/services/api';
// import { Container } from './styles';

export default function EnrollmentForm({ match }) {
  const dispatch = useDispatch();
  const { id } = match.params;
  const [plan, setPlan] = useState('');
  const [selectedStudent, setSelectedStudent] = useState({});
  const [startDate, setStartDate] = useState(new Date());

  async function loadStudents(value) {
    const res = await api.get(`students?name=${value}`);
    return new Promise(resolve => {
      resolve(res.data);
    });
  }

  useEffect(() => {
    async function loadData() {
      await dispatch(studentListRequest());
      await dispatch(planListRequest());
      loadStudents();
      if (id) {
        await dispatch(enrollmentListRequest());
      }
    }
    loadData();
  }, [dispatch, id]);

  /*
  const enrollment = useSelector(state => state.enrollments.list).find(
    enrollment => enrollment.id === Number(id)
  );
  */

  /*    TODO: IF (ID) PUT ENROLLMENT.STUDENT.NAME ASYNCSELECTOR'S DEFAULT VALUE xDDDD 
        CREATE USEMEMO FOR THE VALUE + DATE ZZZZZZZZZZZZZZ
  */
  const defaultStudents = useSelector(state => state.students.list);
  const plans = useSelector(state => state.plans.list);
  function handlePlanChange(option) {
    setPlan(option.id);
  }

  function handleSubmit() {
    if (!id) {
      dispatch(
        enrollmentCreateRequest({
          student_id: selectedStudent.id,
          plan_id: plan,
          start_date: startDate,
        })
      );
    } else {
      // console.log(selectedEnrollment);
    }
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

        <Form id="enrollmentForm" onSubmit={handleSubmit}>
          <label htmlFor="title">
            <p>ALUNO</p>
            <AsyncSelect
              isDisabled={!!id}
              defaultOptions={defaultStudents}
              defaultValue={id ? 'x' : 'y'}
              getOptionValue={option => option.id}
              getOptionLabel={option => option.name}
              cacheOptions
              placeholder="Buscar aluno"
              loadOptions={loadStudents}
              onChange={e => setSelectedStudent(e)}
            />
          </label>
          <GridContainer>
            <div id="plansSelect">
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
            </div>
            <div>
              <label htmlFor="start_date">
                <p>DATA DE INÍCIO</p>
                <DatePicker
                  dateFormat="dd/MM/yyyy"
                  selected={startDate}
                  onChange={date => setStartDate(date)}
                />
              </label>
            </div>
            <div>
              <label htmlFor="end_date">
                <p>DATA DE TÉRMINO</p>
                <Input disabled type="date" name="end_date" id="end_date" />
              </label>
            </div>
            <div>
              <label htmlFor="total">
                <p>PREÇO TOTAL (em R$)</p>
                <Input disabled type="number" name="total" id="total" />
              </label>
            </div>
          </GridContainer>
        </Form>
      </FormContainer>
    </Container>
  );
}

EnrollmentForm.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};
