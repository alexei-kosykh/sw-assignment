import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { nanoid } from 'nanoid';

import { default as defaultImage } from '../../assets/default.png';

export class ImageInCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageIndex: 0,
      image: this.props.images[0],
    };
  }

  slideAheadImage = (index, images) => {
    if (index === images.length - 1) {
      this.setState({ imageIndex: 0, image: images[0] });
    } else {
      this.setState((prevState) => ({
        imageIndex: prevState.imageIndex + 1,
        image: images[prevState.imageIndex + 1],
      }));
    }
  };

  slideBackImage = (index, images) => {
    if (index === 0) {
      this.setState({
        imageIndex: images.length - 1,
        image: images[images.length - 1],
      });
    } else {
      this.setState((prevState) => ({
        imageIndex: prevState.imageIndex - 1,
        image: images[prevState.imageIndex - 1],
      }));
    }
  };
  render() {
    return (
      <StyledImageCart elemSize={this.props.elemSize}>
        <div>
          <div className="image-cart">
            <img
              className="image-cart"
              key={nanoid()}
              src={this.state.image}
              alt=""
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src = `${defaultImage}`;
              }}
            />
            <div className="flipping-block">
              <svg
                onClick={() =>
                  this.slideBackImage(this.state.imageIndex, this.props.images)
                }
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="24" fill="black" fillOpacity="0.73" />
                <path
                  d="M14.25 6.06857L8.625 11.6876L14.25 17.3066"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
                onClick={() =>
                  this.slideAheadImage(this.state.imageIndex, this.props.images)
                }
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
        </div>
      </StyledImageCart>
    );
  }
}

export default ImageInCart;

const StyledImageCart = styled.div`
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
          height: 190px;

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

            top: 0;
            left: 0;
          }
          .flipping-block {
            position: absolute;
            display: flex;

            bottom: 15px;
            right: 10px;
          }
        `;
      default:
        return css``;
    }
  }}
`;