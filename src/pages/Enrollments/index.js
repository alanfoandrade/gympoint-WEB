import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from './styles';
import { PageHeader } from '~/components/PageHeader/styles';
import { Container } from '~/components/Container/styles';

import { enrollmentListRequest } from '~/store/modules/enrollments/actions';
// import api from '~/services/api';

export default function Enrollments() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function loadEnrollments() {
      await dispatch(enrollmentListRequest());
    }
    loadEnrollments();
  }, [dispatch]);

  const enrollments = useSelector(state => state.enrollments.list);
  console.tron.log(enrollments);
  return (
    <>
      <PageHeader>
        <strong>Gerenciamento de matrículas</strong>
        <aside>
          <Link to="/register-student">
            <MdAdd size={20} />
            CADASTRAR
          </Link>
        </aside>
      </PageHeader>
      <Container>
        <Table>
          <thead>
            <tr>
              <th>ALUNO</th>
              <th>PLANO</th>
              <th>INÍCIO</th>
              <th>TÉRMINO</th>
              <th>ATIVA</th>
            </tr>
          </thead>
          <tbody>
            {enrollments.map(enrollment => (
              <tr key={enrollment.id}>
                <td>{enrollment.student_id}</td>
                <td>{enrollment.plan_id}</td>
                <td>{enrollment.start_date}</td>
                <td>{enrollment.end_date}</td>
                <td>{enrollment.active === true ? 'Ativo' : 'Inativo'}</td>
                <td>
                  <div>
                    <Link to="/enrollments">editar</Link>
                    <button type="button" id="delete">
                      apagar
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}
