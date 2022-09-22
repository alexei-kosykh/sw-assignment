import React, { Component } from 'react';
import { Button } from '../';
import { store } from '../../redux/store';
import styled, { css } from 'styled-components';
import { plusCartItem, minusCartItem } from '../../redux/actions/cart';

export class CounterInCart extends Component {
  incrementCount = () => {
    store.dispatch(plusCartItem(this.props.id, this.props.idAttr));
  };
  decrementCount = () => {
    store.dispatch(minusCartItem(this.props.id, this.props.idAttr));
  };
  render() {
    return (
      <StyledImageCart elemSize={this.props.elemSize}>
        <Button
          variant={'counter'}
          size={`counter${this.props.elemSize}`}
          value={'+'}
          onClick={this.incrementCount}
        ></Button>
        <p>{this.props.count}</p>
        <Button
          variant={'counter'}
          size={`counter${this.props.elemSize}`}
          value={'-'}
          onClick={this.decrementCount}
        ></Button>
      </StyledImageCart>
    );
  }
}

export default CounterInCart;

const StyledImageCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  button {
    position: relative;
    font-size: 20px;
    font-weight: lighter;
  }

  ${({ elemSize }) => {
    switch (elemSize) {
      case 'Small':
        return css`
          margin-right: 8px;
          height: 194px;
        `;

      case 'Default':
        return css`
          margin-right: 15px;
          height: 290px;
        `;
      default:
        return css`
          height: 190px;
        `;
    }
  }}
`;
