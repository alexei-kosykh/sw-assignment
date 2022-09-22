import React, { Component } from 'react';
import styled from 'styled-components';
import { store } from '../../redux/store';

import { CartOverlay, CurrencySwitcher } from '..';
export class Actions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currencyObj: store.getState().currency,
      cartOverlay: false,
      currencySwitcher: false,
    };
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.switchCurrency());
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    this.unsubscribe();

    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  switchCurrency = () => {
    this.setState({
      currencyObj: store.getState().currency,
    });
  };

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

  render() {
    return (
      <div className={`${this.state.cartOverlay && 'blackout'}`}>
        <StyledActions ref={this.setWrapperRef}>
          <StyledCurrency>
            <div onClick={this.toogleCurrency}>
              <b>{this.state.currencyObj.currency}</b>
              <svg
                className={`${this.state.currencySwitcher && 'rotated'}`}
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
            </div>

            {this.state.currencySwitcher && (
              <CurrencySwitcher
                switchCurrency={this.switchCurrency}
                toogleCurrency={this.toogleCurrency}
              />
            )}
          </StyledCurrency>

          <StyledCart>
            <svg
              onClick={this.toogleModalCart}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.5613 4.87359C19.1822 4.41031 18.5924 4.12873 17.9821 4.12873H5.15889L4.75914 2.63901C4.52718 1.77302 3.72769 1.16895 2.80069 1.16895H0.653099C0.295301 1.16895 0 1.45052 0 1.79347C0 2.13562 0.294459 2.418 0.653099 2.418H2.80069C3.11654 2.418 3.39045 2.61936 3.47434 2.92139L6.04306 12.7077C6.27502 13.5737 7.07451 14.1778 8.00152 14.1778H16.4028C17.3289 14.1778 18.1507 13.5737 18.3612 12.7077L19.9405 6.50575C20.0877 5.941 19.9619 5.33693 19.5613 4.87365L19.5613 4.87359ZM18.6566 6.22252L17.0773 12.4245C16.9934 12.7265 16.7195 12.9279 16.4036 12.9279H8.00154C7.68569 12.9279 7.41178 12.7265 7.32789 12.4245L5.49611 5.39756H17.983C18.1936 5.39756 18.4042 5.49824 18.5308 5.65948C18.6567 5.81994 18.7192 6.0213 18.6567 6.22266L18.6566 6.22252Z"
                fill="#43464E"
              />
              <path
                d="M8.44437 14.9814C7.2443 14.9814 6.25488 15.9276 6.25488 17.0751C6.25488 18.2226 7.24439 19.1688 8.44437 19.1688C9.64445 19.1696 10.6339 18.2234 10.6339 17.0757C10.6339 15.928 9.64436 14.9812 8.44437 14.9812V14.9814ZM8.44437 17.9011C7.9599 17.9011 7.58071 17.5385 7.58071 17.0752C7.58071 16.6119 7.9599 16.2493 8.44437 16.2493C8.92885 16.2493 9.30804 16.6119 9.30804 17.0752C9.30722 17.5188 8.90748 17.9011 8.44437 17.9011Z"
                fill="#43464E"
              />
              <path
                d="M15.6875 14.9814C14.4875 14.9814 13.498 15.9277 13.498 17.0752C13.498 18.2226 14.4876 19.1689 15.6875 19.1689C16.8875 19.1689 17.877 18.2226 17.877 17.0752C17.8565 15.9284 16.8875 14.9814 15.6875 14.9814ZM15.6875 17.9011C15.2031 17.9011 14.8239 17.5385 14.8239 17.0752C14.8239 16.612 15.2031 16.2493 15.6875 16.2493C16.172 16.2493 16.5512 16.612 16.5512 17.0752C16.5512 17.5188 16.1506 17.9011 15.6875 17.9011Z"
                fill="#43464E"
              />
            </svg>
            <CartOverlay
              currencyObj={this.state.currencyObj}
              cartOverlay={this.state.cartOverlay}
              toogleModalCart={this.toogleModalCart}
            />
          </StyledCart>
        </StyledActions>
      </div>
    );
  }
}

export default Actions;

const StyledActions = styled.div`
  display: flex;
  justify-content: end;
  cursor: pointer;
`;

const StyledCart = styled.div`
  display: flex;
  margin-left: 15px;
  align-self: center;

  .counter {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 21px;
    right: -13px;
    width: 20px;
    height: 20px;
    z-index: 9;

    background-color: #1d1f22;
    border-radius: 50%;

    font-size: 14px;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 200;
    color: white;
  }

  &:active svg path,
  &:hover svg path {
    fill: #5ece7b;
  }

  svg {
    z-index: 10;
  }
`;

const StyledCurrency = styled.div`
  position: relative;

  & > div:first-of-type {
    display: flex;
    align-items: center;
  }

  &:hover b {
    fill: #5ece7b;
    color: #5ece7b;
  }

  b {
    font-size: 19px;
    font-weight: 500;
  }

  &:hover svg:last-of-type path {
    stroke: #5ece7b;
  }

  svg:last-of-type {
    margin-left: 5px;
    transform: rotate(0deg);
    transition: transform 0.7s;
    &.rotated {
      transform: rotate(-180deg);
    }
  }
`;
