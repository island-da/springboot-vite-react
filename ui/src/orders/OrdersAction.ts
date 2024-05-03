import { Dispatch } from "react";
import { Order } from "../model/order";
import OrdersAPI from "../api/orders/OrdersAPI";

export type Action = {
  type: "UPDATE_ORDERS";
  data: { orders: Order[] };
};

export type OrdersDispatch = Dispatch<Action>;

async function getOrders(dispatch: OrdersDispatch) {
  try {
    const result = await OrdersAPI.getOrders();
    dispatch({
      type: "UPDATE_ORDERS",
      data: {
        orders: result.orders,
      },
    });
  } catch (e) {
    console.error(e);
  }
}

export const Actions = {
  getOrders,
} as const;
