package br.com.gerenciadordeprodutos.api.Costumer.Service;

import br.com.gerenciadordeprodutos.api.Costumer.dto.CostumerAddressResponse;
import br.com.gerenciadordeprodutos.api.Costumer.dto.CostumerRequest;
import br.com.gerenciadordeprodutos.api.Costumer.dto.CostumerResponse;
import br.com.gerenciadordeprodutos.api.Costumer.model.Costumer;
import br.com.gerenciadordeprodutos.api.Costumer.model.CostumerAddress;
import br.com.gerenciadordeprodutos.api.Costumer.repository.CostumerRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class CostumerServiceImpl implements CostumerService {
    @Autowired
    CostumerRepository costumerRepository;

    @Override
    public CostumerResponse create(CostumerRequest costumerRequest) {
        Costumer costumer = new Costumer(
                UUID.randomUUID(),
                costumerRequest.getName(),
                costumerRequest.getCpf(),
                costumerRequest.getEmail(),
                null,
                LocalDateTime.now()
        );

        CostumerAddress costumerAddress = new CostumerAddress(
                UUID.randomUUID(),
                costumerRequest.getCostumerAddressRequest().getStreet(),
                costumerRequest.getCostumerAddressRequest().getNumber(),
                costumerRequest.getCostumerAddressRequest().getNeighborhood(),
                costumerRequest.getCostumerAddressRequest().getCity(),
                costumerRequest.getCostumerAddressRequest().getState(),
                costumerRequest.getCostumerAddressRequest().getCountry(),
                costumerRequest.getCostumerAddressRequest().getZipCode(),
                costumer
        );

        costumer.setAddress(costumerAddress);

        Costumer savedCostumer = costumerRepository.save(costumer);

        return new CostumerResponse(
                savedCostumer.getId(),
                savedCostumer.getName(),
                savedCostumer.getCpf(),
                savedCostumer.getEmail(),
                new CostumerAddressResponse(
                        savedCostumer.getAddress().getStreet(),
                        savedCostumer.getAddress().getNumber(),
                        savedCostumer.getAddress().getNeighborhood(),
                        savedCostumer.getAddress().getCity(),
                        savedCostumer.getAddress().getState(),
                        savedCostumer.getAddress().getCountry(),
                        savedCostumer.getAddress().getZipCode()
                ),
                savedCostumer.getCreatedAt()
        );
    }

    @Override
    public List<CostumerResponse> findAll() {
        return costumerRepository.findAll().stream().map(costumer-> new CostumerResponse(
                costumer.getId(),
                costumer.getName(),
                costumer.getCpf(),
                costumer.getEmail(),
                new CostumerAddressResponse(
                        costumer.getAddress().getStreet(),
                        costumer.getAddress().getNumber(),
                        costumer.getAddress().getNeighborhood(),
                        costumer.getAddress().getCity(),
                        costumer.getAddress().getState(),
                        costumer.getAddress().getCountry(),
                        costumer.getAddress().getZipCode()
                ),
                costumer.getCreatedAt()
                ))
                .collect(Collectors.toList());

    }


    @Override
    public CostumerResponse findById(UUID id) {
        return costumerRepository.findById(id).map(costumer -> new CostumerResponse(
                costumer.getId(),
                costumer.getName(),
                costumer.getCpf(),
                costumer.getEmail(),
                new CostumerAddressResponse(
                        costumer.getAddress().getStreet(),
                        costumer.getAddress().getNumber(),
                        costumer.getAddress().getNeighborhood(),
                        costumer.getAddress().getCity(),
                        costumer.getAddress().getState(),
                        costumer.getAddress().getCountry(),
                        costumer.getAddress().getZipCode()
                ),
                costumer.getCreatedAt()
        )).orElseThrow(() -> new ResponseStatusException
                (HttpStatus.NOT_FOUND, "Costumer not Found with id " + id));
    }

    @Override
    public CostumerResponse update(UUID id, CostumerRequest costumerRequest) {
        return costumerRepository.findById(id).map(costumer -> {
            costumer.setName(costumerRequest.getName());
            costumer.setCpf(costumerRequest.getCpf());
            costumer.setEmail(costumerRequest.getEmail());
        });
    }

    @Override
    public void deleteById(UUID id) {
        if (costumerRepository.existsById(id)) {
            costumerRepository.deleteById(id);
        }else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Costumer not found with id " + id);
        }

    }

}
