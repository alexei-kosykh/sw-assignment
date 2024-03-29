import { Component } from 'react';
import { connect } from 'react-redux';
import { nanoid } from 'nanoid';
import styled from 'styled-components';

import { store } from '../../redux/store';
import { getInfoForOrder } from '../../redux/actions/cart';

import Button from '../Button';

export class ProductResult extends Component {
  countTax = (totalPrice) => +(totalPrice * 0.21).toFixed(2);

  createOrder = (totalCount, totalPrice, index) => {
    store.dispatch(
      getInfoForOrder(totalCount, totalPrice, index, this.countTax)
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
