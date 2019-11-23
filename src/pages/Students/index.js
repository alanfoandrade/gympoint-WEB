import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from '~/components/Table';

import Container from '~/components/Container';
import PageHeader from '~/components/PageHeader';

import { studentListRequest } from '~/store/modules/students/actions';

export default function Students() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function loadStudents() {
      await dispatch(studentListRequest());
    }
    loadStudents();
  }, [dispatch]);

  const students = useSelector(state => state.students.list);

  return (
    <>
      <PageHeader
        title="Gerenciamento de alunos"
        action="CADASTRAR"
        createUri="/create-student"
      />
      <Container>
        <Table array={students} type="student" />
      </Container>
    </>
  );
}
