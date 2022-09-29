import { PureComponent } from 'react';
import { connect } from 'react-redux';

export class CartOverlayCounter extends PureComponent {
  render() {
    return <div className="counter">{this.props.totalCount}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    totalCount: state.cart.totalCount,
  };
};

export const COCounterContainer = connect(mapStateToProps)(CartOverlayCounter);
