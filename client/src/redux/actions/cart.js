export const addProductToCart = (product) => ({
  type: 'ADD_PRODUCT_CART',
  payload: product,
});

export const clearAllCart = () => ({
  type: 'CLEAR_ALL_CART',
});

export const removeCartItem = (id) => ({
  type: 'REMOVE_CART_ITEM',
  payload: id,
});

export const plusCartItem = (id) => ({
  type: 'PLUS_CART_ITEM',
  payload: id,
});

export const minusCartItem = (id) => ({
  type: 'MINUS_CART_ITEM',
  payload: id,
});
