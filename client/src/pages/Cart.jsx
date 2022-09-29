import React, { Component } from 'react';
import styled from 'styled-components';
import { nanoid } from '@reduxjs/toolkit';
import { ProductInCartContainer, ProductResultContainer } from '../components';
import { connect } from 'react-redux';

import { StyledTitle } from '../GeneralStyles';
import emptyCart from '../assets/empty-cart.png';

import { store } from '../redux/store';

export class Cart extends Component {
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

  render() {
    return (
      <StyledCart>
        <StyledTitle>Cart</StyledTitle>
        {!this.props.emptyCart ? (
          <>
            {this.getInfoForCart().map((item) => (
              <ProductInCartContainer
                key={nanoid()}
                item={item}

                // currencyType={this.currencyObj.currency}
              />
            ))}
            <ProductResultContainer />
          </>
        ) : (
          <div>
            <img src={emptyCart} alt="Empty cart" />
            <p>Cart is empty</p>
          </div>
        )}
      </StyledCart>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    emptyCart: state.cart.totalCount === 0 ? true : false,
  };
};

export const CartContainer = connect(mapStateToProps)(Cart);

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

  div > img {
    width: 60vw;
    margin: 0 auto;

    @media (min-width: 1280px) {
      width: 40vw;
    }
  }

  & > div:last-child {
    text-align: center;
  }

  & > div > p {
    font-size: 25px;
  }
`;
