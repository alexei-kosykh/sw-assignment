

const initialState = {
  category: 'CLOTHES',
};

export const filters = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CATEGORY':
      return { ...state, category: action.payload };

    default:
      return state;
  }
};
