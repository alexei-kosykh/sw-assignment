import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
import styled from 'styled-components';

import { store } from '../redux/store';
import { setIdProduct } from '../redux/actions/products';
import { checkAllAttributes } from '../redux/actions/cart';

import { ProductAttributes } from '.';

import { Button } from '.';

import { StyledTextItem } from '../GeneralStyles';

export class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkSelectAttributes: false,
      attributes: [],
    };
    this.productToCart = [];
  }

  setAttributes = (product, attributes, productToCart, attrLength) => {
    checkAllAttributes(product, attributes, productToCart, attrLength)
      ? this.setState({ checkSelectAttributes: false, attributes: [] })
      : this.setState({ checkSelectAttributes: true });
  };

  setId = (id) => {
    store.dispatch(setIdProduct(id));
  };

  render() {
    const product = this.props.product;
    return (
      <>
        <StyledCardItem key={nanoid()} inStock={product.inStock}>
          <Link
            key={nanoid()}
            to={{
              pathname: '/pdp/',
              search: `${product.id}`,
            }}
          >
            <StyledProductCard
              image={product.gallery[0]}
              onClick={() => this.setId(product.id)}
              inStock={product.inStock}
            >
              <div>
                <div
                  className={`image ${product.inStock ? '' : 'out-of-stock'}`}
                  alt="img"
                ></div>

                <h3>{product.name}</h3>
                <p>
                  {this.props.currencyType}{' '}
                  {product.prices[this.props.index].amount}
                </p>
              </div>
            </StyledProductCard>
          </Link>

          <span>
            {!!product.attributes.length && (
              <div>
                <StyledTextItem elemSize="SmallInCard">
                  {this.state.checkSelectAttributes && (
                    <p>Select all of them!</p>
                  )}
                  <ProductAttributes
                    productId={product.id}
                    productAttr={product.attributes}
                    attributes={this.state.attributes}
                  />
                </StyledTextItem>
              </div>
            )}
            <Button
              variant="circle"
              size="cartCircle"
              value={
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.5613 4.87359C19.1822 4.41031 18.5924 4.12873 17.9821 4.12873H5.15889L4.75914 2.63901C4.52718 1.77302 3.72769 1.16895 2.80069 1.16895H0.653099C0.295301 1.16895 0 1.45052 0 1.79347C0 2.13562 0.294459 2.418 0.653099 2.418H2.80069C3.11654 2.418 3.39045 2.61936 3.47434 2.92139L6.04306 12.7077C6.27502 13.5737 7.07451 14.1778 8.00152 14.1778H16.4028C17.3289 14.1778 18.1507 13.5737 18.3612 12.7077L19.9405 6.50575C20.0877 5.941 19.9619 5.33693 19.5613 4.87365L19.5613 4.87359ZM18.6566 6.22252L17.0773 12.4245C16.9934 12.7265 16.7195 12.9279 16.4036 12.9279H8.00154C7.68569 12.9279 7.41178 12.7265 7.32789 12.4245L5.49611 5.39756H17.983C18.1936 5.39756 18.4042 5.49824 18.5308 5.65948C18.6567 5.81994 18.7192 6.0213 18.6567 6.22266L18.6566 6.22252Z"
                    fill="#ffffff"
                  />
                  <path
                    d="M8.44437 14.9814C7.2443 14.9814 6.25488 15.9276 6.25488 17.0751C6.25488 18.2226 7.24439 19.1688 8.44437 19.1688C9.64445 19.1696 10.6339 18.2234 10.6339 17.0757C10.6339 15.928 9.64436 14.9812 8.44437 14.9812V14.9814ZM8.44437 17.9011C7.9599 17.9011 7.58071 17.5385 7.58071 17.0752C7.58071 16.6119 7.9599 16.2493 8.44437 16.2493C8.92885 16.2493 9.30804 16.6119 9.30804 17.0752C9.30722 17.5188 8.90748 17.9011 8.44437 17.9011Z"
                    fill="#ffffff"
                  />
                  <path
                    d="M15.6875 14.9814C14.4875 14.9814 13.498 15.9277 13.498 17.0752C13.498 18.2226 14.4876 19.1689 15.6875 19.1689C16.8875 19.1689 17.877 18.2226 17.877 17.0752C17.8565 15.9284 16.8875 14.9814 15.6875 14.9814ZM15.6875 17.9011C15.2031 17.9011 14.8239 17.5385 14.8239 17.0752C14.8239 16.612 15.2031 16.2493 15.6875 16.2493C16.172 16.2493 16.5512 16.612 16.5512 17.0752C16.5512 17.5188 16.1506 17.9011 15.6875 17.9011Z"
                    fill="#ffffff"
                  />
                </svg>
              }
              onClick={() =>
                this.setAttributes(
                  product,
                  this.state.attributes,
                  this.productToCart,
                  product.attributes.length
                )
              }
            ></Button>
          </span>
        </StyledCardItem>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    index: state.currency.index,
    currencyType: state.currency.currency,
    category: state.filters.category.toLowerCase(),
    hasItems: !!state.cart.totalCount,
  };
};

export const ProductCardContainer = connect(mapStateToProps)(ProductCard);

const StyledCardItem = styled.div`
  position: relative;
  span {
    display: none;
    position: absolute;
    top: 270px;
    right: 30px;
    z-index: 1;

    & > div {
      display: none;

      & div > p {
        color: red;
      }
    }

    &:hover > div {
      display: block;

      cursor: pointer;
      position: absolute;
      bottom: 23px;
      right: -20px;
      padding: 35px;
      z-index: -4;
    }
  }

  a:hover + span,
  span:hover {
    display: ${({ inStock }) => (inStock ? 'block' : 'none')};
  }
`;

const StyledProductCard = styled.div`
  display: flex;
  margin-bottom: 100px;
  overflow: hidden;

  width: 390px;
  height: 400px;
  font-size: 18px;

  opacity: ${({ inStock }) => (inStock ? 1 : 0.5)};

  &:hover {
    cursor: pointer;
    -webkit-box-shadow: 0px 0px 41px -1px rgba(34, 60, 80, 0.24);
    -moz-box-shadow: 0px 0px 41px -1px rgba(34, 60, 80, 0.24);
    box-shadow: 0px 0px 41px -1px rgba(34, 60, 80, 0.24);
  }

  div {
    padding: 15px;
    width: 100%;
  }

  h3 {
    font-weight: 300;
    padding: 15px 0 1px;
  }

  .image {
    background-image: url(${(props) => props.image});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    height: 280px;

    transition: 1s 0.2s;
  }

  .out-of-stock {
    display: flex;
    align-items: center;
    justify-content: center;

    &::after {
      content: 'OUT OF STOCK';

      font-size: 24px;
    }
  }

  .image:not(.out-of-stock):hover {
    transform: scale(1.12);
  }

  p {
    font-weight: 500;
  }

  @media (max-width: 850px) {
    margin-bottom: 50px;
  }
`;
