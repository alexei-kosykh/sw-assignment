import React, { Component } from 'react';
import styled from 'styled-components';

import { CartOverlay, CurrencySwitcher } from './';
export class Actions extends Component {
  constructor(props) {
    super(props);
    this.state = { CartOverlay: true, CurrencySwitcher: false };
  }

  toogleModalCart() {
    this.setState.CartOverlay = {
      CartOverlay: !this.state.CartOverlay,
    };
  }
  toogleCurrency() {
    this.setState.CurrencySwitcher = {
      CurrencySwitcher: !this.state.CurrencySwitcher,
    };
  }
  render() {
    return (
      <StyledActions>
        <StyledCurrency>
          <svg
            width="11"
            height="18"
            viewBox="0 0 11 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.13 14.798L6.138 14.816V17.426H5.13V14.798ZM5.22 14.6V3.638L6.03 3.512V14.636L5.22 14.6ZM5.13 0.829999H6.138V3.404L5.13 3.53V0.829999ZM9.144 5.402C9 5.234 8.808 5.072 8.568 4.916C8.328 4.76 8.058 4.622 7.758 4.502C7.458 4.37 7.128 4.268 6.768 4.196C6.42 4.112 6.054 4.07 5.67 4.07C4.686 4.07 3.96 4.256 3.492 4.628C3.024 5 2.79 5.51 2.79 6.158C2.79 6.614 2.91 6.974 3.15 7.238C3.39 7.502 3.756 7.718 4.248 7.886C4.752 8.054 5.388 8.228 6.156 8.408C7.044 8.6 7.812 8.834 8.46 9.11C9.108 9.386 9.606 9.758 9.954 10.226C10.302 10.682 10.476 11.294 10.476 12.062C10.476 12.674 10.356 13.208 10.116 13.664C9.888 14.108 9.564 14.48 9.144 14.78C8.724 15.068 8.232 15.284 7.668 15.428C7.104 15.56 6.492 15.626 5.832 15.626C5.184 15.626 4.548 15.56 3.924 15.428C3.312 15.284 2.73 15.08 2.178 14.816C1.626 14.552 1.11 14.222 0.63 13.826L1.404 12.458C1.596 12.662 1.842 12.866 2.142 13.07C2.454 13.262 2.802 13.442 3.186 13.61C3.582 13.778 4.008 13.916 4.464 14.024C4.92 14.12 5.388 14.168 5.868 14.168C6.78 14.168 7.488 14.006 7.992 13.682C8.496 13.346 8.748 12.86 8.748 12.224C8.748 11.744 8.604 11.36 8.316 11.072C8.04 10.784 7.626 10.544 7.074 10.352C6.522 10.16 5.85 9.968 5.058 9.776C4.194 9.56 3.468 9.326 2.88 9.074C2.292 8.81 1.848 8.468 1.548 8.048C1.26 7.628 1.116 7.082 1.116 6.41C1.116 5.594 1.314 4.904 1.71 4.34C2.106 3.776 2.652 3.35 3.348 3.062C4.044 2.774 4.83 2.63 5.706 2.63C6.282 2.63 6.816 2.69 7.308 2.81C7.812 2.93 8.28 3.098 8.712 3.314C9.144 3.53 9.54 3.788 9.9 4.088L9.144 5.402Z"
              fill="#1D1F22"
            />
          </svg>
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
          {this.state.CartOverlay && <CurrencySwitcher />}
        </StyledCurrency>

        <StyledCart onClick={this.toogleModalCart()}>
          <svg
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
          {this.state.CartOverlay && <CartOverlay />}
        </StyledCart>
      </StyledActions>
    );
  }
}

export default Actions;

const StyledActions = styled.div`
  display: flex;
`;

const StyledCart = styled.div`
  position: relative;
  display: flex;
  margin-left: 15px;
  align-self: center;

  &:active > svg path,
  &:hover > svg path {
    fill: #5ece7b;
  }
`;

const StyledCurrency = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  &:hover svg:first-child path {
    fill: #5ece7b;
  }
  &:hover svg:last-of-type path {
    stroke: #5ece7b;
  }

  svg:last-of-type {
    margin-left: 5px;
  }

  &:active svg:last-of-type {
    transform: rotate(180deg);
    transition: transform 0.7s;
    &.rotated {
      transform: rotate(0deg);
    }
  }
`;
