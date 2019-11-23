import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import { studentDeleteRequest } from '~/store/modules/students/actions';
import deleteAlert from '~/util/deleteAlert';

export default function Table({ name, email, age, id }) { //eslint-disable-line
  const dispatch = useDispatch();

  function handleDelete(id) {
    deleteAlert.delete().then(result => {
      if (result.value) {
        dispatch(studentDeleteRequest(id));
      }
    });
  }

  /*

  N TA FUNCIONANDO PQ SE EU MAPEAR ISSO EU ESTARIA GERANDO MIL TABELAS AO INVES DE GERAR SO OS USUARIOS DENTRO DE UMA TABELA ENTÃO PRECISO DE ALGO COMO TABLECONTENT DENTRO DA TABLE
  */
  // console.log(name, email, age, id);
  return (
    <Container>
      <thead>
        <tr>
          <th>NOME</th>
          <th>E-MAIL</th>
          <th>IDADE</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{name}</td>
          <td>{email}</td>
          <td>{age}</td>
          <td>
            <div>
              <Link to={`/edit-student/${id}`}>editar</Link>

              <button
                type="button"
                id="delete"
                onClick={() => handleDelete(id)}
              >
                apagar
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </Container>
  );
}
