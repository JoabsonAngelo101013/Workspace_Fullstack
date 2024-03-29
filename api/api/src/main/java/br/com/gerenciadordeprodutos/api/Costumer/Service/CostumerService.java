package br.com.gerenciadordeprodutos.api.Costumer.Service;

import br.com.gerenciadordeprodutos.api.Costumer.dto.CostumerRequest;
import br.com.gerenciadordeprodutos.api.Costumer.dto.CostumerResponse;


import java.util.List;

public interface CostumerService {
    CostumerResponse create (CostumerRequest costumerRequest);
    List<CostumerResponse> findAll();
}

