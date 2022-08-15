const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getStateTotalCount = (state) => {
  return state.totalCount;
};

const getTotalPrice = (totalPrice, prices) => {
  return prices.map((item, index) =>
    totalPrice
      ? {
          amount: totalPrice[index].amount + item.amount,
          currency: item.currency,
        }
      : item
  );
};

const countProductById = (count) => {
  return count ? ++count : (count = 1);
};

const getCurrentPrice = (prices, productCount) => {
  prices.map((item, index) => {
    return {
      amount: (item.amount * productCount).toFixed(2),
      currency: prices[index].currency,
    };
  });
};

export const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT_CART': {
      // const totalCount = getAllSumByCount(state.items);
      // action.payload[action.idAttr].prices.map((item) =>
      //   console.log(item.amount)
      // );
      const countById = countProductById(
        state.items[action.id]?.[action.idAttr]?.count
      );
      const newItems = {
        ...state.items,
        [action.id]: {
          ...state.items[action.id],
          ...action.payload,
          [action.idAttr]: {
            // ...state.items[action.id]?.[action.idAttr],
            ...action.payload[action.idAttr],
            count: countById,
            prices: getCurrentPrice(
              action.payload[action.idAttr].prices,
              countById
            ),
          },
        },
      };
      console.log(
        getCurrentPrice(action.payload[action.idAttr].prices, countById)
      );

      return {
        ...state,
        items: newItems,
        totalCount: getStateTotalCount(state) + 1,
        totalPrice: getTotalPrice(
          state.totalPrice,
          action.payload[action.idAttr].prices
        ),
        // totalPrice
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
