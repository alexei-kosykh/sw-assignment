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
