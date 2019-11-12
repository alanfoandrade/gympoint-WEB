import * as actionTypes from '~/store/modules/actionTypes';

export function loginRequest(email, password) {
  return {
    type: actionTypes.AUTH_LOGIN_REQUEST,
    payload: { email, password },
  };
}

export function loginSuccess(token, user) {
  return {
    type: actionTypes.AUTH_LOGIN_SUCCESS,
    payload: { token, user },
  };
}

export function loginFailure() {
  return {
    type: actionTypes.AUTH_LOGIN_FAILURE,
  };
}

export function logout() {
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
}
