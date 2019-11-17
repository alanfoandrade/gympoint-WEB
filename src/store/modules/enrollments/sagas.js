import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { enrollmentListSuccess, enrollmentListFailure } from './actions';
import * as actionTypes from '~/store/modules/actionTypes';
import api from '~/services/api';

export function* getList() {
  try {
    const response = yield call(api.get, 'enrollments');
    yield put(enrollmentListSuccess(response.data));
  } catch (err) {
    toast.error('Ocorreu um erro, tente novamente');
    yield put(enrollmentListFailure);
  }
}

export function* createEnrollment({ payload }) {
  try {
    const { enrollment } = payload;
    yield call(api.post, 'enrollments', enrollment);
    toast.success('Matrícula criada com sucesso');
  } catch (err) {
    toast.error('Ocorreu um erro tentando criar esta matrícula');
  }
}

export default all([
  takeLatest(actionTypes.ENROLLMENT_LIST_REQUEST, getList),
  takeLatest(actionTypes.ENROLLMENT_CREATE_REQUEST, createEnrollment),
]);
