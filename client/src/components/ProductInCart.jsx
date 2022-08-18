import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { store } from '../redux/store';

import { nanoid } from 'nanoid';

import { Button } from './';
import { StyledTextItem } from '../GeneralStyles';

export class ProductInCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: this.props.images[0],
    };
  }

  slideAheadImage = (index) => {
    this.setState = {
      image: this.props.images[index + 1],
    };
  };

  slideBackImage = (index) => {
    this.setState = {
      image: this.props.images[index - 1],
    };
  };

  incrementCount = (e) => {
    console.log(e.target);
    // store.dispatch(
    //   plusCartItem(

    //   )
    // );
  };
  decrementCount = () => {};

  render() {
    console.log(this.props);
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
          <StyledImageCart elemSize={this.props.elemSize}>
            <div>
              <Button
                variant={'counter'}
                size={`counter${this.props.elemSize}`}
                value={'+'}
                onClick={(e) => this.incrementCount()}
              ></Button>
              <p>{this.props.count}</p>
              <Button
                variant={'counter'}
                size={`counter${this.props.elemSize}`}
                value={'-'}
                onClick={this.decrementCount}
              ></Button>
            </div>
            <div
              className="image-cart"
              style={{ backgroundImage: `url(${this.state.image})` }}
            >
              <div className="flipping-block">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="24"
                    height="24"
                    fill="black"
                    fillOpacity="0.73"
                  />
                  <path
                    d="M14.25 6.06857L8.625 11.6876L14.25 17.3066"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="24"
                    height="24"
                    transform="matrix(-1 0 0 1 24 0)"
                    fill="black"
                    fillOpacity="0.73"
                  />
                  <path
                    d="M9.75 6.06808L15.375 11.6871L9.75 17.3062"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </StyledImageCart>
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

  & > div:first-of-type {
    display: flex;
    justify-content: space-between;
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

  ${(props) => {
    switch (props.elemSize) {
      case 'Small':
        return css`
          p {
            font-size: 16px;
            font-weight: 700;
          }

          & > div:first-child div h1 {
            font-size: 10px;
          }
        `;

      case 'Default':
        return css`
          border-bottom: 1px solid #e5e5e5;
          padding: 20px 0;

          &:first-of-type {
            border-top: 1px solid #e5e5e5;
          }

          p {
            font-size: 24px;
            font-weight: 700;
          }
        `;
      default:
        return css``;
    }
  }}
`;

const StyledImageCart = styled.div`
  display: flex;
  gap: 8px;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    button {
      position: relative;
      font-size: 20px;
      font-weight: lighter;
    }
  }

  .image-cart {
    background-position: 50% 50%;
    background-size: contain;
    background-repeat: no-repeat;
  }

  svg:first-child {
    margin-right: 7px;
  }

  svg:hover {
    cursor: pointer;
    rect {
      fill: #4e4e4e;
    }
  }

  ${(props) => {
    switch (props.elemSize) {
      case 'Small':
        return css`
          margin-bottom: 40px;
          & {
            height: 190px;
          }
          .image-cart {
            width: 120px;
            height: 190px;

            bottom: 15px;
            right: 25px;
          }
          .flipping-block {
            display: none;
          }
        `;

      case 'Default':
        return css`
          .image-cart {
            position: relative;
            width: 200px;
            height: 290px;

            bottom: 15px;
            right: 25px;
          }
          .flipping-block {
            position: absolute;
            display: flex;

            bottom: 15px;
            right: 25px;
          }
        `;
      default:
        return css``;
    }
  }}
`;
