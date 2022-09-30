import { PureComponent } from 'react';
import { connect } from 'react-redux';

import { StyledCounterCart } from '../../../GeneralStyles';

export class CartOverlayCounter extends PureComponent {
  render() {
    return (
      <StyledCounterCart type={this.props.type}>
        <div className="counter">{this.props.totalCount}</div>
      </StyledCounterCart>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    totalCount: state.cart.totalCount,
  };
};

export const COCounterContainer = connect(mapStateToProps)(CartOverlayCounter);
