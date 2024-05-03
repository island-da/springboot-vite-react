import { Action } from "./OrdersNewAction";

export type State = {
  productId: string;
  quantity: number;
};

function handleUpdateProductId(
  state: State,
  data: { productId: string },
): State {
  return Object.assign({}, state, data);
}

function handleUpdateQuantity(state: State, data: { quantity: number }): State {
  return Object.assign({}, state, data);
}

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "UPDATE_PRODUCT_ID":
      return handleUpdateProductId(state, action.data);
    case "UPDATE_QUANTITY":
      return handleUpdateQuantity(state, action.data);
    default:
      return state;
  }
}
