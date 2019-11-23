import * as actionTypes from '~/store/modules/actionTypes';

export function enrollmentListRequest() {
  return {
    type: actionTypes.ENROLLMENT_LIST_REQUEST,
  };
}

export function enrollmentListSuccess(list) {
  return {
    type: actionTypes.ENROLLMENT_LIST_SUCCESS,
    payload: { list },
  };
}

export function enrollmentListFailure() {
  return {
    type: actionTypes.ENROLLMENT_LIST_FAILURE,
  };
}

export function enrollmentCreateRequest(enrollment) {
  return {
    type: actionTypes.ENROLLMENT_CREATE_REQUEST,
    payload: { enrollment },
  };
}

export function enrollmentCreateSuccess() {
  return {
    type: actionTypes.ENROLLMENT_CREATE_SUCCESS,
  };
}

export function enrollmentCreateFailure() {
  return {
    type: actionTypes.ENROLLMENT_CREATE_FAILURE,
  };
}

export function enrollmentUpdateRequest(data) {
  return {
    type: actionTypes.ENROLLMENT_UPDATE_REQUEST,
    payload: { data },
  };
}

export function enrollmentUpdateSuccess() {
  return {
    type: actionTypes.ENROLLMENT_UPDATE_SUCCESS,
  };
}

export function enrollmentUpdateFailure() {
  return {
    type: actionTypes.ENROLLMENT_UPDATE_FAILURE,
  };
}

export function enrollmentDeleteRequest(id) {
  return {
    type: actionTypes.ENROLLMENT_DELETE_REQUEST,
    payload: { id },
  };
}

export function enrollmentDeleteSuccess() {
  return {
    type: actionTypes.ENROLLMENT_DELETE_SUCCESS,
  };
}

export function enrollmentDeleteFailure() {
  return {
    type: actionTypes.ENROLLMENT_DELETE_FAILURE,
  };
}
