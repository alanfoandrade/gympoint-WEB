import React, { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { Container, Modal, HelpOrdersTable } from './styles';
import {
  helpListRequest,
  helpAnswerRequest,
} from '~/store/modules/help/actions';

/* TODO: tirar a já respondida da lista assim q fechar o modal
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
  const [showModal, setShowModal] = useState(false);
  const [helpOrderModal, setHelpOrderModal] = useState({});

  function handleClose() {
    setShowModal(false);
  }

  function handleClick(help_order_id) {
    setHelpOrderModal(help_orders.find(help => help.id === help_order_id));
    setShowModal(true);
  }

  function handleSubmit(data) {
    // console.log(help_orders);
    dispatch(
      helpAnswerRequest({
        id: data.helpOrderId,
        answer: data.answer,
      })
    );
    setShowModal(false);
    /*
    const x = help_orders.find(
      help => Number(help.id) === Number(data.helpOrderId)
    );
    help_orders.splice(help_orders.indexOf(x), 1);
    */
  }

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
                  <button
                    type="button"
                    onClick={() => handleClick(help_order.id)}
                  >
                    Responder
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </HelpOrdersTable>
      <ReactModal
        isOpen={showModal}
        shouldCloseOnEsc
        onRequestClose={handleClose}
        style={{
          content: {
            top: '25%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            width: '450px',
            transform: 'translate(-50%, -10%)',
          },
        }}
        ariaHideApp={false}
      >
        <Modal>
          <strong>PERGUNTA DO ALUNO</strong>
          <p>{helpOrderModal.question}</p>
          <strong>SUA RESPOSTA</strong>
          <Form onSubmit={handleSubmit}>
            <Input type="hidden" name="helpOrderId" value={helpOrderModal.id} />
            <Input multiline name="answer" />
            <button type="submit">Responder aluno</button>
          </Form>
        </Modal>
      </ReactModal>
    </Container>
  );
}
