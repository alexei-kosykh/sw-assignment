import ProductCard from '.';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    index: state.currency.index,
    currencyType: state.currency.currency,
    category: state.filters.category.toLowerCase(),
    hasItems: !!state.cart.totalCount,
  };
};

export const ProductCardContainer = connect(mapStateToProps)(ProductCard);
