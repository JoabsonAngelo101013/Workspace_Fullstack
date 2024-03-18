package org.example;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ForncedorPremium extends Fornecedor{

    private double taxaDesconto;
    public ForncedorPremium(Long id, String nome, String telefone, double taxaDesconto) {
        super(id, nome, telefone);
        this.taxaDesconto = taxaDesconto;
    }
}
