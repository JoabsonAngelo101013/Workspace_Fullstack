package br.com.gerenciadordeprodutos.api.Supplier.controller;

import br.com.gerenciadordeprodutos.api.Supplier.dto.SupplierRequest;
import br.com.gerenciadordeprodutos.api.Supplier.dto.SupplierResponse;
import br.com.gerenciadordeprodutos.api.Supplier.service.SupplierService;
import jakarta.annotation.security.RolesAllowed;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/suppliers")
@RolesAllowed({"ROLE_ADMINISTRATOR","ROLE_MANANGER"})
public class SupplierController {
    @Autowired
    SupplierService supplierService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public SupplierResponse createSupplier(@Valid @RequestBody SupplierRequest supplierRequest){
        return supplierService.create(supplierRequest);

    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<SupplierResponse> findAll(){
        return supplierService.findAll();
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public SupplierResponse findById(@PathVariable UUID id){
        return supplierService.findById(id);
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public SupplierResponse update(@PathVariable UUID id, @Valid @RequestBody SupplierRequest supplierRequest) {
        return supplierService.update(id, supplierRequest);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public  void delete(@PathVariable UUID id){
        supplierService.deleteById(id);
    }
}