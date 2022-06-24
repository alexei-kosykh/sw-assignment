import React, { Component } from 'react';
import styled from 'styled-components';

import { ProductCard } from '../components';
export class Category extends Component {
  render() {
    return (
      <StyledCategory>
        <h1>Category name</h1>
        <div>
          <ProductCard />
        </div>
      </StyledCategory>
    );
  }
}

export default Category;

const StyledCategory = styled.div`
  h1 {
    font-size: 42px;
    padding-bottom: 100px;
  }

  & > div {
    display: grid;
    justify-items: center;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

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
