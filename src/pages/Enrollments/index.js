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
          <Link to="/create-enrollment">
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
                <td>{enrollment.student.name}</td>
                <td>{enrollment.plan.title}</td>
                <td>{enrollment.formatted_start}</td>
                <td>{enrollment.formatted_end}</td>
                <td>{enrollment.active === true ? 'Ativo' : 'Inativo'}</td>
                <td>
                  <div>
                    <Link to={`/edit-enrollment/${enrollment.id}`}>editar</Link>
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
