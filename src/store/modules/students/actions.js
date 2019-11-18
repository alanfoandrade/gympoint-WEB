import * as actionTypes from '~/store/modules/actionTypes';

export function studentListRequest(param) {
  return {
    type: actionTypes.STUDENT_LIST_REQUEST,
    payload: { param },
  };
}

export function studentListSuccess(list) {
  return {
    type: actionTypes.STUDENT_LIST_SUCCESS,
    payload: { list },
  };
}

export function studentListFailure() {
  return {
    type: actionTypes.STUDENT_LIST_FAILURE,
  };
}

export function studentUpdateRequest(data) {
  return {
    type: actionTypes.STUDENT_UPDATE_REQUEST,
    payload: { data },
  };
}

export function studentUpdateSuccess() {
  return {
    type: actionTypes.STUDENT_UPDATE_SUCCESS,
  };
}

export function studentUpdateFailure() {
  return {
    type: actionTypes.STUDENT_UPDATE_FAILURE,
  };
}

export function studentCreateRequest(data) {
  return {
    type: actionTypes.STUDENT_CREATE_REQUEST,
    payload: { data },
  };
}

export function studentCreateSuccess() {
  return {
    type: actionTypes.STUDENT_CREATE_SUCCESS,
  };
}

export function studentCreateFailure() {
  return {
    type: actionTypes.STUDENT_CREATE_FAILURE,
  };
}

export function studentDeleteRequest(id) {
  return {
    type: actionTypes.STUDENT_DELETE_REQUEST,
    payload: { id },
  };
}

export function studenttDeleteSuccess() {
  return {
    type: actionTypes.STUDENT_DELETE_SUCCESS,
  };
}

export function studentDeleteFailure() {
  return {
    type: actionTypes.STUDENT_DELETE_FAILURE,
  };
}
