import { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Markup } from 'interweave';

import { checkAllAttributes } from '../redux/actions/cart';

import { Button, ProductAttributes } from '.';

import { StyledTextItem } from '../GeneralStyles';
export class ProductDescription extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      checkSelectAttributes: false,
      attributes: [],
    };
    this.productToCart = [];
  }

  setAttributes = (product, attributes, productToCart, attrLength) => {
    checkAllAttributes(product, attributes, productToCart, attrLength)
      ? this.setState({ checkSelectAttributes: false, attributes: [] })
      : this.setState({ checkSelectAttributes: true });
  };

  render() {
    return (
      <StyledProductDescription>
        <StyledTextItem elemSize={this.props.elemSize}>
          <h2>{this.props.product.brand}</h2>
          <h3>{this.props.product.name}</h3>
          {this.state.checkSelectAttributes && (
            <span>You need to select all the parameters!</span>
          )}

          <ProductAttributes
            productId={this.props.product.id}
            productAttr={this.props.product.attributes}
            attributes={this.state.attributes}
          />
          <h4>PRICE:</h4>
          <p>
            {`${this.props.currencyType} ${
              this.props.product.prices?.[this.props.index].amount
            }`}
          </p>

          {this.props.product.inStock ? (
            <Button
              variant="primary"
              size="primaryDefault"
              value="Add to cart"
              onClick={() =>
                this.setAttributes(
                  this.props.product,
                  this.state.attributes,
                  this.productToCart,
                  this.props.product.attributes.length
                )
              }
            ></Button>
          ) : (
            <Link to="/">
              <Button size="primaryDefault" value="Back to categories"></Button>
            </Link>
          )}

          <div>
            <Markup content={this.props.product.description} />
          </div>
        </StyledTextItem>
      </StyledProductDescription>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    index: state.currency.index,
    currencyType: state.currency.currency,
  };
};

export const ProductDescriptionContainer =
  connect(mapStateToProps)(ProductDescription);

const StyledProductDescription = styled.div`
  a > button,
  & > div > button {
    margin: 30px 0;
    text-transform: uppercase;
  }

  h3 + span {
    color: red;
  }

  & > div > div:last-child {
    padding-right: 20px;
    max-height: 17vh;
    overflow-y: auto;
    margin-bottom: 30px;

    div > ul {
      padding-left: 20px;
    }

    h3 + p:not(:last-of-type) {
      margin-bottom: 30px;
    }
    h3 {
      margin-bottom: 30px;
    }

    &::-webkit-scrollbar {
      width: 7px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #5ece7b;
    }

    &::-webkit-scrollbar-track {
      background-color: #f0f0f0;
    }

    @media (max-width: 840px) {
      max-height: 27vh;
    }
  }

  @media (max-width: 840px) {
    display: flex;
    justify-content: center;

    div:last-child {
      max-width: 370px;
    }
  }
`;
