import { j as e, c as r, r as o } from "../Client.js";
import { O as i } from "../OrdersAPI.js";
function d(t) {
  return /* @__PURE__ */ e.jsxs("div", { children: [
    /* @__PURE__ */ e.jsx("h1", { children: "新規注文" }),
    /* @__PURE__ */ e.jsxs("form", { onSubmit: t.onSubmit, children: [
      /* @__PURE__ */ e.jsxs("select", { value: t.productId, onChange: t.onChangeProductId, children: [
        /* @__PURE__ */ e.jsx("option", { value: "", children: "選択してください" }),
        t.products.map((n) => /* @__PURE__ */ e.jsxs("option", { value: n.id, children: [
          n.name,
          ": ",
          n.price,
          "円"
        ] }, n.id))
      ] }),
      /* @__PURE__ */ e.jsx(
        "input",
        {
          type: "number",
          value: t.quantity,
          onChange: t.onChangeQuantity
        }
      ),
      /* @__PURE__ */ e.jsx("button", { type: "submit", children: "注文" })
    ] })
  ] });
}
function c(t, n) {
  return Object.assign({}, t, n);
}
function s(t, n) {
  return Object.assign({}, t, n);
}
function h(t, n) {
  switch (n.type) {
    case "UPDATE_PRODUCT_ID":
      return c(t, n.data);
    case "UPDATE_QUANTITY":
      return s(t, n.data);
    default:
      return t;
  }
}
function l(t, n) {
  t({ type: "UPDATE_PRODUCT_ID", data: { productId: n } });
}
function m(t, n) {
  t({ type: "UPDATE_QUANTITY", data: { quantity: n } });
}
async function y(t, n) {
  try {
    await i.postOrder(t, n), setTimeout(() => {
      window.location.href = "/orders";
    }, 2e3);
  } catch (a) {
    console.error(a);
  }
}
const u = {
  updateProductId: l,
  updateQuantity: m,
  submit: y
};
function f() {
  const [t, n] = o.useReducer(h, p());
  return /* @__PURE__ */ e.jsx(
    d,
    {
      products: page.data.PRODUCTS,
      productId: t.productId,
      quantity: t.quantity,
      onChangeProductId: (a) => I(n, a),
      onChangeQuantity: (a) => g(n, a),
      onSubmit: (a) => j(a, t.productId, t.quantity)
    }
  );
}
function p() {
  return {
    productId: "",
    quantity: 1
  };
}
function I(t, n) {
  u.updateProductId(t, n.target.value);
}
function g(t, n) {
  u.updateQuantity(t, Number(n.target.value));
}
async function j(t, n, a) {
  t.preventDefault(), await u.submit(n, a);
}
const P = document.getElementById("react-root"), x = r(P);
x.render(/* @__PURE__ */ e.jsx(f, {}));
