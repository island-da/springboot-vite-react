package com.sample.sr.srtest.controller.api;

import com.sample.sr.srtest.entity.Orders;
import com.sample.sr.srtest.repository.OrdersRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class OrdersApiController {

    private final OrdersRepository ordersRepository;

    public record OrderInputForm(String userId, String productId, Integer quantity) {}

    public record Order(String id, String productId, Integer quantity) {
        public static Order of(Orders orders) {
            return new Order(orders.getId(), orders.getProductId(), orders.getQuantity());
        }
    }

    public record OrdersOutput(List<Order> orders) {
        public static OrdersOutput of(List<Order> orders) {
            return new OrdersOutput(orders);
        }
    }

    @GetMapping("/api/orders.json")
    public OrdersOutput getOrders() {
        List<Orders> list = (List<Orders>) ordersRepository.findAll();
        return OrdersOutput.of(list.stream().map(Order::of).toList());
    }

    @PostMapping("/api/orders/new.json")
    public void postOrder(@RequestBody OrderInputForm form) {
        Orders order =
                Orders.builder()
                        .userId(form.userId())
                        .productId(form.productId())
                        .quantity(form.quantity())
                        .build();
        ordersRepository.save(order);
    }
}
