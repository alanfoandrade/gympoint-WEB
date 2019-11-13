import * as actionTypes from '~/store/modules/actionTypes';

export function planListRequest() {
  return {
    type: actionTypes.PLAN_LIST_REQUEST,
  };
}

export function planListSuccess(list) {
  return {
    type: actionTypes.PLAN_LIST_SUCCESS,
    payload: { list },
  };
}

export function planListFailure() {
  return {
    type: actionTypes.PLAN_LIST_FAILURE,
  };
}

export function planCreateRequest(plan) {
  return {
    type: actionTypes.PLAN_CREATE_REQUEST,
    payload: { plan },
  };
}

export function planCreateSuccess() {
  return {
    type: actionTypes.PLAN_CREATE_SUCCESS,
  };
}

export function planCreateFailure() {
  return {
    type: actionTypes.PLAN_CREATE_FAILURE,
  };
}

export function planUpdateRequest(data) {
  return {
    type: actionTypes.PLAN_UPDATE_REQUEST,
    payload: { data },
  };
}

export function planUpdateSuccess() {
  return {
    type: actionTypes.PLAN_UPDATE_SUCCESS,
  };
}

export function planUpdateFailure() {
  return {
    type: actionTypes.PLAN_UPDATE_FAILURE,
  };
}
