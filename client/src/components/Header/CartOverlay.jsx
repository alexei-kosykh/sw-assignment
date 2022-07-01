import React, { Component } from 'react';
import styled from 'styled-components';

import { ProductInCart, Button } from '..';

export class CartOverlay extends Component {
  render() {
    return (
      <StyledCartoverlay>
        <p>
          <strong>My Bag</strong>, 3 items
        </p>
        <ProductInCart elemSize="Small" />
        <div>
          <strong>Total</strong> <strong>$200</strong>
        </div>
        <div>
          <Button />
          <Button />
        </div>
      </StyledCartoverlay>
    );
  }
}

export default CartOverlay;

const StyledCartoverlay = styled.div`
  position: absolute;
  top: 50px;
  right: -15px;
  width: 325px;
z-index: 100;
  padding: 30px 15px 20px;

  background-color: azure;
  border: 4px solid red;

  strong {
    font-weight: 700;
  }
`;
