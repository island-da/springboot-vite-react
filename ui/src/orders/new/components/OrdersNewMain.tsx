import { ChangeEventHandler, FormEventHandler } from "react";
import { Product } from "../../../model/product";

type Props = {
  products: Product[];
  productId: string;
  quantity: number;
  onChangeProductId: ChangeEventHandler<HTMLSelectElement>;
  onChangeQuantity: ChangeEventHandler<HTMLInputElement>;
  onSubmit: FormEventHandler<HTMLFormElement>;
};

export function OrdersNewMain(props: Props) {
  return (
    <div>
      <h1>新規注文</h1>
      <form onSubmit={props.onSubmit}>
        <select value={props.productId} onChange={props.onChangeProductId}>
          <option value="">選択してください</option>
          {props.products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.name}: {product.price}円
            </option>
          ))}
        </select>
        <input
          type="number"
          value={props.quantity}
          onChange={props.onChangeQuantity}
        />
        <button type="submit">注文</button>
      </form>
    </div>
  );
}
