package br.com.gerenciadordeprodutos.api.Supplier.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.UUID;


@AllArgsConstructor
@Data
public class SupplierResponse {
    private UUID id;
    private String name;
    private String email;
    private String cnpj;
    private LocalDateTime createdAt;
}
