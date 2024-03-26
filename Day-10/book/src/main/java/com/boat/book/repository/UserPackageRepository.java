package com.boat.book.repository;

import com.boat.book.model.Packages;
import com.boat.book.model.UserPackage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
public interface UserPackageRepository extends JpaRepository<UserPackage, Long> {

    @Query("SELECT new com.boat.book.model.Packages(up.id, up.title, up.imageUrl, up.dayPrice, up.nightPrice, up.description) FROM UserPackage up WHERE up.userId = :userId")
    List<Packages> findPackagesByUserId(@Param("userId") Long userId);
    
}

