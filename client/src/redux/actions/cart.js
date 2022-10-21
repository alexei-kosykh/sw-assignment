import { store } from '../store';

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

export const createOrder = (items) => ({
  type: 'CREATE_NEW_ORDER',
  payload: items,
});

export const getInfoForOverlay = () => {
  const items = [];
  let key = 0;
  Object.values(store.getState().cart.items).map((item) =>
    Object.values(item).forEach((item) => {
      items[key] = item;
      key++;
    })
  );
  return items;
};

export const getInfoForOrder =
  (totalCount, totalPrice, currencyIndex, countTax) => (dispatch) => {
    const itemsResult = getInfoForOverlay().map((item) => {
      return {
        ...item,
        prices: item.prices[currencyIndex],
        attr: item.attr.map((attr) => ({
          attrName: attr.nameAttr,
          attrValue: attr.attrValue[attr.attrIndex].value,
        })),
      };
    });

    itemsResult.forEach((item) => {
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
        tax21: countTax(totalPrice[currencyIndex]?.amount),
        items: itemsResult,
      })
    );
    dispatch(clearAllCart());
  };

// Two functions for generate info and add item
export const generateProductInfo = (
  id,
  idAttr,
  product,
  attributes,
  productToCart
) => {
  productToCart[id] = {
    [idAttr]: {
      name: product.name,
      brand: product.brand,
      attr: attributes.map((item) => item),
      prices: product.prices,
      pricesDefault: product.prices,
      images: product.gallery,
      idAttr: idAttr,
      id: id,
    },
  };
};

export const addToCart = (product, attributes, productToCart) => {
  const idCurrentProduct = product.name?.toLowerCase().replace(/\s/g, '');
  const idCurrentAttributes = attributes.map((item) => item.attrIndex).join('');
  generateProductInfo(
    idCurrentProduct,
    idCurrentAttributes,
    product,
    attributes,
    productToCart
  );
  store.dispatch(
    addProductToCart(
      productToCart[idCurrentProduct],
      idCurrentProduct,
      idCurrentAttributes
    )
  );
};

export const checkAllAttributes = (
  product,
  attributes,
  productToCart,
  attrLength
) => {
  const filterAttributes = attributes.filter(function (item) {
    return item !== null && item !== '';
  });
  if (filterAttributes.length === attrLength) {
    addToCart(product, attributes, productToCart);
    return true;
  } else {
    return false;
  }
};
