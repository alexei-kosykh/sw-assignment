import axios from 'axios';

export const GET_ALL_PRODUCTS = `
query {
  productsAll {
    id
    name
    prices {
      amount
      currency
    }
    gallery
    category
  }
}
`;

export const GET_CURRENCY = `
query {
  productsAll{
  prices {
    currency
  }
}
}
`;

export const GET_CATEGORIES = `
query {
  productsAll {
   category
  }
}
`;

export const GET_PRODUCT_BY_ID = (idProduct) =>
  `
query {
  product(id:"${idProduct}") {
   name
   prices {
    amount
    currency
  }
   gallery
   description
   brand
   attributes {
    name
    items {
      value
    }
  }
   }
 }
`;
export function makeGraphQLQuery(query) {
  return axios({
    method: 'POST',
    url: 'http://localhost:4000/graphql',
    data: {
      query: query,
    },
  }).then((response) => response.data);
}
