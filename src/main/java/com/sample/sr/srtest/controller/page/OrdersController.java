package com.sample.sr.srtest.controller.page;

import com.sample.sr.srtest.repository.ProductsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@RequiredArgsConstructor
public class OrdersController {

    private final ProductsRepository productsRepository;

    @GetMapping("/orders")
    public String orders() {
        return "orders/index";
    }

    @GetMapping("/orders/new")
    public String newOrder(Model model) {
        model.addAttribute("products", productsRepository.findAll());
        return "orders/new";
    }
}
