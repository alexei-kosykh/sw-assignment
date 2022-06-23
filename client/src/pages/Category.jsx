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
    padding: 50px 0 100px;
  }

  & > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;
