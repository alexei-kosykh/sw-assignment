import axios from 'axios';
import React, { Component } from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';

export class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = { categories: [] };
  }
  async componentDidMount() {
    let result = await this.makeGraphQLQuery(`
        query {
          productsAll {
           category
          }
        }
      `);
    let set = new Set();
    result.data.productsAll.map((item) => set.add(item.category));
    this.setState({ categories: set });
  }

  makeGraphQLQuery(query) {
    return axios({
      method: 'POST',
      url: 'http://localhost:4000/graphql',
      data: {
        query: query,
      },
    }).then((response) => response.data);
  }
  render() {
    return (
      <StyledNavigation>
        {Array.from(this.state.categories).map((item) => (
          <div key={nanoid()}>{item}</div>
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

  div:hover {
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
