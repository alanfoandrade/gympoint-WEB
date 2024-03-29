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

export function* updateStudent({ payload }) {
  try {
    const { data } = payload;
    yield call(api.put, 'students', data);
    toast.success('Usuário atualizado');
  } catch (err) {
    toast.error('Houve um problema ao tentar atualizar este usuário');
  }
}

export function* createStudent({ payload }) {
  try {
    const { data } = payload;
    yield call(api.post, 'students', data);
    toast.success('Usuário criado');
  } catch (err) {
    toast.error('Houve um problema criando este usuário');
  }
}

export function* deleteStudent({ payload }) {
  try {
    const { id } = payload;
    yield call(api.delete, `students/${id}`);
    toast.success(`Aluno ${id} deletado com sucesso`);
  } catch (err) {
    toast.error('Houve um erro tentando deletar este aluno');
  }
}

export default all([
  takeLatest(actionTypes.STUDENT_LIST_REQUEST, getList),
  takeLatest(actionTypes.STUDENT_CREATE_REQUEST, createStudent),
  takeLatest(actionTypes.STUDENT_UPDATE_REQUEST, updateStudent),
  takeLatest(actionTypes.STUDENT_DELETE_REQUEST, deleteStudent),
]);
