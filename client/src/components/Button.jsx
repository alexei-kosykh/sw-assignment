import React, { Component } from 'react';
import styled, { css } from 'styled-components';

export class Button extends Component {
  render() {
    return (
      <StyledButton
        variant={this.props.variant}
        size={this.props.size}
        color={this.props.value}
        onClick={this.props.onClick}
      >
        {this.props.variant === 'color' || this.props.value}
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
      case 'sizeDefault' && 'capacityDefault':
        return css`
          width: 63px;
          height: 45px;
        `;
      case 'sizeSmall' && 'capacitySmall':
        return css`
          width: 24px;
          height: 24px;
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
          width: 32px;
          height: 32px;
        `;
      case 'colorSmall':
        return css`
          width: 20px;
          height: 20px;
        `;
      case 'counterDefault':
        return css`
          width: 45px;
          height: 45px;
        `;
      case 'counterSmall':
        return css`
          width: 24px;
          height: 24px;
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
          &:hover,
          &:focus {
            background-color: #4fc970;
          }
          &:active {
            outline: 1px solid #5ece7b;
            outline-offset: 1px;
          }
        `;
      case 'size' && 'capacity' && 'counter':
        return css`
          color: #2b2b2b;
          background-color: #ffffff;
          border: 1px solid #1d1f22;
          &:hover,
          &:active,
          &:focus {
            filter: invert(1);
          }
        `;
      case 'color':
        return css`
          background-color: ${(props) => props.color};
          box-shadow: 0px 0px 1px 1px rgba(40, 118, 73, 0.14) inset;
          align-self: center;
          outline: 0px solid #5ece7b;
          &:hover {
            height: 29px;
            width: 29px;
            box-shadow: 0px 0px 8px 1px rgba(34, 60, 80, 0.18) inset;
            transition: all 0.2s ease-in-out;
          }
          &:active,
          &:focus {
            width: 34px;
            height: 34px;
            outline: 1px solid #5ece7b;
            outline-offset: 1px;
            transition: all 0.2s ease-in-out;
          }
        `;
      default:
        return css``;
    }
  }}
`;
