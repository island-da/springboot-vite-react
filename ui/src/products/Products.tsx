import { createRoot } from "react-dom/client";
import { ProductsMain } from "./components/ProductsMain";
import { useEffect, useReducer } from "react";
import { reducer } from "./ProductsStore";
import { Actions, ProductsDispatch } from "./ProductsAction";

function Products() {
  const [state, dispatch] = useReducer(reducer, getInitialState());

  useEffect(() => {
    (async () => {
      await getProducts(dispatch);
    })();
  }, []);

  return <ProductsMain products={state.products} />;
}

function getInitialState() {
  return {
    products: [],
  };
}

async function getProducts(dispatch: ProductsDispatch) {
  await Actions.getProducts(dispatch);
}

const container = document.getElementById("react-root") as HTMLElement;
const root = createRoot(container);
root.render(<Products />);
