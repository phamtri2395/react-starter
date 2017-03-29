import * as constant from '../../utils/constant';

// Get function to transform message into submit, success or error status
const { submit, success, error } = constant.messageSymbol;

const initialState = {
  msg: null,
  data: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constant.PRINT_HELLO:
      return { ...state, msg: action.payload };

    case success(constant.FETCH_USER):
      console.log(action.payload);
      return { ...state, msg: null, data: action.payload.body.data };

    default:
      return state;
  }
};
