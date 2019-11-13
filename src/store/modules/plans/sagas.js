import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { planListSuccess, planListFailure } from './actions';
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
  } catch (err) {
    toast.error('Ocorreu um erro na criação deste plano');
  }
}

export function* updatePlan({ payload }) {
  try {
    const { title, duration, price, id } = payload.data;
    yield call(api.put, `plans/${id}`, {
      title,
      duration,
      price,
    });
    toast.success('Plano atualizado');
  } catch (err) {
    toast.error('Houve um problema ao tentar atualizar este plano');
  }
}

export default all([
  takeLatest(actionTypes.PLAN_LIST_REQUEST, getList),
  takeLatest(actionTypes.PLAN_CREATE_REQUEST, createPlan),
  takeLatest(actionTypes.PLAN_UPDATE_REQUEST, updatePlan),
]);
