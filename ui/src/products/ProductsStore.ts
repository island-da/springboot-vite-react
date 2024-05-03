import { Product } from "../model/product";
import { Action } from "./ProductsAction";

export type State = {
  products: Product[];
};

export function reducer(state: State, action: Action) {
  switch (action.type) {
    case "UPDATE_PRODUCTS":
      return handleUpdateProducts(state, action.data);
    default:
      return state;
  }
}

function handleUpdateProducts(state: State, data: { products: Product[] }) {
  return Object.assign({}, state, data);
}
