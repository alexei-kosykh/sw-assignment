import { Component } from 'react';
import { nanoid } from 'nanoid';

import { InputRadioGroup } from '..';

export class ProductAttributes extends Component {
  render() {
    return (
      <>
        {this.props.productAttr?.map((attr, key) => (
          <div key={nanoid()}>
            <h4 key={nanoid()}>{attr.name}:</h4>
            <div key={nanoid()}>
              <InputRadioGroup
                attr={attr}
                index={key}
                attrSelected={this.props.attributes}
                productId={this.props.productId}
              />
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default ProductAttributes;
