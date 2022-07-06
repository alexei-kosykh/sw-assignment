const initialState = {
  currency: '$',
};

export const currency = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENCY':
      return { ...state, currency: action.payload };

    default:
      return state;
  }
};
