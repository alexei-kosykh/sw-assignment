import React, { Component } from 'react';
import styled from 'styled-components';

import img from '../assets/Image.png';

export class ProductGallery extends Component {

  render() {
    return (
      <StyledProductGallery>
        <StyledSideGallery>
          <img src={img} alt="" />
          <img src={img} alt="" />
          <img src={img} alt="" />
        </StyledSideGallery>
        <div>
          <img src={img} alt="" />
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
`;

const StyledSideGallery = styled.div`
  width: 120px;
  img {
    width: 80px;
    height: 80px;
  }
  img:not(:last-child) {
    margin-bottom: 25px;
  }

  & + div {
    img {
      width: 610px;
      height: auto;
    }
  }
`;
