package br.com.gerenciadordeprodutos.api.Costumer.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import org.hibernate.validator.constraints.br.CPF;

@Getter
public class CostumerRequest {

    @NotBlank(message = "Name is mandatory")
    private String name;
    @Email(message = "Invalid email")
    private String email;
    @CPF(message = "Invalid CPF")
    private String cpf;
    private String cep;
    @NotBlank(message = "Invalid Street")
    private String rua;
    private String numero;
    @NotBlank(message = "Invalid Neighborhood")
    private String bairro;
    @NotBlank(message = "Invalid City")
    private String cidade;
    @NotBlank(message = "Invalid State")
    private String estado;
    @NotBlank(message = "Invalid Country")
    private String pais;

}
