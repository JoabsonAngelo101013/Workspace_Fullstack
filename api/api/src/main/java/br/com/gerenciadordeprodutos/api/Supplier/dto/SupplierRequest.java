package br.com.gerenciadordeprodutos.api.Supplier.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import org.hibernate.validator.constraints.br.CNPJ;
@Getter
public class SupplierRequest {
    @NotBlank(message = "Name is mandatory")
    private String name;
    @Email(message = "Invalid Email Address")
    private String email;
    @CNPJ(message = "Invalid Cnpj")
    private String cnpj;
}
