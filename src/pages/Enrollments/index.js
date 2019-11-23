import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from './styles';
import PageHeader from '~/components/PageHeader';
import Container from '~/components/Container';

import {
  enrollmentListRequest,
  enrollmentDeleteRequest,
} from '~/store/modules/enrollments/actions';
// import api from '~/services/api';
import deleteAlert from '~/util/deleteAlert';

export default function Enrollments() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function loadEnrollments() {
      await dispatch(enrollmentListRequest());
    }
    loadEnrollments();
  }, [dispatch]);

  const enrollments = useSelector(state => state.enrollments.list);

  function handleDelete(id) {
    deleteAlert.delete().then(result => {
      if (result.value) {
        dispatch(enrollmentDeleteRequest(id));
      }
    });
  }

  return (
    <>
      <PageHeader
        title="Gerenciamento de matrículas"
        action="CADASTRAR"
        createUri="/create-enrollment"
      />
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
                <td>
                  {enrollment.student
                    ? enrollment.student.name
                    : 'Usuário não existe mais'}
                </td>
                <td>{enrollment.plan.title}</td>
                <td>{enrollment.formatted_start}</td>
                <td>{enrollment.formatted_end}</td>
                <td>{enrollment.active === true ? 'Ativo' : 'Inativo'}</td>
                <td>
                  <div>
                    <Link to={`/edit-enrollment/${enrollment.id}`}>editar</Link>
                    <button
                      type="button"
                      id="delete"
                      onClick={() => handleDelete(enrollment.id)}
                    >
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
