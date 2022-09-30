import { Component } from 'react';
import { connect } from 'react-redux';
import { nanoid } from 'nanoid';
import styled from 'styled-components';

import { getInfoForOverlay } from '../../../redux/actions/cart';

import { ProductInCartContainer } from '../..';
import {
  COTitleContainer,
  COTotalContainer,
  COButtonContainer,
  COCounterContainer,
} from './';

import emptyCart from '../../../assets/empty-cart.png';

export class CartOverlay extends Component {
  render() {
    console.log('cartOverlay');
    console.log(this.props);
    return (
      <>
        {this.props.hasItems && <COCounterContainer type="cart" />}
        {this.props.cartOverlay && (
          <StyledCartOverlay>
            {this.props.hasItems ? (
              <>
                <COTitleContainer />
                {getInfoForOverlay().map((item) => (
                  <ProductInCartContainer
                    key={nanoid()}
                    item={item}
                    elemSize="Small"
                  />
                ))}
                <COTotalContainer />
                <COButtonContainer
                  toogleModalCart={this.props.toogleModalCart}
                />
              </>
            ) : (
              <span>
                <img src={emptyCart} alt="Empty cart" />
                <p>Cart is empty</p>
              </span>
            )}
          </StyledCartOverlay>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    hasItems: !!state.cart.totalCount,
  };
};

export const CartOverlayContainer = connect(mapStateToProps)(CartOverlay);

const StyledCartOverlay = styled.div`
  cursor: auto;
  position: absolute;
  top: 80px;
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

  & > p {
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
    justify-content: space-between;
  }

  .total-price {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
  }

  span > img {
    width: 100%;
  }

  & > span {
    text-align: center;
  }

  & > span > p {
    font-size: 20px;
  }
`;
