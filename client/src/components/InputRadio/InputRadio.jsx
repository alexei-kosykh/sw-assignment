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
  display: flex;
  input[type='radio'] {
    display: none;
  }

  label {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  &:not(:last-of-type) {
    margin-right: 10px;
  }

  ${(props) => {
    switch (props.size) {
      case 'colorDefault':
        return css`
          label {
            width: 32px;
            height: 32px;
            &:hover {
              height: 29px;
              width: 29px;
            }
            &:active,
            &:focus {
              width: 34px;
              height: 34px;
            }
          }
          input[type='radio']:checked + label {
            width: 34px;
            height: 34px;
          }
        `;
      case 'colorSmall':
        return css`
          label {
            width: 20px;
            height: 20px;

            &:active,
            &:focus {
              width: 22px;
              height: 22px;
            }
          }
          input[type='radio']:checked + label:before {
            width: 22px;
            height: 22px;
          }
        `;
      case 'sizeSmall':
      case 'capacitySmall':
      case `${props.variant}Small`:
        return css`
          label {
            width: 24px;
            height: 24px;
          }
        `;
      case 'sizeDefault':
      default:
        return css`
          label {
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
          label {
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
          input[type='radio']:checked + label {
            outline: 1px solid #5ece7b;
            outline-offset: 1px;
            transition: all 0.2s ease-in-out;
          }
        `;
      case 'size':
      default:
        return css`
          label {
            border: 1px solid #1d1f22;
            color: #2b2b2b;
            background-color: #ffffff;
            &:hover,
            &:active,
            &:focus {
              filter: invert(1);
            }
          }
          input[type='radio']:checked + label {
            border: 0 solid #1d1f22;
            filter: invert(1);
          }
        `;
    }
  }}
`;
