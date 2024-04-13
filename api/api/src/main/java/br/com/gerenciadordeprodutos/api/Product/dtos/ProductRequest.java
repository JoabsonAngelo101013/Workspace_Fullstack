package br.com.gerenciadordeprodutos.api.Product.dtos;

import lombok.Data;

import java.math.BigDecimal;
import java.util.UUID;

@Data
public class ProductRequest {

    private String name;


    private BigDecimal price;


    private UUID supplierId;
}

