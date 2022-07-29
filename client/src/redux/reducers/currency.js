const initialState = {
  currency: '$',
  index: 0,
};

export const currency = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENCY':
      return { ...state, index: action.index, currency: action.payload };

    default:
      return state;
  }
};


