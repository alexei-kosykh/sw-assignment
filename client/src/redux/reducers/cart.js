const initialState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

// const getTotalCount = (arrItems) => arrItems.length;

// const getAllSumByCount = (arr) => {
//   return Object.keys(arr).reduce((sum, key) => arr[key].items.length + sum, 0);
// };

// const getStateTotalCount = (state) => {
//   return state.totalCount;
// };

export const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT_CART': {
      // const totalCount = getAllSumByCount(state.items);
      return {
        ...state,
        // totalCount,
      };
    }

    case 'CLEAR_ALL_CART': {
      return { items: {}, totalCount: 0, totalPrice: 0 };
    }

    case 'PLUS_CART_ITEM': {
      return {
        ...state,
        totalCount: action.payload + 1,
      };
    }

    case 'MINUS_CART_ITEM': {
      return {
        ...state,
        totalCount: action.payload - 1,
      };
    }

    case 'REMOVE_CART_ITEM': {
      return {
        ...state,
        totalCount: 0,
      };
    }

    default:
      return state;
  }
};
