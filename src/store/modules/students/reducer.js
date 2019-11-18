import produce from 'immer';
import * as actionTypes from '~/store/modules/actionTypes';

const INITIAL_STATE = {
  loading: false,
  list: [],
};

export default function students(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case actionTypes.STUDENT_LIST_REQUEST: {
        draft.loading = true;
        break;
      }
      case actionTypes.STUDENT_LIST_SUCCESS: {
        draft.list = action.payload.list;
        draft.loading = false;
        break;
      }
      case actionTypes.STUDENT_LIST_FAILURE: {
        draft.loading = false;
        break;
      }
      case actionTypes.STUDENT_UPDATE_REQUEST: {
        draft.loading = true;
        break;
      }
      case actionTypes.STUDENT_UPDATE_SUCCESS: {
        draft.loading = false;
        break;
      }
      case actionTypes.STUDENT_UPDATE_FAILURE: {
        draft.loading = false;
        break;
      }
      case actionTypes.STUDENT_CREATE_REQUEST: {
        draft.loading = true;
        break;
      }
      case actionTypes.STUDENT_CREATE_SUCCESS: {
        draft.loading = false;
        break;
      }
      case actionTypes.STUDENT_CREATE_FAILURE: {
        draft.loading = false;
        break;
      }
      case actionTypes.STUDENT_DELETE_REQUEST: {
        draft.loading = true;
        break;
      }
      case actionTypes.STUDENT_DELETE_SUCCESS: {
        draft.loading = false;
        break;
      }
      case actionTypes.STUDENT_DELETE_FAILURE: {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
