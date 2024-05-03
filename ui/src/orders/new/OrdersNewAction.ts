import { Dispatch } from "react";
import OrdersAPI from "../../api/orders/OrdersAPI";

export type Action =
  | {
      type: "UPDATE_PRODUCT_ID";
      data: { productId: string };
    }
  | {
      type: "UPDATE_QUANTITY";
      data: { quantity: number };
    };

export type OrdersNewDispatch = Dispatch<Action>;

function updateProductId(dispatch: OrdersNewDispatch, productId: string) {
  dispatch({ type: "UPDATE_PRODUCT_ID", data: { productId } });
}

function updateQuantity(dispatch: OrdersNewDispatch, quantity: number) {
  dispatch({ type: "UPDATE_QUANTITY", data: { quantity } });
}

async function submit(productId: string, quantity: number) {
  try {
    await OrdersAPI.postOrder(productId, quantity);
    setTimeout(() => {
      window.location.href = "/orders";
    }, 2000);
  } catch (e) {
    console.error(e);
  }
}

export const Actions = {
  updateProductId,
  updateQuantity,
  submit,
} as const;
