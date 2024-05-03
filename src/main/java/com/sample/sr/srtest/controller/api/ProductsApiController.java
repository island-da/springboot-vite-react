package com.sample.sr.srtest.controller.api;

import com.sample.sr.srtest.entity.Products;
import com.sample.sr.srtest.repository.ProductsRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class ProductsApiController {

    private final ProductsRepository productsRepository;

    public record Product(String id, String name, Integer price) {
        public static Product of(Products products) {
            return new Product(products.getId(), products.getName(), products.getPrice());
        }
    }

    public record ProductsOutput(List<Product> products) {
        public static ProductsOutput of(List<Product> products) {
            return new ProductsOutput(products);
        }
    }

    @GetMapping("/api/products.json")
    public ProductsOutput getProducts() {
        List<Products> list = (List<Products>) productsRepository.findAll();
        return ProductsOutput.of(list.stream().map(Product::of).toList());
    }
}
