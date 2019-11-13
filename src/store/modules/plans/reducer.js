import produce from 'immer';
import * as actionTypes from '~/store/modules/actionTypes';

const INITIAL_STATE = {
  loading: false,
  list: [],
};

export default function plans(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case actionTypes.PLAN_LIST_REQUEST: {
        draft.loading = true;
        break;
      }
      case actionTypes.PLAN_LIST_SUCCESS: {
        draft.list = action.payload.list;
        draft.loading = false;
        break;
      }
      case actionTypes.PLAN_LIST_FAILURE: {
        draft.loading = false;
        break;
      }
      case actionTypes.PLAN_CREATE_REQUEST: {
        draft.loading = true;
        break;
      }
      case actionTypes.PLAN_CREATE_SUCCESS: {
        draft.loading = false;
        break;
      }
      case actionTypes.PLAN_CREATE_FAILURE: {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
