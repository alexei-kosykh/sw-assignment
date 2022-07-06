import React, { Component } from 'react';

import styled from 'styled-components';

export class CurrencySwitcher extends Component {
  render() {
    return (
      <StyledCurrency>
        <div>
          <p>
            <strong>Э EUR</strong>
          </p>
        </div>
        <div>
          <p>
            <strong>$ USD</strong>
          </p>
        </div>
        <div>
          <p>
            <strong>Y JPY</strong>
          </p>
        </div>
      </StyledCurrency>
    );
  }
}

export default CurrencySwitcher;

const StyledCurrency = styled.div`
  position: absolute;
  top: 50px;
  right: -15px;
  z-index: 100;
  box-shadow: 0px 7px 29px -2px rgba(34, 60, 80, 0.11);
  width: 115px;
  background-color: #ffffff;

  div {
    width: 100%;
  }

  div:hover,
  div:focus,
  div:active {
    background-color: #eeeeee;
  }

  strong {
    font-weight: 500;
  }
  p {
    padding: 15px 20px;
  }
`;
