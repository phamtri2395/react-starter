const initialState = {
  data: 'Hello'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH':
      return { ...state, data: action.payload };

    default:
      return state;
  }
};
