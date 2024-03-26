package com.boat.book.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boat.book.model.Packages;
import com.boat.book.model.User;
import com.boat.book.model.UserPackage;
import com.boat.book.repository.PackageRepository;
import com.boat.book.repository.UserPackageRepository;
import com.boat.book.repository.UserRepository;

import java.util.List;
import java.util.Optional;

@Service
public class PackageService {

    @Autowired
    private PackageRepository packageRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserPackageRepository userPackageRepository;

    public Packages createPackage(Packages packages) {
        // Save the package
        return packageRepository.save(packages);
    }

    public List<Packages> getAllPackages() {
        return packageRepository.findAll();
    }

    public Packages getPackageById(Long id) {
        Optional<Packages> optionalPackage = packageRepository.findById(id);
        return optionalPackage.orElse(null);
    }

    public Packages updatePackage(Long id, Packages updatedPackage) {
        Optional<Packages> optionalPackage = packageRepository.findById(id);
        if (optionalPackage.isPresent()) {
            Packages existingPackage = optionalPackage.get();
            // Update existing package fields with the new values
            existingPackage.setTitle(updatedPackage.getTitle());
            existingPackage.setImageUrl(updatedPackage.getImageUrl());
            existingPackage.setDayPrice(updatedPackage.getDayPrice());
            existingPackage.setNightPrice(updatedPackage.getNightPrice());
            existingPackage.setDescription(updatedPackage.getDescription());
            return packageRepository.save(existingPackage);
        } else {
            throw new IllegalArgumentException("Package with ID " + id + " not found.");
        }
    }

    public void deletePackage(Long id) {
        packageRepository.deleteById(id);
    }
}
