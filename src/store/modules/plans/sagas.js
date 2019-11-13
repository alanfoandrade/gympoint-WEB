import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import {
  planListSuccess,
  planListFailure,
  planCreateSuccess,
  planCreateFailure,
} from './actions';
import * as actionTypes from '~/store/modules/actionTypes';
import api from '~/services/api';

export function* getList() {
  try {
    const response = yield call(api.get, 'plans');
    yield put(planListSuccess(response.data));
  } catch (err) {
    toast.error('Ocorreu um erro, tente novamente.');
    yield put(planListFailure);
  }
}

export function* createPlan({ payload }) {
  try {
    const { plan } = payload;
    yield call(api.post, 'plans', plan);
    toast.success('Plano criado com sucesso');
    yield put(planCreateSuccess);
  } catch (err) {
    toast.error('Ocorreu um erro na criação deste plano');
    yield put(planCreateFailure);
  }
}

export default all([takeLatest(actionTypes.PLAN_LIST_REQUEST, getList)]);
