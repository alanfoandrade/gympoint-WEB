import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';

import { Container } from '~/components/Container/styles';
import { Table } from '~/components/Table/styles';
import { PageHeader } from '~/components/PageHeader/styles';

import {
  studentListRequest,
  studentDeleteRequest,
} from '~/store/modules/students/actions';
import deleteAlert from '~/util/deleteAlert';

export default function Students() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function loadStudents() {
      await dispatch(studentListRequest());
    }
    loadStudents();
  }, [dispatch]);

  const students = useSelector(state => state.students.list);
  function handleDelete(id) {
    deleteAlert.delete().then(result => {
      if (result.value) {
        dispatch(studentDeleteRequest(id));
      }
    });
  }

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
                    <Link to={`/edit-student/${student.id}`}>editar</Link>

                    <button
                      type="button"
                      id="delete"
                      onClick={() => handleDelete(student.id)}
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
