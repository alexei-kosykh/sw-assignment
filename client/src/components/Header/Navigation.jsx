import { PureComponent } from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';

import { store } from '../../redux/store';
import { setCategory } from '../../redux/actions/filters';
import { GET_CATEGORIES, makeGraphQLQuery } from '../../graphQL/Queries';

export class Navigation extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { categories: [] };
  }

  async componentDidMount() {
    let result = await makeGraphQLQuery(GET_CATEGORIES);
    let set = new Set();
    result.data.productsAll.map((item) => set.add(item.category));
    this.setState({
      categories: set,
      activeCategory: store.getState().filters.category.toLowerCase(),
    });
  }

  toggleCategory(item) {
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
            onClick={() => this.toggleCategory(item)}
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
    margin-right: 6%;
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
