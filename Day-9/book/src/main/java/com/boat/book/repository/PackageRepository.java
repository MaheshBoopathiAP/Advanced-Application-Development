package com.boat.book.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.boat.book.model.Packages;

@Repository
public interface PackageRepository extends JpaRepository<Packages, Long> {
    // You can add custom query methods here if needed
}
