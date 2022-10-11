import axios from 'axios';

export const GET_ALL_PRODUCTS = `
query {
  category(input: {title:"all"}) {
    products {
      id
      name
      prices {
        amount
        currency {
          label
          symbol
        }
      }
      gallery
      category

      attributes {
        name
        items {
          value
        }
      }
    }
  }
}
`;

export const GET_CURRENCY = `
query {
  currencies {
    label
    symbol
  }
}
`;

export const GET_CATEGORIES = `
query {
  categories {
   name

  }
}
`;

export const GET_PRODUCT_BY_ID = (idProduct) =>
  `
query {
  product(id:"${idProduct}") {
    id
   name
   prices {
    amount
    currency {
      label
      symbol
    }
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
    url: 'http://localhost:4000/',
    data: {
      query: query,
    },
  }).then((response) => response.data);
}
