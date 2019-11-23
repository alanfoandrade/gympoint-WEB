import React, { useEffect, useState, useMemo } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { addMonths, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import ReactDatePicker from 'react-datepicker';
// import * as Yup from 'yup';
import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import { FormContainer, GridContainer } from './styles';

import Container from '~/components/Container';
import PageHeader from '~/components/PageHeader';

import { studentListRequest } from '~/store/modules/students/actions';
import { planListRequest } from '~/store/modules/plans/actions';
import {
  enrollmentCreateRequest,
  enrollmentUpdateRequest,
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
  const [enrollmentById, setEnrollment] = useState('');

  async function loadStudents(value) {
    const res = await api.get(`students?name=${value}`);
    return new Promise(resolve => {
      resolve(res.data);
    });
  }

  async function setEnrollmentById(id) {
    const res = await api.get(`enrollments/${id}`);
    setEnrollment(res.data);
  }

  useEffect(() => {
    async function loadData() {
      await dispatch(studentListRequest());
      await dispatch(planListRequest());
      loadStudents();
      if (id) {
        await dispatch(enrollmentListRequest());
        setEnrollmentById(id);
      }
    }
    loadData();
  }, [dispatch, id]);

  // const defaultStudents = useSelector(state => state.students.list);
  const plans = useSelector(state => state.plans.list);

  const enrollment = useSelector(state => state.enrollments.list).find(
    enrollment => enrollment.id === Number(id)
  );
  const total = useMemo(() => {
    if (plan) {
      return (plan.duration * plan.price).toFixed(2);
    }
    return 0;
  }, [plan]);

  const endDate = useMemo(() => {
    if (plan) {
      return format(
        addMonths(startDate, Number(plan.duration)),
        "d 'de' MMMM 'de' yyyy",
        { locale: pt }
      );
    }
    return 0;
  }, [plan, startDate]);

  function handlePlanChange(option) {
    setPlan(option);
  }

  function handleSubmit() {
    if (!id) {
      dispatch(
        enrollmentCreateRequest({
          student_id: selectedStudent.id,
          plan_id: plan.id,
          start_date: startDate,
        })
      );
    } else {
      // console.log(selectedEnrollment);
      dispatch(
        enrollmentUpdateRequest({
          id,
          student_id: enrollmentById.student.id,
          plan_id: plan.id,
          start_date: startDate,
        })
      );
    }
  }

  return (
    <Container>
      <FormContainer>
        <PageHeader
          title={id ? 'Edição de matrículas' : 'Criação de matrículas'}
          action="VOLTAR"
          createUri="/enrollments"
        />
        <button type="submit" form="enrollmentForm" value="Submit">
          SALVAR
        </button>

        <Form id="enrollmentForm" onSubmit={handleSubmit}>
          <label htmlFor="title">
            <p>ALUNO</p>
            <AsyncSelect
              isDisabled={!!id}
              defaultOptions
              value={enrollmentById.student}
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
                  defaultValue={enrollment ? enrollment.plan : plans[0]}
                  onChange={option => handlePlanChange(option)}
                />
              </label>
            </div>
            <div>
              <label htmlFor="start_date">
                <p>DATA DE INÍCIO</p>
                <ReactDatePicker
                  dateFormat="dd/MM/yyyy"
                  selected={startDate}
                  locale={pt}
                  onChange={date => setStartDate(date)}
                />
              </label>
            </div>
            <div>
              <label htmlFor="end_date">
                <p>DATA DE TÉRMINO</p>
                <Input
                  disabled
                  name="end_date"
                  id="end_date"
                  value={endDate || 'Data final'}
                />
              </label>
            </div>
            <div>
              <label htmlFor="total">
                <p>PREÇO TOTAL (em R$)</p>
                <Input
                  disabled
                  name="total"
                  id="total"
                  value={total || 'Valor final'}
                />
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
