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
