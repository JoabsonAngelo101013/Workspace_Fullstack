package br.com.gerenciadordeprodutos.api.Costumer.Service;

import br.com.gerenciadordeprodutos.api.Costumer.dto.CostumerRequest;
import br.com.gerenciadordeprodutos.api.Costumer.dto.CostumerResponse;



import java.util.List;
import java.util.UUID;

public interface CostumerService {
    CostumerResponse create(CostumerRequest costumerRequest);
    List<CostumerResponse> findAll();
    CostumerResponse findById(UUID id);
    CostumerResponse update(UUID id, CostumerRequest costumerRequest);
    void deleteById(UUID id);
}

