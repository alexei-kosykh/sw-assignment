import React, { Component } from 'react';
import styled from 'styled-components';

export class Navigation extends Component {
  render() {
    return (
      <StyledNavigation>
        <div>WOMEN</div>
        <div>MEN</div>
        <div>KIDS</div>
      </StyledNavigation>
    );
  }
}

export default Navigation;

const StyledNavigation = styled.div`
  display: flex;
  cursor: pointer;

  font-weight: 600;

  div:not(:last-child) {
    margin-right: 3vw;
  }

  div:hover {
    border-bottom: 2px solid #5ece7b;
    color: #5ece7b;
  }

  div {
    display: inherit;
    align-items: center;
    height: 80px;
    border-bottom: 2px solid #ffffff;
    transition: all 0.2s 0.05s linear;
  }
`;
