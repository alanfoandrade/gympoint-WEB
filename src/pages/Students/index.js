import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';

import { Container } from '~/components/Container/styles';
import { Table } from '~/components/Table/styles';
import { PageHeader } from '~/components/PageHeader/styles';

import { studentListRequest } from '~/store/modules/students/actions';

export default function Students() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function loadStudents() {
      await dispatch(studentListRequest());
    }
    loadStudents();
  }, []);

  const students = useSelector(state => state.students.list);

  return (
    <>
      <PageHeader>
        <strong>Gerenciamento de alunos</strong>
        <aside>
          <Link to="/create-student">
            <MdAdd size={20} />
            CADASTRAR
          </Link>
        </aside>
      </PageHeader>
      <Container>
        <Table>
          <thead>
            <tr>
              <th>NOME</th>
              <th>E-MAIL</th>
              <th>IDADE</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.age}</td>
                <td>
                  <div>
                    <Link to={`/students/${student.id}`}>editar</Link>
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
