import React, { Component } from 'react';
import styled, { css } from 'styled-components';

export class Button extends Component {
  render() {
    return (
      <StyledButton
        variant={this.props.variant}
        size={this.props.size}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </StyledButton>
    );
  }
}

export default Button;

const StyledButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ size }) => {
    switch (size) {
      case 'sizeDefault':
        return css`
          width: 63px;
          height: 45px;
        `;
      case 'sizeSmall':
        return css`
          width: 63px;
          height: 45px;
        `;
      case 'primaryDefault':
        return css`
          padding: 13px 90px;
        `;
      case 'primarySmall':
        return css`
          width: 63px;
          height: 45px;
        `;
      case 'colorDefault':
        return css`
          width: 63px;
          height: 45px;
        `;
      case 'colorSmall':
        return css`
          width: 63px;
          height: 45px;
        `;
      default:
        return css``;
    }
  }}

  ${(props) => {
    switch (props.variant) {
      case 'primary':
        return css`
          color: #ffffff;
          background-color: #5ece7b;
          &:hover {
            background-color: #40a05a;
          }
        `;
      case 'size':
        return css`
          color: #2b2b2b;
          background-color: #ffffff;
          border: 1px solid #1d1f22;
          &:hover,
          &:active {
            filter: invert(1);
          }
        `;
      case 'color':
        return css`
          background-color: transparent;
          border: none;
          box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px;
        `;
      default:
        return css``;
    }
  }}
`;
