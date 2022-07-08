export const setLoaded = (payload) => ({ type: 'SET_LOADED', payload });

export const setProducts = (items) => ({
  type: 'SET_PRODUCTS',
  payload: items,
});

export const setIdProduct = (id) => ({
  type: 'SET_ID_PRODUCT',
  payload: id,
});
