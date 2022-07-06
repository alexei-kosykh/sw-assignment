const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

export const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PIZZA_CART': {
      return {
        ...state,
        items: action.type,
      };
    }

    case 'CLEAR_ALL_CART': {
      return { items: {}, totalCount: 0, totalPrice: 0 };
    }

    case 'PLUS_CART_ITEM': {
      return {
        ...state,
        items: action.payload,
      };
    }

    case 'MINUS_CART_ITEM': {
      return {
        ...state,
        items: action.payload,
      };
    }

    case 'REMOVE_CART_ITEM': {
      return {
        ...state,
        items: action.payload,
      };
    }

    default:
      return state;
  }
};
