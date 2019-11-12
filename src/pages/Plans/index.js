import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';

import { Container } from '~/components/Container/styles';
import { Table } from '~/components/Table/styles';
import { PageHeader } from '~/components/PageHeader/styles';

import api from '~/services/api';

export default function Plans() {
  const [plans, setPlans] = useState([]);
  useEffect(() => {
    async function loadPlans() {
      const response = await api.get('plans');

      setPlans(response.data);
    }
    loadPlans();
  }, []);
  return (
    <>
      <PageHeader>
        <strong>Gerenciamento de planos</strong>
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
                    <Link to={`/students/${plan.id}`}>editar</Link>
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