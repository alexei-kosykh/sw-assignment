import { Component } from 'react';
import styled from 'styled-components';

import { store } from '../redux/store';
import { GET_PRODUCT_BY_ID, makeGraphQLQuery } from '../graphQL/Queries';

import { ProductGallery, ProductDescriptionContainer } from '../components';
export class PDP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      product: [],
    };
  }

  async componentDidMount() {
    try {
      let result = await makeGraphQLQuery(
        GET_PRODUCT_BY_ID(store.getState().products.currentId)
      );
      this.setState({ product: result.data.product, isLoaded: true });
    } catch (e) {
      this.setState({ error: e, isLoaded: true });
    }
  }

  render() {
    return (
      <StyledPDP>
        <ProductGallery images={this.state.product.gallery} />
        <ProductDescriptionContainer
          product={this.state.product}
          elemSize="Default"
        />
      </StyledPDP>
    );
  }
}

export default PDP;

const StyledPDP = styled.div`
  display: flex;
  gap: 10vw;

  @media (max-width: 1360px) {
  }
  @media (max-width: 1060px) {
    gap: 7vw;
  }

  @media (max-width: 880px) {
    gap: 3vw;
  }

  @media (max-width: 840px) {
    display: block;

    div img {
      object-fit: contain;
      object-position: 50%;
    }
  }
`;
