import React, { Component } from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';

import { Button, InputRadioGroup } from './';
import { StyledTextItem } from '../GeneralStyles';
export class ProductDescription extends Component {
  formatCurrency(amount) {
    return new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  }

  formatDescription(string) {
    return new DOMParser()
      .parseFromString(string, 'text/html')
      .getElementsByTagName('div')[0];
  }

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
                <InputRadioGroup attr={attr} index={key} />
              </div>
            </div>
          ))}
          <h4>PRICE:</h4>
          <p>{this.formatCurrency(this.props.product.prices?.[0].amount)}</p>
          <Button
            variant="primary"
            size="primaryDefault"
            value="Add to cart"
          ></Button>
          <p>{this.props.product.description}</p>
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

  & p:last-child {
    padding-right: 20px;
    max-height: 20vh;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 7px;
      background-color: #f0f0f0;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #5ece7b;
    }
  }

  p:last-child {
    margin-bottom: 30px;
  }
`;
