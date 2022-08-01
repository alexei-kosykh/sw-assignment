const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

// const getTotalCount = (arrItems) => arrItems.length;

const getTotalCountById = (obj, id) => {
  let totalCount = 0;
  for (id in obj) {
    totalCount = Object.values(obj[id]).map((item) => item.count);
  }
  return totalCount.reduce((a, b) => a + b);
};

const getStateTotalCount = (state) => {
  return state.totalCount;
};

export const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT_CART': {
      // const totalCount = getAllSumByCount(state.items);
      const newItems = {
        ...state.items,
        [action.id]: {
          ...state.items[action.id],
          ...action.payload,
        },
      };
      console.log(getTotalCountById(newItems, action.id));
      return {
        ...state,
        items: newItems,
        totalCount: getStateTotalCount(state) + 1,
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
