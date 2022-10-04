import { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import ImageInCart from './ImageInCart';
import { CounterInCartContainer, ProductCartTextContainer } from '.';

export class ProductInCart extends Component {
  render() {
    return (
      <>
        {this.props.controlDeleteItem && (
          <StyledProductInCart>
            <ProductCartTextContainer
              elemSize={this.props.elemSize}
              item={this.props.item}
              index={this.props.index}
              currencyType={this.props.currencyType}
            />
            <div>
              <CounterInCartContainer
                item={this.props.item}
                elemSize={this.props.elemSize}
              />
              <ImageInCart
                elemSize={this.props.elemSize}
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
