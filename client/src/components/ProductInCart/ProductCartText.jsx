import { Component } from 'react';
import { connect } from 'react-redux';
import { nanoid } from 'nanoid';

import { Button } from '../';

import { StyledTextItem } from '../../GeneralStyles';

export class ProductCartText extends Component {
  render() {
    const { name, brand, attr } = this.props.item;
    return (
      <StyledTextItem elemSize={this.props.elemSize}>
        <div>
          <h2>{name}</h2>
          <h3>{brand}</h3>
          <p>
            {this.props.currencyType}
            {this.props.price}
          </p>

          {attr.map((item) => {
            return (
              <div key={nanoid()}>
                <h4 key={nanoid()}>{item.nameAttr}:</h4>
                <div key={nanoid()}>
                  {item.attrValue.map((attr, index) => {
                    return (
                      <Button
                        key={nanoid()}
                        variant={`${item.nameAttr.toLowerCase()}`}
                        size={`${
                          item.nameAttr.toLowerCase() === 'color'
                            ? item.nameAttr.toLowerCase()
                            : ''
                        }${this.props.elemSize}`}
                        value={`${attr.value}`}
                        active={index === item.attrIndex ? 'active' : false}
                        disabled
                      ></Button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </StyledTextItem>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    price:
      state.cart.items[props.item.id][props.item.idAttr]?.prices[props.index]
        .amount,
  };
};

export const ProductCartTextContainer =
  connect(mapStateToProps)(ProductCartText);
