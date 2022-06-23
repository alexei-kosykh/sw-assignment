import React, { Component } from 'react';
import styled from 'styled-components';

export class Category extends Component {
  render() {
    return (
      <StyledCategory>
        <h1>Category name</h1>
      </StyledCategory>
    );
  }
}

export default Category;

const StyledCategory = styled.div`
  h1 {
    font-size: 42px;
  }
`;
