package br.com.gerenciadordeprodutos.api.Supplier.service;

import br.com.gerenciadordeprodutos.api.Supplier.dto.SupplierRequest;
import br.com.gerenciadordeprodutos.api.Supplier.dto.SupplierResponse;
import br.com.gerenciadordeprodutos.api.Supplier.repository.SupplierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SupplierServiceImpl implements SupplierService {
    @Autowired
    SupplierRepository supplierRepository;

    @Override
    public SupplierResponse create(SupplierRequest supplierRequest) {
        return null;
    }
}
