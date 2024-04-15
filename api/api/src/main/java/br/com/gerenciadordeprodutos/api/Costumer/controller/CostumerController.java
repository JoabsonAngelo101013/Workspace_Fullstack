package br.com.gerenciadordeprodutos.api.Costumer.controller;

import br.com.gerenciadordeprodutos.api.Costumer.Service.CostumerService;
import br.com.gerenciadordeprodutos.api.Costumer.dto.CostumerRequest;
import br.com.gerenciadordeprodutos.api.Costumer.dto.CostumerResponse;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

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
    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public List<CostumerResponse> findAll(){
        return costumerService.findAll();
    }
    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public CostumerResponse findById(@PathVariable UUID id) {
        return costumerService.findById(id);
    }
    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public CostumerResponse update(@PathVariable UUID id, @RequestBody CostumerRequest costumerRequest) {
        return costumerService.update(id, costumerRequest);
    }
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteById(@PathVariable UUID id) {
        costumerService.deleteById(id);
    }

}
