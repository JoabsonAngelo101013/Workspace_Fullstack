package org.example;

public class Main {
    public static void main(String[] args) {
        Produto produto1 = new Produto("Arroz", 45.00, 60);
        produto1.exibirInformacoes();

        produto1.negociar();

        Fornecedor fornecedor1 = new Fornecedor(1l, "Ambev", "08000000000");
        fornecedor1.exibirInformacoes();

        ForncedorPremium forncedorPremium = new ForncedorPremium(fornecedor1.getId(), fornecedor1.getNome(), fornecedor1.getTelefone(), 12.00);

        System.out.println("Taxa de desconto do fornecedor Premium: "+forncedorPremium.getTaxaDesconto());
    }
}