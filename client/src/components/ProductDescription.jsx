import React, { Component } from 'react';
import styled from 'styled-components';
import Button from './Button';
import { nanoid } from 'nanoid';

export class ProductDescription extends Component {
  formatCurrency(amount) {
    return new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  }
  render() {
    return (
      <StyledProductDescription>
        <h1>{this.props.product.name}</h1>
        <h2>Running Short</h2>
        {this.props.product.attributes?.map((attr) => (
          <div key={nanoid()}>
            <h4 key={nanoid()}>{attr.name}:</h4>
            <div key={nanoid()}>
              {attr.items?.map((item) => (
                <Button
                  key={nanoid()}
                  variant={attr.name.toLowerCase()}
                  size={`${attr.name.toLowerCase()}Default`}
                >
                  {item.value}
                </Button>
              ))}
            </div>
          </div>
        ))}

        <h4>PRICE:</h4>
        <p>{this.formatCurrency(this.props.product.prices?.[0].amount)}</p>
        <Button variant="primary" size="primaryDefault">
          Add to cart
        </Button>
        <p>{this.props.product.description}</p>
      </StyledProductDescription>
    );
  }
}

export default ProductDescription;

const StyledProductDescription = styled.div`
  h1,
  h2 {
    font-size: 30px;
  }
  h2 {
    margin-bottom: 40px;
  }
  h1 {
    font-weight: 600;
  }
  h4,
  h4 + p {
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  h4 + p {
    font-size: 24px;
  }
  h4 + div {
    display: flex;
    margin-bottom: 30px;
  }
  h4 + div button:not(:last-child) {
    margin-right: 10px;
  }

  & > button {
    margin: 30px 0;
    text-transform: uppercase;
  }

  & {
    @media (max-width: 840px) {
      & p:last-child {
        margin-bottom: 10vh;
      }
    }
  }
`;
