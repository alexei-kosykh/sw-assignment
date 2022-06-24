import React, { Component } from 'react';
import styled from 'styled-components';

export class ProductDescription extends Component {

  render() {
    return (
      <StyledProductDescription>
        <h1>Apollo</h1>
        <h2>Running Short</h2>
        <h4>SIZE:</h4>
        <button size></button>
        <h4>COLOR:</h4>
        <button color></button>
        <h4>PRICE:</h4>
        <p>
          {this.props.product.prices[0].currency}
          {this.props.product.prices[0].amount}
        </p>
        <button color="green"></button>
        <p>
          Find stunning women's cocktail dresses and party dresses. Stand out in
          lace and metallic cocktail dresses and party dresses from all your
          favorite brands.
        </p>
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
  h1 {
    font-weight: 600;
  }
  h4,
  h4 + p {
    font-size: 18px;
    font-weight: 700;
  }
  h4 + p {
    font-size: 24px;
  }
`;
