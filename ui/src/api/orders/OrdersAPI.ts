import { Order } from "../../model/order";
import Client from "../Client";

export type OrdersOutput = {
  orders: Order[];
};

class OrdersAPI {
  getOrders(): Promise<OrdersOutput> {
    return Client.get("/api/orders.json");
  }

  postOrder(productId: string, quantity: number): Promise<void> {
    // ユーザIDは固定値
    const params = {
      userId: "3029bea7-fcf3-4fef-8fbc-754f111f3b56",
      productId: productId,
      quantity: quantity,
    };
    return Client.post("/api/orders/new.json", params);
  }
}

export default new OrdersAPI();
