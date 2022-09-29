import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ImageInCart from './ImageInCart';
import { CounterInCartContainer } from './CounterInCart';
import { ProductCartTextContainer } from './ProductCartText';

export class ProductInCart extends Component {
  constructor(props) {
    super(props);
    this.elemSize = this.props.elemSize;
  }

  render() {
    console.log('ProductInCart')
    return (
      <>
        {this.props.controlDeleteItem && (
          <StyledProductInCart>
            <ProductCartTextContainer
              elemSize={this.elemSize}
              item={this.props.item}
              index={this.props.index}
              currencyType={this.props.currencyType}
            />
            <div>
              <CounterInCartContainer
                item={this.props.item}
                elemSize={this.elemSize}
              />
              <ImageInCart
                elemSize={this.elemSize}
                images={this.props.item.images}
              />
            </div>
          </StyledProductInCart>
        )}
      </>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    index: state.currency.index,
    currencyType: state.currency.currency,
    controlDeleteItem: state.cart.items?.[props.item.id].hasOwnProperty([
      props.item.idAttr,
    ]),
  };
};

export const ProductInCartContainer = connect(mapStateToProps)(ProductInCart);

const StyledProductInCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  & > div {
    display: flex;
  }

  h3 {
    margin-bottom: 10px;
  }
  h4 {
    padding-top: 10px;
  }

  h4 + div {
    display: flex;
    flex-wrap: wrap;
  }
`;
