import React, { Component } from 'react';
import styled from 'styled-components';


import goods from '../assets/Image.png';

// client
//   .query({
//     query: gql`
//       query {
//         productsAll {
//           name
//           prices {
//             amount
//           }
//           prices {
//             currency
//           }
//         }
//       }
//     `,
//   })
//   .then((result) => console.log(result));
export class ProductCard extends Component {
  render() {
    return (
      <>
        <StyledProductCard>
          <div>
            <img src={goods} alt="goods" />
            <h3>Apollo Running Short</h3>
            <p>$50.00</p>
          </div>
        </StyledProductCard>
        <StyledProductCard>
          <div>
            <img src={goods} alt="goods" />
            <h3>Apollo Running Short</h3>
            <p>$50.00</p>
          </div>
        </StyledProductCard>
        <StyledProductCard>
          <div>
            <img src={goods} alt="goods" />
            <h3>Apollo Running Short</h3>
            <p>$50.00</p>
          </div>
        </StyledProductCard>
      </>
    );
  }
}

export default ProductCard;

const StyledProductCard = styled.div`
  display: flex;
  margin-bottom: 100px;

  width: 390px;
  height: 440px;
  font-size: 18px;

  &:hover {
    cursor: pointer;
    -webkit-box-shadow: 0px 0px 41px -1px rgba(34, 60, 80, 0.24);
    -moz-box-shadow: 0px 0px 41px -1px rgba(34, 60, 80, 0.24);
    box-shadow: 0px 0px 41px -1px rgba(34, 60, 80, 0.24);
  }

  div {
    padding: 15px;
  }

  h3 {
    font-weight: 300;
    padding: 15px 0 1px;
  }

  p {
    font-weight: 500;
  }
`;
