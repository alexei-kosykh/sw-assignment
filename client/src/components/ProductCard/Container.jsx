import ProductCard from '.';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    index: state.currency.index,
    currencyType: state.currency.currency,
  };
};

export const ProductCardContainer = connect(mapStateToProps)(ProductCard);
