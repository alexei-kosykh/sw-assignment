import React, { Component } from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';

import Button from './Button';

export class ProductResult extends Component {
  render() {
    return (
      <StyledProductResult>
        <p>
          Tax 21%: <strong>$42.00</strong>
        </p>
        <p>
          Quantity: <strong>3</strong>
        </p>
        <p>
          Total: <strong>$200.00</strong>
        </p>
        <Button
          key={nanoid()}
          variant={'primary'}
          size={`primaryDefault`}
          value={'ORDER'}
        ></Button>
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

  button {
    margin: 15px 0;
    width: 280px;
    height: 43px;
  }
`;
