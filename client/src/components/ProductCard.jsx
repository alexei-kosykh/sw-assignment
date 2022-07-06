import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { nanoid } from 'nanoid';

export class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, isLoaded: false, products: [] };
  }
  async componentDidMount() {
    try {
      let result = await this.makeGraphQLQuery(`
        query {
          productsAll {
            name
            prices {
              amount
              currency
            }
            gallery
          }
        }
      `);
      this.setState({ products: result.data.productsAll, isLoaded: true });
    } catch (e) {
      this.setState({ error: e, isLoaded: true });
    }
  }

  makeGraphQLQuery(query) {
    return axios({
      method: 'POST',
      url: 'http://localhost:4000/graphql',
      data: {
        query: query,
      },
    }).then((response) => response.data);
  }

  render() {
    const { error, isLoaded, products } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <>
          {products.map((product) => {
            return (
              <StyledProductCard key={nanoid()} image={product.gallery[0]}>
                <div>
                  <div className="image" alt="img"></div>
                  <h3>{product.name}</h3>
                  <p>
                    {product.prices[0].currency}
                    {product.prices[0].amount}
                  </p>
                </div>
              </StyledProductCard>
            );
          })}
        </>
      );
    }
  }
}

export default ProductCard;

const StyledProductCard = styled.div`
  display: flex;
  margin-bottom: 100px;
  overflow: hidden;

  width: 390px;
  height: 400px;
  font-size: 18px;

  &:hover {
    cursor: pointer;
    -webkit-box-shadow: 0px 0px 41px -1px rgba(34, 60, 80, 0.24);
    -moz-box-shadow: 0px 0px 41px -1px rgba(34, 60, 80, 0.24);
    box-shadow: 0px 0px 41px -1px rgba(34, 60, 80, 0.24);
  }

  div {
    padding: 15px;
    width: 100%;
  }

  h3 {
    font-weight: 300;
    padding: 15px 0 1px;
  }

  .image {
    background-image: url(${(props) => props.image});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    height: 280px;
  }

  .image:hover {
    transform: scale(1.12);

    transition: 1s 0.2s;
  }

  p {
    font-weight: 500;
  }
`;
