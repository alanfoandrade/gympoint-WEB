import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { helpListSuccess } from './actions';
import * as actionTypes from '~/store/modules/actionTypes';
import api from '~/services/api';
import history from '~/services/history';

export function* getList() {
  try {
    const response = yield call(api.get, 'help_orders');
    yield put(helpListSuccess(response.data));
  } catch (err) {
    toast.error('Houve um erro, tente novamente.');
  }
}

export function* answerOrder({ payload }) {
  try {
    const { data } = payload;
    yield call(api.post, `help-orders/${data.id}/answer`, {
      answer: data.answer,
    });
    toast.success('Pergunta respondida com sucesso!');
    history.push('/help');
  } catch (err) {
    toast.error('Ocorreu um erro tentando responder à esta pergunta');
  }
}

export default all([
  takeLatest(actionTypes.HELP_ORDER_LIST_REQUEST, getList),
  takeLatest(actionTypes.HELP_ORDER_ANSWER_REQUEST, answerOrder),
]);
