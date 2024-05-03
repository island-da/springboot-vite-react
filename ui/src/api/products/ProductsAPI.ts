import { Product } from "../../model/product";
import Client from "../Client";

export type ProductsOutput = {
  products: Product[];
};

class ProductsAPI {
  getProducts(): Promise<ProductsOutput> {
    return Client.get("/api/products.json");
  }
}

export default new ProductsAPI();
