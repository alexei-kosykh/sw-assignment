import React, { Component } from 'react';
import axios from 'axios';
import { ProductGallery, ProductDescription } from '../components';
import styled from 'styled-components';

export class PDP extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, isLoaded: false, product: [] };
  }
  async componentDidMount() {
    try {
      let result = await this.makeGraphQLQuery(`
      query {
        product(id:"jacket-canada-goosee") {
         name
         prices {
          amount
          currency
        }
         gallery
         description
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
        <ProductGallery />
        <ProductDescription />
      </StyledPDP>
    );
  }
}

export default PDP;

const StyledPDP = styled.div`
  display: flex;
  gap: 10vw;

  h1,
  h2 {
    font-size: 30px;
  }
  h1 {
    font-weight: 600;
  }
`;
