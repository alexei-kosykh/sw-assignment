import { PureComponent } from 'react';
import styled from 'styled-components';

import { addToCart } from '../../redux/actions/cart';

import { Button, ProductAttributes } from '..';

import { StyledTextItem } from '../../GeneralStyles';
export class ProductDescription extends PureComponent {
  constructor(props) {
    super(props);
    this.productToCart = [];
    this.attributes = [];
  }

  render() {
    return (
      <StyledProductDescription>
        <StyledTextItem elemSize={this.props.elemSize}>
          <h2>{this.props.product.name}</h2>
          <h3>{this.props.product.brand}</h3>
          <ProductAttributes
            productId={this.props.product.id}
            productAttr={this.props.product.attributes}
            attributes={this.attributes}
          />
          {console.log(this.props.product)}
          <h4>PRICE:</h4>
          <p>
            {`${this.props.currencyType} ${
              this.props.product.prices?.[this.props.index].amount
            }`}
          </p>
          <Button
            variant="primary"
            size="primaryDefault"
            value="Add to cart"
            onClick={() =>
              addToCart(this.props.product, this.attributes, this.productToCart)
            }
          ></Button>
          <div
            dangerouslySetInnerHTML={{ __html: this.props.product.description }}
          ></div>
        </StyledTextItem>
      </StyledProductDescription>
    );
  }
}

export default ProductDescription;

const StyledProductDescription = styled.div`
  & > div > button {
    margin: 30px 0;
    text-transform: uppercase;
  }

  & > div > div:last-child {
    padding-right: 20px;
    max-height: 17vh;
    overflow-y: scroll;
    margin-bottom: 30px;

    div > ul {
      padding-left: 20px;
    }

    h3 + p:not(:last-of-type) {
      margin-bottom: 30px;
    }
    h3 {
      margin-bottom: 30px;
    }

    &::-webkit-scrollbar {
      width: 7px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #5ece7b;
    }

    &::-webkit-scrollbar-track {
      background-color: #f0f0f0;
    }

    @media (max-width: 840px) {
      max-height: 27vh;
    }
  }

  @media (max-width: 840px) {
    display: flex;
    justify-content: center;

    div:last-child {
      max-width: 370px;
    }
  }
`;
