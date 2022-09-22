import React, { Component } from 'react';
import styled from 'styled-components';

import { nanoid } from 'nanoid';
import { Button } from '../';
import { StyledTextItem } from '../../GeneralStyles';

import ImageInCart from './ImageInCart';
import CounterInCart from './CounterInCart';

export class ProductInCart extends Component {
  render() {
    return (
      <>
        <StyledProductInCart>
          <StyledTextItem elemSize={this.props.elemSize}>
            <div>
              <h2>{this.props.name}</h2>
              <h3>{this.props.brand}</h3>
              <p>
                {this.props.currencyType}
                {this.props.price}
              </p>

              {this.props.attr.map((item) => {
                return (
                  <div key={nanoid()}>
                    <h4 key={nanoid()}>{item.nameAttr}:</h4>
                    <div key={nanoid()}>
                      {item.attrValue.map((attr, index) => {
                        return (
                          <Button
                            key={nanoid()}
                            variant={`${item.nameAttr.toLowerCase()}`}
                            size={`${item.nameAttr.toLowerCase()}${
                              this.props.elemSize
                            }`}
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
          <div>
            <CounterInCart
              id={this.props.id}
              idAttr={this.props.idAttr}
              elemSize={this.props.elemSize}
              count={this.props.count}
            />
            <ImageInCart
              elemSize={this.props.elemSize}
              images={this.props.images}
              count={this.props.count}
            />
          </div>
        </StyledProductInCart>
      </>
    );
  }
}

export default ProductInCart;

const StyledProductInCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  & > div {
    display: flex;
  }

  h3 {
    margin-bottom: 10px;
  }
  h4 {
    padding-top: 10px;
  }

  h4 + div {
    display: flex;
    flex-wrap: wrap;
  }
`;
