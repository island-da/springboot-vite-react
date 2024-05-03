import { Product } from "../../model/product";

type Props = {
  products: Product[];
};

export function ProductsMain(props: Props) {
  return (
    <div>
      <h1>Products一覧</h1>
      {props.products.length !== 0 && (
        <ul>
          {props.products.map((product) => (
            <li key={product.id}>
              {product.name}: {product.price}円
            </li>
          ))}
        </ul>
      )}
      <a href="/orders/new">注文する</a>
    </div>
  );
}
