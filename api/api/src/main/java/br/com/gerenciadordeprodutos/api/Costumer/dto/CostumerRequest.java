package br.com.gerenciadordeprodutos.api.Costumer.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import org.hibernate.validator.constraints.br.CPF;

@Getter
@AllArgsConstructor
@Data
public class CostumerRequest {

    @NotBlank(message = "Name is mandatory")
    private String name;
    @CPF(message = "Invalid CPF")
    private String cpf;
    @Email(message = "Invalid email")
    private String email;
   private CostumerAddressRequest costumerAddressRequest;
    

}
