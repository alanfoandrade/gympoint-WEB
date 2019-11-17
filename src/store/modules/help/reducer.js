import produce from 'immer';
import * as actionTypes from '~/store/modules/actionTypes';

const INITIAL_STATE = {
  loading: false,
  list: [],
};

export default function help(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case actionTypes.HELP_ORDER_LIST_REQUEST: {
        draft.loading = true;
        break;
      }
      case actionTypes.HELP_ORDER_LIST_SUCCESS: {
        draft.loading = false;
        draft.list = action.payload.list;
        break;
      }
      case actionTypes.HELP_ORDER_LIST_FAILURE: {
        draft.loading = false;
        break;
      }
      case actionTypes.HELP_ORDER_ANSWER_REQUEST: {
        draft.loading = true;
        break;
      }
      case actionTypes.HELP_ORDER_ANSWER_SUCCESS: {
        draft.loading = false;
        break;
      }
      case actionTypes.HELP_ORDER_ANSWER_FAILURE: {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
