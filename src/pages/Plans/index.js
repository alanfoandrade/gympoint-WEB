import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Container from '~/components/Container';
import { Table } from '~/components/Table/styles';
import PageHeader from '~/components/PageHeader';

import {
  planListRequest,
  planDeleteRequest,
} from '~/store/modules/plans/actions';
import deleteAlert from '~/util/deleteAlert';

export default function Plans() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function loadPlans() {
      await dispatch(planListRequest());
    }
    loadPlans();
  }, [dispatch]);

  function handleDelete(id) {
    deleteAlert.delete().then(result => {
      if (result.value) {
        dispatch(planDeleteRequest(id));
      }
    });
  }

  const plans = useSelector(state => state.plans.list);
  return (
    <>
      <PageHeader
        title="Gerenciamento de planos"
        action="CADASTRAR"
        createUri="/create-plan"
      />
      <Container>
        <Table>
          <thead>
            <tr>
              <th>TÍTULO</th>
              <th>DURAÇÃO</th>
              <th>VALOR p/MÊS</th>
            </tr>
          </thead>
          <tbody>
            {plans.map(plan => (
              <tr key={plan.id}>
                <td>{plan.title}</td>
                <td>
                  {plan.duration > 1
                    ? `${plan.duration} meses`
                    : `${plan.duration} mês`}
                </td>
                <td>R${plan.price},00</td>
                <td>
                  <div>
                    <Link to={`/edit-plan/${plan.id}`}>editar</Link>
                    <button
                      type="button"
                      id="delete"
                      onClick={() => handleDelete(plan.id)}
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
