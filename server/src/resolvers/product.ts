import { products } from "../data";

type Args = {
  id: string;
};

export const productResolver = (_parent: any, args: Args) =>
  products.find((product) => product.getId() === args.id);

export const productsAll = (_parent: any) => products;
