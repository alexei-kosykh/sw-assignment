import React, { Component } from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';

import { store } from '../redux/store';
import { GET_CATEGORIES, makeGraphQLQuery } from '../graphQL/Queries';
import { setCategory } from '../redux/actions/filters';
export class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = { categories: [] };
  }

  async componentDidMount() {
    let result = await makeGraphQLQuery(GET_CATEGORIES);
    let set = new Set();
    result.data.productsAll.map((item) => set.add(item.category));
    // console.log(store.getState().filters.category);
    // console.log(set);
    this.setState({
      categories: set,
      activeCategory: store.getState().filters.category.toLowerCase(),
    });
  }

  toogleCategory(item) {
    store.dispatch(setCategory(item));
    this.setState({ activeCategory: item.toLowerCase() });
  }

  render() {
    return (
      <StyledNavigation>
        {Array.from(this.state.categories).map((item) => (
          <div
            active={`${item === this.state.activeCategory}`}
            key={nanoid()}
            onClick={() => this.toogleCategory(item)}
          >
            {item}
          </div>
        ))}
      </StyledNavigation>
    );
  }
}

export default Navigation;

const StyledNavigation = styled.div`
  display: flex;
  cursor: pointer;

  font-weight: 600;

  div:not(:last-child) {
    margin-right: 3vw;
  }

  div:hover,
  div[active='true'] {
    border-bottom: 2px solid #5ece7b;
    color: #5ece7b;
  }

  div {
    display: inherit;
    align-items: center;
    height: 80px;
    border-bottom: 2px solid #ffffff;
    transition: all 0.2s 0.05s linear;
    text-transform: uppercase;
  }
`;
