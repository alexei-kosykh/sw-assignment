import React, { Component } from 'react';
import styled from 'styled-components';
import { store } from '../../redux/store';
import { nanoid } from 'nanoid';

import { ProductInCart, Button } from '..';

export class CartOverlay extends Component {
  getInfoForOverlay = () => {
    const items = [];
    let key = 0;
    Object.values(this.props.items).map((item) =>
      Object.values(item).map((item) => {
        items[key] = item;
        key++;
      })
    );
    return items;
  };

  render() {
    return (
      <StyledCartOverlay>
        <p>
          <strong>My Bag</strong>, {this.props.totalCount} items
        </p>
        {this.getInfoForOverlay().map((item, key) => (
          <ProductInCart
            key={nanoid()}
            id={item.id}
            idAttr={item.idAttr}
            elemSize="Small"
            name={item.name}
            brand={item.brand}
            attr={item.attr}
            count={item.count}
            price={item.prices[this.props.currencyObj.index].amount}
            images={item.images}
            currencyType={this.props.currencyObj.currency}
          />
        ))}
        <div className={'total-price'}>
          <strong>Total</strong>
          <strong>
            {this.props.currencyObj.currency}
            {this.props.totalPrice[this.props.currencyObj.index]?.amount}
          </strong>
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

  p:nth-child(3) {
    margin-bottom: 10px;
  } // for price in cartOverlay

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

  .total-price {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
  }
`;
