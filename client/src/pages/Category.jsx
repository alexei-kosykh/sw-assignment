import { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { ProductCardContainer } from '../components';

import { StyledTitle } from '../GeneralStyles';

export class Category extends Component {
  render() {
    return (
      <StyledCategory>
        <StyledTitle>
          {this.props.category[0]}
          {this.props.category.slice(1).toLowerCase()}
        </StyledTitle>
        <div>
          <ProductCardContainer />
        </div>
      </StyledCategory>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    category: state.filters.category.toUpperCase(),
  };
};

export const CategoryContainer = connect(mapStateToProps)(Category);

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
