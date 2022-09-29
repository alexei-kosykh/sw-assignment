import React, { Component } from 'react';
import styled from 'styled-components';
import { nanoid } from '@reduxjs/toolkit';
import { store } from '../../redux/store';
import { connect } from 'react-redux';

import { getInfoForOrder } from '../../redux/actions/cart';
import Button from '../Button';

export class ProductResult extends Component {
  countTax = (totalPrice) => +(totalPrice * 0.21).toFixed(2);

  createOrder = (totalCount, totalPrice, items, index) => {
    store.dispatch(
      getInfoForOrder(totalCount, totalPrice, items, index, this.countTax)
    );
  };

  render() {
    const totalPrice = this.props.totalPrice[this.props.index].amount;
    return (
      <>
        <StyledProductResult>
          <p>
            Tax 21%:{' '}
            <strong>
              {this.props.currencyType}
              {this.countTax(totalPrice)}
            </strong>
          </p>
          <p>
            Quantity: <strong>{this.props.totalCount}</strong>
          </p>
          <p>
            Total:{' '}
            <strong>
              {this.props.currencyType}
              {totalPrice}
            </strong>
          </p>
        </StyledProductResult>
        <Button
          key={nanoid()}
          onClick={() =>
            this.createOrder(
              this.props.totalCount,
              this.props.totalPrice,
              this.props.items,
              this.props.index
            )
          }
          variant={'primary'}
          size={`Default`}
          value={'ORDER'}
        ></Button>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    index: state.currency.index,
    currencyType: state.currency.currency,
    items: state.cart.items,
    totalCount: state.cart.totalCount,
    totalPrice: state.cart.totalPrice,
  };
};

export const ProductResultContainer = connect(mapStateToProps)(ProductResult);

const StyledProductResult = styled.div`
  margin-top: 30px;

  strong {
    font-weight: 700;
  }

  p,
  p > strong {
    font-size: 24px;
  }
`;
