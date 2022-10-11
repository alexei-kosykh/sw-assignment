import { Component } from 'react';
import { nanoid } from 'nanoid';
import styled from 'styled-components';

import { store } from '../../redux/store';
import { setCurrency } from '../../redux/actions/currency';
import { GET_CURRENCY, makeGraphQLQuery } from '../../graphQL/Queries';

export class CurrencySwitcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idCurrency: 0,
      allCurrency: [],
    };
  }

  async componentDidMount() {
    const result = await makeGraphQLQuery(GET_CURRENCY);
    const allCurrency = result.data.currencies;
    this.setState({
      idCurrency: 0,
      allCurrency,
    });
  }

  changeCurrency = (index) => {
    store.dispatch(setCurrency(index, this.state.allCurrency[index].symbol));
    this.setState({
      idCurrency: index,
    });
    this.props.toggleCurrency();
  };

  render() {
    return (
      <StyledCurrency>
        {this.state.allCurrency?.map((item, i) => (
          <div key={nanoid()} onClick={() => this.changeCurrency(i)}>
            <p>
              <strong>
                {item.symbol} {item.label}
              </strong>
            </p>
          </div>
        ))}
      </StyledCurrency>
    );
  }
}

export default CurrencySwitcher;

const StyledCurrency = styled.div`
  position: absolute;
  top: 50px;
  right: -15px;
  z-index: 100;
  box-shadow: 0px 7px 29px -2px rgba(34, 60, 80, 0.11);
  width: 115px;
  background-color: #ffffff;

  div {
    width: 100%;
  }

  div:hover,
  div:focus,
  div:active {
    background-color: #eeeeee;
  }

  strong {
    font-weight: 500;
  }
  p {
    padding: 15px 20px;
  }
`;
