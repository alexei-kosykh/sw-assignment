import React, { Component } from 'react';
import { connect } from 'react-redux';

export class CartOverlayTitle extends Component {
  render() {
    return (
      <p>
        <strong>My Bag</strong>, {this.props.totalCount} items
      </p>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    totalCount: state.cart.totalCount,
  };
};

export const COTitleContainer =
  connect(mapStateToProps)(CartOverlayTitle);
