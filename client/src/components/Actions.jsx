import React, { Component } from 'react';
import styled from 'styled-components';

import { CartOverlay, CurrencySwitcher } from './';
export class Actions extends Component {
  render() {
    return (
      <StyledActions>
        <CurrencySwitcher />
        <CartOverlay />
      </StyledActions>
    );
  }
}

export default Actions;

const StyledActions = styled.div`
  display: flex;
  align-items: center;
`;
