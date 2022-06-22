import React, { Component } from 'react';
import styled from 'styled-components';

export class Header extends Component {
  render() {
    return <HeaderWrapper>Header</HeaderWrapper>;
  }
}

export default Header;

const HeaderWrapper = styled.div`
  height: 80px;
  padding: 10px 20px;
`;
