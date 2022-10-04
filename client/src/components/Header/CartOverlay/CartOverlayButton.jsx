import { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { nanoid } from 'nanoid';

import { store } from '../../../redux/store';
import { getInfoForOrder } from '../../../redux/actions/cart';

import { Button } from '../..';

export class CartOverlayButton extends Component {
  countTax = (totalPrice) => +(totalPrice * 0.21).toFixed(2);
  createOrder = (totalCount, totalPrice) => {
    store.dispatch(
      getInfoForOrder(totalCount, totalPrice, this.props.index, this.countTax)
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
            onClick={this.props.toggleModalCart}
          />
        </Link>
        <Link to={'/'}>
          <Button
            key={nanoid()}
            variant={'primary'}
            size={`primaryMiddle`}
            value={'Check out'}
            onClick={() =>
              this.createOrder(this.props.totalCount, this.props.totalPrice)
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
    totalPrice: state.cart.totalPrice,
    totalCount: state.cart.totalCount,
  };
};

export const COButtonContainer = connect(mapStateToProps)(CartOverlayButton);
