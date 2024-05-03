import { createRoot } from "react-dom/client";
import { OrdersNewMain } from "./components/OrdersNewMain";
import { State, reducer } from "./OrdersNewStore";
import { ChangeEvent, useReducer } from "react";
import { Actions, OrdersNewDispatch } from "./OrdersNewAction";

function OrdersNew() {
  const [state, dispatch] = useReducer(reducer, getInitialState());
  return (
    <OrdersNewMain
      products={page.data.PRODUCTS}
      productId={state.productId}
      quantity={state.quantity}
      onChangeProductId={(e) => onChangeProductId(dispatch, e)}
      onChangeQuantity={(e) => onChangeQuantity(dispatch, e)}
      onSubmit={(e) => onSubmit(e, state.productId, state.quantity)}
    />
  );
}

function getInitialState(): State {
  return {
    productId: "",
    quantity: 1,
  };
}

function onChangeProductId(
  dispatch: OrdersNewDispatch,
  e: ChangeEvent<HTMLSelectElement>,
) {
  Actions.updateProductId(dispatch, e.target.value);
}

function onChangeQuantity(
  dispatch: OrdersNewDispatch,
  e: ChangeEvent<HTMLInputElement>,
) {
  Actions.updateQuantity(dispatch, Number(e.target.value));
}

async function onSubmit(
  e: React.FormEvent<HTMLFormElement>,
  productId: string,
  quantity: number,
) {
  e.preventDefault();
  await Actions.submit(productId, quantity);
}

const container = document.getElementById("react-root") as HTMLElement;
const root = createRoot(container);
root.render(<OrdersNew />);
