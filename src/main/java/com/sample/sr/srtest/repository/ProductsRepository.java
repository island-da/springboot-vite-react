package com.sample.sr.srtest.repository;

import com.sample.sr.srtest.entity.Products;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductsRepository extends CrudRepository<Products, String> {}
