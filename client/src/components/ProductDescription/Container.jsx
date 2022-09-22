import ProductDescription from '.';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    index: state.currency.index,
    currencyType: state.currency.currency,
  };
};

export const ProductDescriptionContainer = connect(mapStateToProps)(ProductDescription);