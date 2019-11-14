import produce from 'immer';
import * as actionTypes from '~/store/modules/actionTypes';

const INITIAL_STATE = {
  loading: false,
  list: [],
};

export default function enrollments(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case actionTypes.ENROLLMENT_LIST_REQUEST: {
        draft.loading = true;
        break;
      }
      case actionTypes.ENROLLMENT_LIST_SUCCESS: {
        draft.loading = false;
        draft.list = action.payload.list;
        break;
      }
      case actionTypes.ENROLLMENT_LIST_FAILURE: {
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
      case actionTypes.PLAN_UPDATE_REQUEST: {
        draft.loading = true;
        break;
      }
      case actionTypes.PLAN_UPDATE_SUCCESS: {
        draft.loading = false;
        break;
      }
      case actionTypes.PLAN_UPDATE_FAILURE: {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
