import React, { Component } from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { ProductCard } from '../components';
import { StyledTitle } from '../GeneralStyles';
import { store } from '../redux/store';
export class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryName: store.getState().filters.category,
    };
  }

  render() {
    return (
      <StyledCategory>
        <StyledTitle>
          {this.props.categoryName[0]}
          {this.props.categoryName.slice(1).toLowerCase()}
        </StyledTitle>
        <div>
          <ProductCard />
        </div>
      </StyledCategory>
    );
  }
}

const mapStateToProps = (state) => {
  return { categoryName: state.filters.category }
};

export default connect(mapStateToProps)(Category);

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
