import React, { Component } from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';

import { Button, InputRadioGroup } from '..';
import { StyledTextItem } from '../../GeneralStyles';
import { store } from '../../redux/store';
import { addProductToCart } from '../../redux/actions/cart';

export class ProductDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idArrayAttributes: 0,
      totalPrice: 0,
      addProduct: false,
    };
    this.productToCart = [];
    this.attributes = [];

    this.currency = this.props.product.prices?.map((item) => item.currency);
  }

  formatCurrency(amount) {
    return new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency: !this.currency ? 'USD' : this.currency[0],
    }).format(amount);
  }

  formatDescription(string) {
    return new DOMParser()
      .parseFromString(string, 'text/html')
      .getElementsByTagName('div')[0];
  }

  generateProductInfo(id, idAttr) {
    this.productToCart[id] = {
      [idAttr]: {
        name: this.props.product.name,
        brand: this.props.product.brand,
        attr: this.attributes.map((item) => item),
        prices: this.props.product.prices,
        pricesDefault: this.props.product.prices,
        images: this.props.product.gallery,
        idAttr: idAttr,
        id: id,
      },
    };
  }

  addToCart = () => {
    const idCurrentProduct = this.props.product.name
      ?.toLowerCase()
      .replace(/\s/g, '');
    const idCurrentAttributes = this.attributes
      .map((item) => item.attrIndex)
      .join('');
    this.generateProductInfo(idCurrentProduct, idCurrentAttributes);
    store.dispatch(
      addProductToCart(
        this.productToCart[idCurrentProduct],
        idCurrentProduct,
        idCurrentAttributes
      )
    );
    this.setState({ addProduct: false });
  };

  render() {
    return (
      <StyledProductDescription>
        <StyledTextItem elemSize={this.props.elemSize}>
          <h2>{this.props.product.name}</h2>
          <h3>{this.props.product.brand}</h3>
          {this.props.product.attributes?.map((attr, key) => (
            <div key={nanoid()}>
              <h4 key={nanoid()}>{attr.name}:</h4>
              <div key={nanoid()}>
                <InputRadioGroup
                  attr={attr}
                  index={key}
                  attrSelected={this.attributes}
                />
              </div>
            </div>
          ))}
          <h4>PRICE:</h4>
          <p>
            {`${this.props.currencyType} ${
              this.props.product.prices?.[this.props.index].amount
            }`}
          </p>
          <Button
            variant="primary"
            size="primaryDefault"
            value="Add to cart"
            onClick={this.addToCart}
          ></Button>
          <div
            dangerouslySetInnerHTML={{ __html: this.props.product.description }}
          ></div>
        </StyledTextItem>
      </StyledProductDescription>
    );
  }
}

export default ProductDescription;

const StyledProductDescription = styled.div`
  & > div > button {
    margin: 30px 0;
    text-transform: uppercase;
  }

  & > div > div:last-child {
    padding-right: 20px;
    max-height: 17vh;
    overflow-y: scroll;
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
