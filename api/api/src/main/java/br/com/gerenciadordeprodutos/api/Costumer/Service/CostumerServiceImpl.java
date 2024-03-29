package br.com.gerenciadordeprodutos.api.Costumer.Service;

import br.com.gerenciadordeprodutos.api.Costumer.dto.CostumerRequest;
import br.com.gerenciadordeprodutos.api.Costumer.dto.CostumerResponse;
import br.com.gerenciadordeprodutos.api.Costumer.model.Costumer;
import br.com.gerenciadordeprodutos.api.Costumer.repository.CostumerRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class CostumerServiceImpl implements CostumerService {
    @Autowired
    CostumerRepository costumerRepository;
    @Override
    public CostumerResponse create(@Valid CostumerRequest costumerRequest) {
        Costumer costumer = costumerRepository.save(new Costumer(
                UUID.randomUUID(),
                costumerRequest.getName(),
                costumerRequest.getEmail(),
                costumerRequest.getCpf(),
                costumerRequest.getCep(),
                costumerRequest.getRua(),
                costumerRequest.getNumero(),
                costumerRequest.getBairro(),
                costumerRequest.getCidade(),
                costumerRequest.getEstado(),
                costumerRequest.getPais()

        ));
        return new CostumerResponse(
                costumer.getId(),
                costumer.getName(),
                costumer.getCpf(),
                costumer.getEmail(),
                costumer.getCep(),
                costumer.getRua(),
                costumer.getNumero(),
                costumer.getBairro(),
                costumer.getCidade(),
                costumer.getEstado(),
                costumer.getPais()
        );
    }

    @Override
    public List<CostumerResponse> findAll() {
        return costumerRepository.findAll().stream()
                .map(costumer -> new CostumerResponse(
                        costumer.getId(),
                        costumer.getName(),
                        costumer.getCpf(),
                        costumer.getEmail(),
                        costumer.getCep(),
                        costumer.getRua(),
                        costumer.getNumero(),
                        costumer.getBairro(),
                        costumer.getCidade(),
                        costumer.getEstado(),
                        costumer.getPais()
                ))
                .collect(Collectors.toList());
    }

}
