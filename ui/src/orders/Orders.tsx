import { createRoot } from "react-dom/client";
import { OrdersMain } from "./components/OrdersMain";
import { useEffect, useReducer } from "react";
import { reducer } from "./OrdersStore";
import { Actions, OrdersDispatch } from "./OrdersAction";

function Orders() {
  const [state, dispatch] = useReducer(reducer, getInitialState());

  useEffect(() => {
    (async () => {
      await getOrders(dispatch);
    })();
  }, []);

  return <OrdersMain orders={state.orders} />;
}

function getInitialState() {
  return {
    orders: [],
  };
}

async function getOrders(dispatch: OrdersDispatch) {
  await Actions.getOrders(dispatch);
}

const container = document.getElementById("react-root") as HTMLElement;
const root = createRoot(container);
root.render(<Orders />);
