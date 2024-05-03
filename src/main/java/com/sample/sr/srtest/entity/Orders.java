package com.sample.sr.srtest.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import org.springframework.data.annotation.Id;

@AllArgsConstructor
@Getter
@Builder
public class Orders {
    @Id private String id;
    private String userId;
    private String productId;
    private Integer quantity;
}
