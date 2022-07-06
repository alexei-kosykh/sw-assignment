import React, { Component } from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';

import { ProductInCart, Button } from '..';

export class CartOverlay extends Component {
  render() {
    return (
      <StyledCartOverlay>
        <p>
          <strong>My Bag</strong>, 3 items
        </p>
        <ProductInCart elemSize="Small" />
        <div>
          <strong>Total</strong> <strong>$200</strong>
        </div>
        <div>
          <Button key={nanoid()} size={`primaryMiddle`} value={'View bag'} />
          <Button
            key={nanoid()}
            variant={'primary'}
            size={`primaryMiddle`}
            value={'Check out'}
          />
        </div>
      </StyledCartOverlay>
    );
  }
}

export default CartOverlay;

const StyledCartOverlay = styled.div`
  cursor: auto;
  position: absolute;
  top: 50px;
  right: -15px;
  width: 325px;
  z-index: 100;
  padding: 30px 15px 25px;

  background-color: #ffffff;
  overflow-y: auto;
  max-height: 70vh;

  box-shadow: 0px 7px 29px -2px rgba(34, 60, 80, 0.11);

  &::-webkit-scrollbar {
    width: 7px;
    background-color: #f0f0f0;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #5ece7b;
  }

  p {
    margin-bottom: 30px;
  }

  strong {
    font-weight: 700;
  }

  & > div:nth-child(3) {
    margin-bottom: 30px;
  }

  & > div:last-of-type {
    display: flex;

    button:first-of-type {
      margin-right: 15px;
    }
  }
`;
