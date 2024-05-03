import { Dispatch } from "react";
import { Product } from "../model/product";
import ProductsAPI from "../api/products/ProductsAPI";

export type Action = {
  type: "UPDATE_PRODUCTS";
  data: {
    products: Product[];
  };
};

export type ProductsDispatch = Dispatch<Action>;

async function getProducts(dispatch: ProductsDispatch) {
  try {
    const result = await ProductsAPI.getProducts();
    dispatch({
      type: "UPDATE_PRODUCTS",
      data: {
        products: result.products,
      },
    });
  } catch (e) {
    console.error(e);
  }
}

export const Actions = {
  getProducts,
} as const;
