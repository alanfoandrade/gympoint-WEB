import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { helpListSuccess } from './actions';
import * as actionTypes from '~/store/modules/actionTypes';
import api from '~/services/api';

export function* getList() {
  try {
    const response = yield call(api.get, 'help_orders');
    yield put(helpListSuccess(response.data));
  } catch (err) {
    toast.error('Houve um erro, tente novamente.');
  }
}

export default all([takeLatest(actionTypes.HELP_ORDER_LIST_REQUEST, getList)]);
