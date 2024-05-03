import { Order } from "../../model/order";

type Props = {
  orders: Order[];
};

export function OrdersMain(props: Props) {
  return (
    <div>
      <h1>Orders一覧</h1>
      {props.orders.length !== 0 && (
        <ul>
          {props.orders.map((order) => (
            <li key={order.id}>
              {order.productId}: {order.quantity}個
            </li>
          ))}
        </ul>
      )}
      <a href="/orders/new">新規注文</a>
    </div>
  );
}
