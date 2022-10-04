import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Navigation, Actions } from './';

import logo from '../../assets/a-logo.png';

export class Header extends Component {
  render() {
    return (
      <StyledHeaderWrapper>
        <Navigation />
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
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

  & > div {
    width: 40%;
  }
`;
