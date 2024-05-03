import { j as t, c as n, r as s } from "./Client.js";
import { O as c } from "./OrdersAPI.js";
function d(e) {
  return /* @__PURE__ */ t.jsxs("div", { children: [
    /* @__PURE__ */ t.jsx("h1", { children: "Orders一覧" }),
    e.orders.length !== 0 && /* @__PURE__ */ t.jsx("ul", { children: e.orders.map((r) => /* @__PURE__ */ t.jsxs("li", { children: [
      r.productId,
      ": ",
      r.quantity,
      "個"
    ] }, r.id)) }),
    /* @__PURE__ */ t.jsx("a", { href: "/orders/new", children: "新規注文" })
  ] });
}
function o(e, r) {
  return Object.assign({}, e, r);
}
function a(e, r) {
  switch (r.type) {
    case "UPDATE_ORDERS":
      return o(e, r.data);
    default:
      return e;
  }
}
async function i(e) {
  try {
    const r = await c.getOrders();
    e({
      type: "UPDATE_ORDERS",
      data: {
        orders: r.orders
      }
    });
  } catch (r) {
    console.error(r);
  }
}
const u = {
  getOrders: i
};
function l() {
  const [e, r] = s.useReducer(a, O());
  return s.useEffect(() => {
    (async () => await f(r))();
  }, []), /* @__PURE__ */ t.jsx(d, { orders: e.orders });
}
function O() {
  return {
    orders: []
  };
}
async function f(e) {
  await u.getOrders(e);
}
const h = document.getElementById("react-root"), j = n(h);
j.render(/* @__PURE__ */ t.jsx(l, {}));
