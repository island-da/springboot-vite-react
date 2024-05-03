import { j as e, C as c, c as n, r as s } from "./Client.js";
function o(t) {
  return /* @__PURE__ */ e.jsxs("div", { children: [
    /* @__PURE__ */ e.jsx("h1", { children: "Products一覧" }),
    t.products.length !== 0 && /* @__PURE__ */ e.jsx("ul", { children: t.products.map((r) => /* @__PURE__ */ e.jsxs("li", { children: [
      r.name,
      ": ",
      r.price,
      "円"
    ] }, r.id)) }),
    /* @__PURE__ */ e.jsx("a", { href: "/orders/new", children: "注文する" })
  ] });
}
function u(t, r) {
  switch (r.type) {
    case "UPDATE_PRODUCTS":
      return d(t, r.data);
    default:
      return t;
  }
}
function d(t, r) {
  return Object.assign({}, t, r);
}
class a {
  getProducts() {
    return c.get("/api/products.json");
  }
}
const i = new a();
async function P(t) {
  try {
    const r = await i.getProducts();
    t({
      type: "UPDATE_PRODUCTS",
      data: {
        products: r.products
      }
    });
  } catch (r) {
    console.error(r);
  }
}
const l = {
  getProducts: P
};
function p() {
  const [t, r] = s.useReducer(u, f());
  return s.useEffect(() => {
    (async () => await h(r))();
  }, []), /* @__PURE__ */ e.jsx(o, { products: t.products });
}
function f() {
  return {
    products: []
  };
}
async function h(t) {
  await l.getProducts(t);
}
const g = document.getElementById("react-root"), j = n(g);
j.render(/* @__PURE__ */ e.jsx(p, {}));
