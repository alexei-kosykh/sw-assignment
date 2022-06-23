import React, { Component } from 'react';
import styled from 'styled-components';

import { Navigation, Actions } from './';

import logo from '../assets/a-logo.png';

export class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Navigation />
        <img src={logo} alt="logo" />
        <Actions />
      </HeaderWrapper>
    );
  }
}

export default Header;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 80px;

  & div,
  & > img {
    cursor: pointer;
  }
`;
