import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { studentListSuccess, studentListFailure } from './actions';
import * as actionTypes from '~/store/modules/actionTypes';
import api from '~/services/api';

export function* getList({ payload }) {
  try {
    const { param } = payload;
    const response = yield call(api.get, 'students', {
      params: { q: param },
    });

    yield put(studentListSuccess(response.data));
  } catch (err) {
    toast.error('Ocorreu um erro, tente novamente mais tarde.');
    yield put(studentListFailure);
  }
}

export default all([takeLatest(actionTypes.STUDENT_LIST_REQUEST, getList)]);
