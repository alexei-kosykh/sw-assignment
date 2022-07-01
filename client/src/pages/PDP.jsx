import React, { Component } from 'react';
import axios from 'axios';
import { ProductGallery, ProductDescription } from '../components';
import styled from 'styled-components';

export class PDP extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, isLoaded: false, product: [], gip: '' };
  }

  async componentDidMount() {
    try {
      let result = await this.makeGraphQLQuery(`
      query {
        product(id:"xbox-series-s") {
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
      `);
      this.setState({ product: result.data.product, isLoaded: true });
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
    return (
      <StyledPDP>
        <ProductGallery images={this.state.product.gallery} />
        <ProductDescription product={this.state.product} />
      </StyledPDP>
    );
  }
}

export default PDP;

const StyledPDP = styled.div`
  display: flex;
  gap: 10vw;

  & {
    @media (max-width: 1060px) {
      gap: 7vw;
    }

    @media (max-width: 880px) {
      gap: 3vw;
    }

    @media (max-width: 840px) {
      display: block;
    }
  }
`;
