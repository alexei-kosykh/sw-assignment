import React, { Component } from 'react';
import styled from 'styled-components';
import { nanoid } from '@reduxjs/toolkit';
import { ProductInCart, ProductResult } from '../components';
import { store } from '../redux/store';

import { StyledTitle } from '../GeneralStyles';
export class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currencyObj: store.getState().currency,
    };
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.switchCurrency());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  switchCurrency = () => {
    this.setState({
      currencyObj: store.getState().currency,
    });
  };

  getInfoForCart = (items) => {
    const newItems = [];
    let key = 0;
    Object.values(store.getState().cart.items).map((item) =>
      Object.values(item).map((item) => {
        newItems[key] = item;
        key++;
      })
    );
    return newItems;
  };
  render() {
    const { items, totalCount, totalPrice } = store.getState().cart;
    // styles problem located in styleDefault
    return (
      <StyledCart>
        <StyledTitle>Cart</StyledTitle>
        {this.getInfoForCart(items).map((item, key) => (
          <ProductInCart
            key={nanoid()}
            id={item.id}
            idAttr={item.idAttr}
            elemSize="Default"
            name={item.name}
            brand={item.brand}
            attr={item.attr}
            count={item.count}
            price={item.prices[this.state.currencyObj.index].amount}
            images={item.images}
            currencyType={this.state.currencyObj.currency}
          />
        ))}
        <ProductResult currencyType={this.state.currencyObj?.currency} />
      </StyledCart>
    );
  }
}

export default Cart;

const StyledCart = styled.div`
  h1 {
    margin-bottom: 40px;
    font-weight: 700;
  }
  & > div:not(:last-of-type) {
    border-bottom: 1px solid #e5e5e5;
    padding: 20px 0;

    p {
      font-size: 24px;
      font-weight: 700;
    }

    &:first-of-type {
      border-top: 1px solid #e5e5e5;
    }
  }
`;
