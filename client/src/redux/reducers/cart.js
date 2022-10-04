const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
  orders: [],
};

const getStateTotalCount = (state) => {
  return state.totalCount;
};

const getTotalPrice = (totalPrice, prices) => {
  return prices.map((item, index) => {
    return totalPrice
      ? {
          amount: +(totalPrice[index].amount + +item.amount).toFixed(2),
          currency: item.currency,
        }
      : item;
  });
};

const getDecreaseTotalPrice = (totalPrice, prices) => {
  return prices.map((item, index) => {
    return {
      amount: +(totalPrice[index].amount - +item.amount).toFixed(2),
      currency: item.currency,
    };
  });
};

const countIncreaseById = (count) => {
  return count ? ++count : (count = 1);
};

const countDecreaseById = (count) => {
  return count > 1 ? --count : 0;
};

const getCurrentPrice = (prices, productCount) => {
  return prices.map((item) => {
    return {
      amount: (item.amount * productCount).toFixed(2),
      currency: item.currency,
    };
  });
};

export const cart = (state = initialState, action) => {
  const countById = countIncreaseById(
    state.items[action.id]?.[action.idAttr]?.count
  );
  switch (action.type) {
    case 'ADD_PRODUCT_CART': {
      const newItems = {
        ...state.items,
        [action.id]: {
          ...state.items[action.id],
          ...action.payload,
          [action.idAttr]: {
            ...action.payload[action.idAttr],
            count: countById,
            prices: getCurrentPrice(
              action.payload[action.idAttr].prices,
              countById
            ),
          },
        },
      };

      return {
        ...state,
        items: newItems,
        totalCount: getStateTotalCount(state) + 1,
        totalPrice: getTotalPrice(
          state.totalPrice,
          action.payload[action.idAttr].prices
        ),
      };
    }

    case 'CREATE_NEW_ORDER': {
      const newOrder = [...state.orders, action.payload];
      return { ...state, orders: newOrder };
    }

    case 'CLEAR_ALL_CART': {
      return { ...state, items: {}, totalPrice: 0, totalCount: 0 };
    }

    case 'PLUS_CART_ITEM': {
      const newItems = {
        ...state.items,
        [action.id]: {
          ...state.items[action.id],
          [action.idAttr]: {
            ...state.items[action.id][action.idAttr],
            count: countById,
            prices: getCurrentPrice(
              state.items[action.id][action.idAttr].pricesDefault,
              countById
            ),
          },
        },
      };

      return {
        ...state,
        items: newItems,
        totalCount: getStateTotalCount(state) + 1,
        totalPrice: getTotalPrice(
          state.totalPrice,
          state.items[action.id][action.idAttr].pricesDefault
        ),
      };
    }

    case 'MINUS_CART_ITEM': {
      const countMinusById = countDecreaseById(
        state.items[action.id]?.[action.idAttr]?.count
      );

      const newItems = {
        ...state.items,
        [action.id]: {
          ...state.items[action.id],
          [action.idAttr]: {
            ...state.items[action.id][action.idAttr],
            count: countMinusById,
            prices: getCurrentPrice(
              state.items[action.id][action.idAttr].pricesDefault,
              countMinusById
            ),
          },
        },
      };

      const resultObjectItems = {
        ...state,
        items: newItems,
        totalCount: getStateTotalCount(state) - 1,
        totalPrice: getDecreaseTotalPrice(
          state.totalPrice,
          state.items[action.id][action.idAttr].pricesDefault
        ),
      };
      if (countMinusById) {
        return resultObjectItems;
      } else {
        delete newItems[action.id][action.idAttr];
        return resultObjectItems;
      }
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
