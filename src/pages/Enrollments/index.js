import React from 'react';
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';

/*
import { Container } from '~/components/Container/styles';
import { Table } from '~/components/Table/styles';
import { PageHeader } from '~/components/PageHeader/styles';
*/
import { Container, Table, PageHeader } from './styles';

// import api from '~/services/api';

export default function Enrollments() {
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
            <tr>
              <td>plano gold</td>
              <td>preço</td>
              <td>duraçao</td>
              <td>
                <div>
                  <Link to="/students/">editar</Link>
                  <button type="button" id="delete">
                    apagar
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
}
