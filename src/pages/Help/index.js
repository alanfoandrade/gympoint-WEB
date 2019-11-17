import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, HelpOrdersTable } from './styles';
import { helpListRequest } from '~/store/modules/help/actions';

/* TODO: REACT MODAL
 */

export default function Help() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function loadHelp() {
      await dispatch(helpListRequest());
    }
    loadHelp();
  }, []);

  const help_orders = useSelector(state => state.help.list);
  return (
    <Container>
      <strong>Pedidos de auxílio</strong>
      <HelpOrdersTable>
        <thead>
          <tr>
            <th>ALUNO</th>
          </tr>
        </thead>
        <tbody>
          {help_orders.map(help_order => (
            <tr key={help_order.id}>
              <td>{help_order.student.name}</td>
              <td>
                <div>
                  <Link to="/answer-help">responder</Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </HelpOrdersTable>
    </Container>
  );
}
