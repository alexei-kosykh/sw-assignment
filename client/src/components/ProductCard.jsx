import React, { Component } from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';

import { GET_ALL_PRODUCTS, makeGraphQLQuery } from '../graphQL/Queries';
import { store } from '../redux/store';
import { setIdProduct } from '../redux/actions/products';

export class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      products: [],
      category: store.getState().filters.category.toLowerCase(),
    };
    this.setId = this.setId.bind(this);
  }
  async componentDidMount() {
    try {
      let result = await makeGraphQLQuery(GET_ALL_PRODUCTS);
      this.setState({ products: result.data.productsAll, isLoaded: true });
    } catch (e) {
      this.setState({ error: e, isLoaded: true });
    }

    this.unsubscribe = store.subscribe(() => this.toogleCategory());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  toogleCategory = () => {
    const category = store.getState().filters.category.toLowerCase();
    this.setState({
      category,
    });
    this.props.toogleTitle();
  };

  setId(id) {
    store.dispatch(setIdProduct(id));
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
              product.category === this.state.category && (
                <Link
                  key={nanoid()}
                  to={{
                    pathname: '/pdp/',
                    search: `${product.id}`,
                  }}
                >
                  <StyledProductCard
                    image={product.gallery[0]}
                    onClick={(e) => this.setId(product.id)}
                  >
                    <div>
                      <div className="image" alt="img"></div>
                      <h3>{product.name}</h3>
                      <p>
                        {this.props.currencyType}
                        {product.prices[this.props.index].amount}
                      </p>
                    </div>
                  </StyledProductCard>
                </Link>
              )
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

  @media (max-width: 850px) {
    margin-bottom: 50px;
  }
`;
