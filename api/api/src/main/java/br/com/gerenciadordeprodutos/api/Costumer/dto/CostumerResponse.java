package br.com.gerenciadordeprodutos.api.Costumer.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.UUID;
@AllArgsConstructor
@Data
public class CostumerResponse {

        private UUID id;
        private String name;
        private String email;
        private String cpf;
        private String cep;
        private String rua;
        private String numero;
        private String bairro;
        private String cidade;
        private String estado;
        private String pais;

}
