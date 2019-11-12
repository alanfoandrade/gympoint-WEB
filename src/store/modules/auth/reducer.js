import produce from 'immer';
import * as actionTypes from '~/store/modules/actionTypes';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case actionTypes.AUTH_LOGIN_REQUEST: {
        draft.loading = true;
        break;
      }
      case actionTypes.AUTH_LOGIN_SUCCESS: {
        draft.loading = false;
        draft.signed = true;
        draft.token = action.payload.token;
        break;
      }
      case actionTypes.AUTH_LOGIN_FAILURE: {
        draft.loading = false;
        break;
      }
      case actionTypes.AUTH_LOGOUT: {
        draft.token = null;
        draft.signed = false;
        break;
      }
      default:
    }
  });
}
