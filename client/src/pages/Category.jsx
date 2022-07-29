import React, { Component } from 'react';
import styled from 'styled-components';

import { ProductCardContainer } from '../components';
import { StyledTitle } from '../GeneralStyles';
import { store } from '../redux/store';

export class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: store.getState().filters.category.toUpperCase(),
    };
  }

  toogleTitle = () => {
    this.setState({
      category: store.getState().filters.category.toUpperCase(),
    });
  };

  render() {
    return (
      <StyledCategory>
        <StyledTitle>
          {this.state.category[0]}
          {this.state.category.slice(1).toLowerCase()}
        </StyledTitle>
        <div>
          <ProductCardContainer toogleTitle={this.toogleTitle} />
        </div>
      </StyledCategory>
    );
  }
}

const StyledCategory = styled.div`
  & > div {
    display: grid;
    justify-items: center;
    grid-template: 1fr / 1fr 1fr 1fr 1fr 1fr;

    @media (max-width: 2150px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    @media (max-width: 1750px) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @media (max-width: 1320px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 850px) {
      grid-template-columns: 1fr;
    }
  }
`;
