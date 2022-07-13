import React, { Component } from 'react';
import styled, { css } from 'styled-components';

export class InputRadio extends Component {
  render() {
    return (
      <StyledInputRadio
        variant={this.props.variant}
        size={this.props.size}
        color={this.props.value}
      >
        <input
          id={this.props.id}
          type="radio"
          value={this.props.indexInput}
          onChange={this.props.onClick}
          checked={
            this.props.state[this.props.index]?.idTarget ===
            this.props.indexInput
          }
        />
        <label htmlFor={this.props.id}>
          {this.props.variant === 'color' || this.props.value}
        </label>
      </StyledInputRadio>
    );
  }
}

export default InputRadio;

const StyledInputRadio = styled.div`
  input[type='radio'] {
    display: none;
  }

  label {
    display: inline-block;
    padding: 0px 15px;
    line-height: 34px;
    border: 1px solid #999;
    border-radius: 6px;
    user-select: none;
  }

  input[type='radio']:checked + label {
    background: #ffe0a6;
  }

  label:hover {
    color: #666;
  }

  input[type='radio']:disabled + label {
    background: #efefef;
    color: #666;
  }

  /* ${({ size }) => {
    switch (size) {
      case 'colorDefault':
        return css`
          label:before {
            content: '';
            display: inline-block;
            position: absolute;
            left: 0;
            bottom: 1px;
            width: 32px;
            height: 32px;
            &:hover {
              height: 29px;
              width: 29px;
            }
            &:active,
            &:focus,
            input[type='radio']:checked + label:before {
              width: 34px;
              height: 34px;
            }
          }
        `;
      case 'colorSmall':
        return css`
          label:before {
            width: 20px;
            height: 20px;

            &:active,
            &:focus,
            input[type='radio']:checked + label:before {
              width: 22px;
              height: 22px;
            }
          }
        `;
      case 'sizeSmall':
      case 'capacitySmall':
        return css`
          label:before {
            width: 24px;
            height: 24px;
          }
        `;
      case 'sizeDefault':
      case 'capacityDefault':
      default:
        return css`
          input[type='radio'] {
            width: 63px;
            height: 45px;
          }
        `;
    }
  }}

  ${(props) => {
    switch (props.variant) {
      case 'color':
        return css`
          input[type='radio'] {
            background-color: ${(props) => props.color};
            box-shadow: 0px 0px 1px 1px rgba(40, 118, 73, 0.14) inset;
            align-self: center;
            outline: 0px solid #5ece7b;
            &:hover {
              box-shadow: 0px 0px 8px 1px rgba(34, 60, 80, 0.18) inset;
              transition: all 0.2s ease-in-out;
            }
            &:active,
            &:focus {
              outline: 1px solid #5ece7b;
              outline-offset: 1px;
              transition: all 0.2s ease-in-out;
            }
          }
        `;
      case 'size':
      case 'capacity':
      default:
        return css`
          input[type='radio'] {
            color: #2b2b2b;
            background-color: #ffffff;
            border: 1px solid #1d1f22;
            &:hover,
            &:active,
            &:focus {
              filter: invert(1);
            }
          }
        `;
    }
  }} */
`;
