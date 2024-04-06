package br.com.gerenciadordeprodutos.api.Supplier.service;

import br.com.gerenciadordeprodutos.api.Supplier.dto.SupplierRequest;
import br.com.gerenciadordeprodutos.api.Supplier.dto.SupplierResponse;
import jakarta.validation.Valid;

import java.util.List;
import java.util.UUID;

public interface SupplierService {
    SupplierResponse create (SupplierRequest supplierRequest);
    List<SupplierResponse> findAll();
    SupplierResponse findById(UUID id);
    SupplierResponse update(UUID id, @Valid SupplierRequest supplierRequest);
    void deleteById(UUID id);
}
