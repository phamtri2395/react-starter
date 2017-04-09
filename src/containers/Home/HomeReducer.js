import { messageSymbol } from '../../constants/Misc';
import * as types from '../../constants/ActionTypes';

// Get function to transform message into submit, success or error status
const { submit, success, error } = messageSymbol;

const initialState = {
  data: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case success(types.FETCH_USER_LIST):
      return { ...state, data: action.payload.data };

    case success(types.FETCH_SINGLE_USER):
      return { ...state, data: [...state.data, action.payload.data] };

    default:
      return state;
  }
};
