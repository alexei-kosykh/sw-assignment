import React, { Component } from 'react';
import styled from 'styled-components';

export class Button extends Component {
  render() {
    return <StyledButton>Button</StyledButton>;
  }
}

export default Button;

const StyledButton = styled.button`
  background-color: green;
`;
