import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { loginSuccess, loginFailure } from './actions';
import * as actionTypes from '~/store/modules/actionTypes';
import history from '~/services/history';
import api from '~/services/api';

export function* login({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;
    yield put(loginSuccess(token, user));
    history.push('/students');
  } catch (err) {
    toast.error('Falha na autenticaçao, verifique seus dados');
    yield put(loginFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;
  const { token } = payload.auth;
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function logout() {
  history.push('/');
}

export default all([
  takeLatest(actionTypes.AUTH_LOGIN_REQUEST, login),
  takeLatest(actionTypes.PERSIST_REHYDRATE, setToken),
  takeLatest(actionTypes.AUTH_LOGOUT, logout),
]);
