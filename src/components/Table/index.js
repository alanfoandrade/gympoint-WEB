import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import { studentDeleteRequest } from '~/store/modules/students/actions';
import { planDeleteRequest } from '~/store/modules/plans/actions';
import deleteAlert from '~/util/deleteAlert';

export default function Table({ array, type }) { //eslint-disable-line
  const dispatch = useDispatch();

  function handleDelete(id) {
    if (type === 'student') {
      deleteAlert.delete().then(result => {
        if (result.value) {
          dispatch(studentDeleteRequest(id));
        } else {
          deleteAlert.delete().then(result => {
            if (result.value) {
              dispatch(planDeleteRequest(id));
            }
          });
        }
      });
    }
  }

  return (
    <Container>
      <thead>
        <tr>
          <th>{type === 'student' ? 'NOME' : 'TÍTULO'}</th>
          <th>{type === 'student' ? 'E-MAIL' : 'DURAÇÃO'}</th>
          <th>{type === 'student' ? 'IDADE' : 'PREÇO'}</th>
        </tr>
      </thead>
      <tbody>
        {array.map(item => ( //eslint-disable-line
          <tr key={item.id}>
            <td>{item.name || item.title}</td>
            <td>{item.email || `${item.duration} meses`}</td>
            <td>{item.age || item.price}</td>
            <td>
              <div>
                <Link
                  to={
                    type === 'student'
                      ? `/edit-student/${item.id}`
                      : `edit-plan/${item.id}`
                  }
                >
                  editar
                </Link>

                <button
                  type="button"
                  id="delete"
                  onClick={() => handleDelete(item.id)}
                >
                  apagar
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Container>
  );
}
