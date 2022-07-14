import React, { Component } from 'react';
import styled from 'styled-components';

import { ProductCard } from '../components';
import { StyledTitle } from '../GeneralStyles';
export class Category extends Component {
  constructor(props) {
    super(props);
    this.state = { categoryName: '' };
  }
  render() {
    return (
      <StyledCategory>
        <StyledTitle>{this.state.categoryName}</StyledTitle>
        <div>
          <ProductCard categoryName={this.setState} />
        </div>
      </StyledCategory>
    );
  }
}

export default Category;

const StyledCategory = styled.div`
  & > div {
    display: grid;
    justify-items: center;
    grid-template: 1fr / 1fr 1fr 1fr 1fr 1fr;

    @media (max-width: 2150px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    @media (max-width: 1750px) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @media (max-width: 1320px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 850px) {
      grid-template-columns: 1fr;
    }
  }
`;
