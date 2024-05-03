import { Order } from "../model/order";
import { Action } from "./OrdersAction";

export type State = {
  orders: Order[];
};

function handleUpdateOrders(state: State, data: { orders: Order[] }) {
  return Object.assign({}, state, data);
}

export function reducer(state: State, action: Action) {
  switch (action.type) {
    case "UPDATE_ORDERS":
      return handleUpdateOrders(state, action.data);
    default:
      return state;
  }
}
