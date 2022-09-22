import React, { Component } from 'react';
import styled from 'styled-components';
import { nanoid } from '@reduxjs/toolkit';
import { ProductInCart, ProductResult } from '../components';

import { StyledTitle } from '../GeneralStyles';
import Button from '../components/Button';
import emptyCart from '../assets/empty-cart.png';

import { store } from '../redux/store';
import { getInfoForOrder } from '../redux/actions/cart';
export class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currencyObj: store.getState().currency,
    };
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(this.switchCurrency);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  switchCurrency = () => {
    this.setState({
      currencyObj: store.getState().currency,
    });
  };

  getInfoForCart = () => {
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

  countTax = (totalPrice) =>
    +(totalPrice[this.state.currencyObj?.index]?.amount * 0.21).toFixed(2);

  createOrder = (totalCount, totalPrice, items) => {
    store.dispatch(
      getInfoForOrder(
        totalCount,
        totalPrice,
        items,
        this.state.currencyObj?.index,
        this.getInfoForCart,
        this.countTax
      )
    );
  };

  render() {
    const { items, totalCount, totalPrice } = store.getState().cart;

    return (
      <StyledCart>
        <StyledTitle>Cart</StyledTitle>
        {totalCount ? (
          <>
            {this.getInfoForCart().map((item, key) => (
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
            <ProductResult
              currencyType={this.state.currencyObj}
              totalPrice={totalPrice[this.state.currencyObj?.index]?.amount}
              totalCount={totalCount}
              countTax={() => this.countTax(totalPrice)}
            />
            <Button
              key={nanoid()}
              onClick={() => this.createOrder(totalCount, totalPrice, items)}
              variant={'primary'}
              size={`primaryDefault`}
              value={'ORDER'}
            ></Button>
          </>
        ) : (
          <p>
            <img src={emptyCart} alt="Empty cart" />
            <p>Cart is empty</p>
          </p>
        )}
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

  & > button {
    margin: 15px 0;
    width: 280px;
    height: 43px;
  }

  p > img {
    width: 60vw;

    @media (min-width: 1280px) {
      width: 40vw;
    }
  }

  & > p {
    text-align: center;
  }

  & > p > p {
    font-size: 25px;
  }
`;
