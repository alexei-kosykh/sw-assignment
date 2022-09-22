export const addProductToCart = (product, id, idAttr) => ({
  type: 'ADD_PRODUCT_CART',
  payload: product,
  id,
  idAttr,
});

export const clearAllCart = () => ({
  type: 'CLEAR_ALL_CART',
});

export const removeCartItem = (id) => ({
  type: 'REMOVE_CART_ITEM',
  payload: id,
});

export const plusCartItem = (id, idAttr) => ({
  type: 'PLUS_CART_ITEM',
  id,
  idAttr,
});

export const minusCartItem = (id, idAttr) => ({
  type: 'MINUS_CART_ITEM',
  id,
  idAttr,
});

export const getInfoForOrder =
  (totalCount, totalPrice, items, currencyIndex, getInfoForCart, countTax) =>
  (dispatch) => {
    const itemsResult = getInfoForCart(items).map((item) => {
      return {
        ...item,
        prices: item.prices[currencyIndex],
        attr: item.attr.map((attr) => ({
          attrName: attr.nameAttr,
          attrValue: attr.attrValue[attr.attrIndex].value,
        })),
      };
    });

    itemsResult.map((item) => {
      delete item.pricesDefault;
      delete item.images;
      delete item.id;
      delete item.idAttr;
    });

    dispatch(
      createOrder({
        totalCount: totalCount,
        totalPrice: totalPrice[currencyIndex]?.amount,
        currency: itemsResult[0].prices.currency,
        tax21: countTax(totalPrice),
        items: itemsResult,
      })
    );
    dispatch(clearAllCart());
  };

export const createOrder = (items) => ({
  type: 'CREATE_NEW_ORDER',
  payload: items,
});
