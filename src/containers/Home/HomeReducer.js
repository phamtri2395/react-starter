import * as constant from '../../utils/constant';

const initialState = {
  msg: null,
  data: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constant.PRINT_HELLO:
      return { ...state, msg: action.payload };

    case constant.FETCH_USER:
      switch (action.status) {
        case constant.messageStatus.submit:
          return { ...state, msg: 'Loading list...' };
        case constant.messageStatus.success:
          return { ...state, msg: null, data: action.payload.body.data };
        case constant.messageStatus.error:
          return { ...state, msg: action.payload };

        default:
          return state;
      }


    default:
      return state;
  }
};
