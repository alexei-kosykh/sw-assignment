import React, { Component } from 'react';

import styled from 'styled-components';

import currency from '../../assets/currency.png';

export class CurrencySwitcher extends Component {
  render() {
    return (
      <StyledCurrency>
        <img src={currency} alt="currency" />
        <svg
          width="8"
          height="4"
          viewBox="0 0 8 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 0.5L4 3.5L7 0.5"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </StyledCurrency>
    );
  }
}

export default CurrencySwitcher;

const StyledCurrency = styled.div`
  display: flex;
  align-items: center;

  &:active svg {
    transform: rotate(180deg);
    transition: transform 0.7s;
    &.rotated {
      transform: rotate(0deg);
    }
  }

  /* &:hover svg path {
    fill: #5ece7b;
  } */
`;
