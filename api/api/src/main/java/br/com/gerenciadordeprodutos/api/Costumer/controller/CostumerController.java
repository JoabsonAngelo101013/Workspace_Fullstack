package br.com.gerenciadordeprodutos.api.Costumer.controller;

import br.com.gerenciadordeprodutos.api.Costumer.Service.CostumerService;
import br.com.gerenciadordeprodutos.api.Costumer.dto.CostumerRequest;
import br.com.gerenciadordeprodutos.api.Costumer.dto.CostumerResponse;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/costumers")
public class CostumerController {
    @Autowired
    CostumerService costumerService;

    @PostMapping
    public CostumerResponse create (@Valid @RequestBody CostumerRequest costumerRequest) {
        CostumerResponse costumerResponse = costumerService.create(costumerRequest);

        return costumerService.create(costumerRequest);
    }

}
