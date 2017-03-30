import * as constant from '../../utils/constant';

// Get function to transform message into submit, success or error status
const { submit, success, error } = constant.messageSymbol;

const initialState = {
  data: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case success(constant.FETCH_USER_LIST):
      return { ...state, data: action.payload.data };

    case success(constant.FETCH_SINGLE_USER):
      return { ...state, data: [...state.data, action.payload.data] };

    default:
      return state;
  }
};
