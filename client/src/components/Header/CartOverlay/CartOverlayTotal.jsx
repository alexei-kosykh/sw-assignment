import { Component } from 'react';
import { connect } from 'react-redux';

export class CartOverlayTotal extends Component {
  render() {
    return (
      <div className={'total-price'}>
        <strong>Total</strong>
        <strong>
          {this.props.currencyType}
          {this.props.totalPrice[this.props.index].amount}
        </strong>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    index: state.currency.index,
    currencyType: state.currency.currency,
    totalPrice: state.cart.totalPrice,
  };
};

export const COTotalContainer = connect(mapStateToProps)(CartOverlayTotal);
