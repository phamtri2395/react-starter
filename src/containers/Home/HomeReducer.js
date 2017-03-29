import * as constant from '../../utils/constant';

// Get function to transform message into submit, success or error status
const { submit, success, error } = constant.messageSymbol;

const initialState = {
  data: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case success(constant.FETCH_USER_LIST):
      return { ...state, msg: null, data: action.payload.data };

    default:
      return state;
  }
};
