import { C as r } from "./Client.js";
class t {
  getOrders() {
    return r.get("/api/orders.json");
  }
  postOrder(e, s) {
    const o = {
      userId: "3029bea7-fcf3-4fef-8fbc-754f111f3b56",
      productId: e,
      quantity: s
    };
    return r.post("/api/orders/new.json", o);
  }
}
const f = new t();
export {
  f as O
};
