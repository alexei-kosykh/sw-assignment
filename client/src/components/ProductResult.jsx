import React, { Component } from 'react';
import styled from 'styled-components';

export class ProductResult extends Component {
  render() {
    return (
      <StyledProductResult>
        <p>
          Tax 21%:{' '}
          <strong>
            {this.props.currencyType.currency}
            {this.props.countTax(this.props.totalPrice)}
          </strong>
        </p>
        <p>
          Quantity: <strong>{this.props.totalCount}</strong>
        </p>
        <p>
          Total:{' '}
          <strong>
            {this.props.currencyType.currency}
            {this.props.totalPrice}
          </strong>
        </p>
      </StyledProductResult>
    );
  }
}

export default ProductResult;

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
