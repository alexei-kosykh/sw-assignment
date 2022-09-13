import React, { Component } from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';

import defaultImage from '../assets/default.png';

export class ProductGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idImage: 0,
    };
  }

  changeImage = (index) => {
    this.setState({
      idImage: index,
    });
  };

  render() {
    return (
      <StyledProductGallery>
        <StyledSideGallery>
          {this.props.images?.map((item, index) =>
            item !== this.props.images?.[this.state.idImage] ? (
              <img
                key={nanoid()}
                src={item}
                onClick={() => this.changeImage(index)}
                alt=""
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src = `${defaultImage}`;
                }}
              />
            ) : (
              ''
            )
          )}
        </StyledSideGallery>
        <div>
          <img src={this.props.images?.[this.state.idImage]} alt="" />
        </div>
      </StyledProductGallery>
    );
  }
}

export default ProductGallery;

const StyledProductGallery = styled.div`
  display: flex;

  h1,
  h2 {
    font-size: 30px;
  }
  h1,
  h4 {
    font-weight: 600;
  }

  & {
    @media (max-width: 1000px) {
      flex-direction: column;
    }
  }
  & > div {
    @media (max-width: 1000px) {
      display: flex;
      width: 100%;

      img:not(:last-child) {
        margin-right: 12px;
      }
    }
    @media (max-width: 840px) {
      justify-content: center;
    }
  }
`;

const StyledSideGallery = styled.div`
  width: 120px;
  img {
    width: 80px;
    height: 80px;

    cursor: pointer;
    object-fit: cover;
    object-position: 0% 0%;
  }
  img:not(:last-child) {
    margin-bottom: 25px;
  }

  img:hover {
    -webkit-box-shadow: 0px 0px 10px 1px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 0px 10px 1px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 0px 10px 1px rgba(34, 60, 80, 0.2);
  }

  & + div {
    img {
      object-fit: cover;
      object-position: 0% 0%;
      width: 610px;
      height: auto;
      max-height: 80vh;
    }
  }

  & {
    @media (max-width: 1280px) {
      width: 100px;
      img:not(:last-child) {
        margin-bottom: 15px;
      }
      & + div {
        img {
          width: 450px;
          max-height: 50vh;
        }
      }
    }
    @media (max-width: 840px) {
      width: 90vw;
      & + div {
        img {
          width: 90vw;
          max-height: 50vh;
          margin-bottom: 20px;
        }
      }
    }
  }
`;
