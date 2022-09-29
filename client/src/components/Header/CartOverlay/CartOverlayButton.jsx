import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getInfoForOrder } from '../../../redux/actions/cart';
import { store } from '../../../redux/store';

import { Link } from 'react-router-dom';
import { Button } from '../..';

export class CartOverlayButton extends Component {
  countTax = (totalPrice) => +(totalPrice * 0.21).toFixed(2);
  createOrder = (totalCount, totalPrice, items) => {
    store.dispatch(
      getInfoForOrder(
        totalCount,
        totalPrice,
        items,
        this.props.index,
        this.countTax
      )
    );
  };
  render() {
    return (
      <div>
        <Link to={'/cart'}>
          <Button
            key={nanoid()}
            size={`primaryMiddle`}
            value={'View bag'}
            onClick={this.props.toogleModalCart}
          />
        </Link>
        <Link to={'/'}>
          <Button
            key={nanoid()}
            variant={'primary'}
            size={`primaryMiddle`}
            value={'Check out'}
            onClick={() =>
              this.createOrder(
                this.props.totalCount,
                this.props.totalPrice,
                this.props.items
              )
            }
          />
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    index: state.currency.index,
    items: state.cart.items,
    totalPrice: state.cart.totalPrice,
    totalCount: state.cart.totalCount,
  };
};

export const COButtonContainer = connect(mapStateToProps)(CartOverlayButton);
