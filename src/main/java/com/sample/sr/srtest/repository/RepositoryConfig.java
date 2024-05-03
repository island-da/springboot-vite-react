package com.sample.sr.srtest.repository;

import com.sample.sr.srtest.entity.Orders;
import java.util.UUID;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.relational.core.mapping.event.BeforeConvertCallback;

@Configuration
public class RepositoryConfig {

    @Bean
    BeforeConvertCallback<Orders> beforeConvertCallback() {
        return (orders) -> {
            if (orders.getId() == null) {
                return Orders.builder()
                        .id(UUID.randomUUID().toString())
                        .userId(orders.getUserId())
                        .productId(orders.getProductId())
                        .quantity(orders.getQuantity())
                        .build();
            }
            return orders;
        };
    }
}
