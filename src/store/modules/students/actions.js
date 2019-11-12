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
