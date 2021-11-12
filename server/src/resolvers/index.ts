import categoryResolver from "./category";
import categoriesResolver from "./categories";
import currencyResolver from "./currencies";
import { productResolver, productsAll } from "./product";

const resolvers = {
  Query: {
    categories: categoriesResolver,
    category: categoryResolver,
    currencies: currencyResolver,
    product: productResolver,
    productsAll,
  },
};

export default resolvers;
