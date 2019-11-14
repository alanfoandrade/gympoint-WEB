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

export default all([takeLatest(actionTypes.ENROLLMENT_LIST_REQUEST, getList)]);
