import produce from 'immer';
import * as actionTypes from '~/store/modules/actionTypes';

const INITIAL_STATE = {
  user: null,
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
    case actionTypes.AUTH_LOGIN_SUCCESS: {
      return produce(state, draft => {
        draft.user = action.payload.user;
      });
    }
    case actionTypes.AUTH_LOGOUT: {
      return produce(state, draft => {
        draft.user = null;
      });
    }
  }
}
