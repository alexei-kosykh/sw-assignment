import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductInCart, ProductResult } from '../components';

import { StyledTitle } from '../GeneralStyles';
export class Cart extends Component {
  render() {
    return (
      <StyledCart>
        <StyledTitle>Cart</StyledTitle>
        <ProductInCart elemSize="Default" />
        <ProductResult />
      </StyledCart>
    );
  }
}

export default Cart;

const StyledCart = styled.div`
  h1 {
    margin-bottom: 50px;
    font-weight: 700;
  }
`;
