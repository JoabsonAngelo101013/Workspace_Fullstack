package br.com.gerenciadordeprodutos.api.Product.dtos;

import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import org.aspectj.bridge.IMessage;

import java.math.BigDecimal;
import java.util.UUID;

@Data
public class ProductRequest {
    @NotBlank(message = "Nome é obrigatorio")
    private String name;

    @NotNull(message = "Preço é obrigatorio")
    @DecimalMin(value = "0.01", message = "O preço de ser no minimo r$0.01")
    private BigDecimal price;


    private UUID supplierId;
}

