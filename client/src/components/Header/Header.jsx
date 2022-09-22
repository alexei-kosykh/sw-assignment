import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Navigation, Actions } from '../';

import logo from '../../assets/a-logo.png';

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { cartOverlay: false, currencySwitcher: false };
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef = (node) => {
    this.wrapperRef = node;
  };

  handleClickOutside = (event) => {
    if (
      this.wrapperRef &&
      !this.wrapperRef.contains(event.target) &&
      (this.state.cartOverlay || this.state.currencySwitcher)
    ) {
      this.setState({
        cartOverlay: false,
        currencySwitcher: false,
      });
    }
  };

  toogleModalCart = () => {
    if (this.state.currencySwitcher === true) {
      this.setState({
        cartOverlay: !this.state.cartOverlay,
        currencySwitcher: !this.state.currencySwitcher,
      });
    } else {
      this.setState({
        cartOverlay: !this.state.cartOverlay,
      });
    }
  };

  toogleCurrency = () => {
    if (this.state.cartOverlay === true) {
      this.setState({
        cartOverlay: !this.state.cartOverlay,
        currencySwitcher: !this.state.currencySwitcher,
      });
    } else {
      this.setState({
        currencySwitcher: !this.state.currencySwitcher,
      });
    }
  };

  // toggleModal = (currentModal, otherModal) => {
  //   if (this.props.state?.[currentModal] === true) {
  //     this.setState({
  //       [currentModal]: !this.state?.[currentModal],
  //     });
  //   }
  //   this.setState({
  //     [otherModal]: !this.state?.[otherModal],
  //   });
  //   console.log(otherModal, 1);
  // };

  render() {
    return (
      <HeaderWrapper className={`${this.state.cartOverlay && 'blackout'}`}>
        <Navigation />
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <Actions
          currencySwitcher={this.state.currencySwitcher}
          cartOverlay={this.state.cartOverlay}
          toogleCurrency={this.toogleCurrency}
          toogleModalCart={this.toogleModalCart}
          setWrapperRef={this.setWrapperRef}
        />
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
  margin-bottom: 45px;

  &.blackout::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 80px;
    bottom: 0;
    width: 100%;
    height: 100%;
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
