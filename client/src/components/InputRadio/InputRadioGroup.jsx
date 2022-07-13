import { nanoid } from '@reduxjs/toolkit';
import React, { Component } from 'react';
import styled from 'styled-components';
import { InputRadio } from './';

export class InputRadioGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.myRef = React.createRef();
  }

  componentDidMount() {
    const dataInput = this.myRef.current.props;
    this.setState({
      [dataInput.index]: {
        idTarget: 0,
      },
    });
  }

  componentWillUnmount() {
    this.setState = {};
  }

  onSelectType = (e) => {
    const dataInput = this.myRef.current.props;
    this.setState({
      [dataInput.index]: {
        idTarget: +e.target.value,
      },
    });

  };
  render() {
    return (
      <StyledInputRadioGroup>
        {this.props.attr.items.map((item, key) => (
          <InputRadio
            key={nanoid()}
            id={`toogle-${this.props.attr.name
              .toLowerCase()
              .replace(/\s/g, '')}-${item.value}`}
            ref={this.myRef}
            onClick={this.onSelectType}
            value={item.value}
            variant={this.props.attr.name.toLowerCase()}
            index={this.props.index}
            indexInput={key}
            state={this.state}
          />
        ))}
      </StyledInputRadioGroup>
    );
  }
}

export default InputRadioGroup;

const StyledInputRadioGroup = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
