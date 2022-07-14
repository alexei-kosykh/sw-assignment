
const initialState = {
  currentId: 'apple-imac-2021',
  items: [],
  isLoaded: false,
  error: null,
};

export const products = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, items: action.payload, isLoaded: true };
    case 'SET_ID_PRODUCT':
      return { ...state, currentId: action.payload };
    case 'SET_LOADED':
      return { ...state, isLoaded: action.payload };
    case 'SET_ERROR':
      return { ...state, isLoaded: true, error: action.payload };
    default:
      return state;
  }
};
