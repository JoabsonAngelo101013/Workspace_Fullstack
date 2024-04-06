package br.com.gerenciadordeprodutos.api.Supplier.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.UUID;


@AllArgsConstructor
@Getter
public class SupplierResponse {

    private UUID id;
    private String name;
    private String email;
    private String cnpj;
    private LocalDateTime createdAt;
}
