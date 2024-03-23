package br.com.gerenciadordeprodutos.api.Supplier.service;

import br.com.gerenciadordeprodutos.api.Supplier.dto.SupplierRequest;
import br.com.gerenciadordeprodutos.api.Supplier.dto.SupplierResponse;

public interface SupplierService {
    SupplierResponse create (SupplierRequest supplierRequest);
}
