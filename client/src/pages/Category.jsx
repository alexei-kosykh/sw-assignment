import { Component } from 'react';
import { connect } from 'react-redux';
import { nanoid } from 'nanoid';
import styled from 'styled-components';

import { GET_ALL_PRODUCTS, makeGraphQLQuery } from '../graphQL/Queries';

import { ProductCardContainer } from '../components';

import { StyledTitle } from '../GeneralStyles';

export class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      products: [],
    };
  }
  async componentDidMount() {
    try {
      let result = await makeGraphQLQuery(GET_ALL_PRODUCTS);
      this.setState({
        products: result.data.category.products,
        isLoaded: true,
      });
    } catch (e) {
      this.setState({ error: e, isLoaded: true });
    }
  }

  render() {
    const { error, isLoaded, products } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <StyledCategory>
          <StyledTitle>
            {this.props.category[0]}
            {this.props.category.slice(1).toLowerCase()}
          </StyledTitle>
          <div>
            {products.map(
              (product) =>
                (product.category === this.props.category.toLowerCase() ||
                  this.props.category.toLowerCase() === 'all') && (
                  <ProductCardContainer
                    key={nanoid()}
                    product={product}
                    b="8"
                  />
                )
            )}
          </div>
        </StyledCategory>
      );
    }
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
