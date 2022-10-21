import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Navigation, Actions } from './';

import { mainLogo } from '../../assets/svg-icons';

export class Header extends Component {
  render() {
    return (
      <StyledHeaderWrapper>
        <Link to="/">
          <Navigation />
        </Link>
        <Link to="/">{mainLogo}</Link>
        <Actions />
      </StyledHeaderWrapper>
    );
  }
}

export default Header;

const StyledHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  z-index: 10;
  top: 0;

  background-color: #ffffff;

  height: 80px;
  margin-bottom: 45px;

  .blackout::after {
    content: '';
    position: absolute;
    right: -8.1%;
    top: 80px;
    bottom: 0;
    width: 100vw;
    height: calc(100vh - 80px);
    margin-left: 0;
    background-color: #39374838;
    z-index: 50;
  }

  & > img {
    cursor: pointer;
  }

  & > a {
    width: 40%;
  }
`;
