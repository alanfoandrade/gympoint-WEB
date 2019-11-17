import * as actionTypes from '~/store/modules/actionTypes';

export function helpListRequest() {
  return {
    type: actionTypes.HELP_ORDER_LIST_REQUEST,
  };
}

export function helpListSuccess(list) {
  return {
    type: actionTypes.HELP_ORDER_LIST_SUCCESS,
    payload: { list },
  };
}

export function helpListFailure() {
  return {
    type: actionTypes.HELP_ORDER_LIST_FAILURE,
  };
}

export function helpAnswerRequest(data) {
  return {
    type: actionTypes.HELP_ORDER_ANSWER_REQUEST,
    payload: { data },
  };
}

export function helpAnswerSuccess() {
  return {
    type: actionTypes.HELP_ORDER_ANSWER_SUCCESS,
  };
}

export function helpAnswerFailure() {
  return {
    type: actionTypes.HELP_ORDER_ANSWER_FAILURE,
  };
}
