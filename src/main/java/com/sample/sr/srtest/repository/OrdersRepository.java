package com.sample.sr.srtest.repository;

import com.sample.sr.srtest.entity.Orders;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrdersRepository extends CrudRepository<Orders, String> {}
