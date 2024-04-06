package br.com.gerenciadordeprodutos.api.Costumer.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class CostumerAddressResponse {
    private String street;
    private String number;
    private String neighborhood;
    private String City;
    private String state;
    private String country;
    private String ZipCode;
}
