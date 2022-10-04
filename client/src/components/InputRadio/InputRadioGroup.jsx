import { Component, createRef } from 'react';
import { nanoid } from 'nanoid';

import { InputRadio } from './';
export class InputRadioGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.myRef = createRef();
  }

  componentDidMount() {
    const dataInput = this.myRef.current.props;
    this.setState({
      [dataInput.index]: {
        idTarget: 0,
      },
    });

    this.props.attrSelected[dataInput.index] = {
      nameAttr: this.props.attr.name,
      attrValue: this.props.attr.items,
      attrIndex: 0,
    };
  }

  onSelectType = (e) => {
    const dataInput = this.myRef.current.props;
    this.setState({
      [dataInput.index]: {
        idTarget: +e.target.value,
      },
    });
    this.props.attrSelected[dataInput.index] = {
      nameAttr: this.props.attr.name,
      attrValue: this.props.attr.items,
      attrIndex: +e.target.value,
    };
  };
  render() {
    return (
      <>
        {this.props.attr.items.map((item, key) => (
          <InputRadio
            key={nanoid()}
            id={`${this.props.productId
              .toLowerCase()
              .replace(/\s/g, '')}-toggle-${this.props.attr.name
              .toLowerCase()
              .replace(/\s/g, '')}-${item.value}`}
            ref={this.myRef}
            onClick={this.onSelectType}
            value={item.value}
            index={this.props.index}
            indexInput={key}
            state={this.state}
            variant={this.props.attr.name.toLowerCase()}
            size={`${this.props.attr.name.toLowerCase()}Default`}
            color={this.props.attr.name.toLowerCase()}
          />
        ))}
      </>
    );
  }
}

export default InputRadioGroup;
