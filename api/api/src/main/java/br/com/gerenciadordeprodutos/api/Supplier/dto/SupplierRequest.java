package br.com.gerenciadordeprodutos.api.Supplier.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import org.hibernate.validator.constraints.br.CNPJ;

@Getter
public class SupplierRequest {
    @NotBlank(message = "Nome é obrigatório")
    private String name;
    @Email(message = "Email invalido")
    private String email;
    @CNPJ(message = "Cnpj invalido")
    private String cnpj;
}
