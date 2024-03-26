package com.boat.book.controller;

import com.boat.book.model.Packages;
import com.boat.book.model.User;
import com.boat.book.model.UserPackage;
import com.boat.book.repository.UserPackageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user-packages")
public class UserPackageController {

    private final UserPackageRepository userPackageRepository;

    @Autowired
    public UserPackageController(UserPackageRepository userPackageRepository) {
        this.userPackageRepository = userPackageRepository;
    }

    @GetMapping("/user")
    public List<Packages> getPackagesByUserId() {
        // Get the currently authenticated user
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User currentUser = (User) authentication.getPrincipal();
    
        // Retrieve the user ID
        Long userId = currentUser.getId();
    
        // Use the user ID to fetch packages
        return userPackageRepository.findPackagesByUserId(userId);
    }
    


    @PostMapping("/package")
    public UserPackage createUserPackage(@RequestBody UserPackage userPackage) {
        // Get the currently authenticated user
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User currentUser = (User) authentication.getPrincipal();

        // Set the user ID for the new user package
        userPackage.setUserId(currentUser.getId());

        // Save the new user package
        return userPackageRepository.save(userPackage);
    }
// Update method
@PutMapping("/package/{id}")
public ResponseEntity<UserPackage> updateUserPackage(@PathVariable Long id, @RequestBody UserPackage updatedPackage) {
    UserPackage existingPackage = userPackageRepository.findById(id).orElse(null);

    if (existingPackage == null) {
        return ResponseEntity.notFound().build();
    }

    // Update package details
    existingPackage.setTitle(updatedPackage.getTitle());
    existingPackage.setImageUrl(updatedPackage.getImageUrl());
    existingPackage.setDayPrice(updatedPackage.getDayPrice());
    existingPackage.setNightPrice(updatedPackage.getNightPrice());
    existingPackage.setDescription(updatedPackage.getDescription());

    // Save and return updated package
    UserPackage updatedUserPackage = userPackageRepository.save(existingPackage);
    return ResponseEntity.ok(updatedUserPackage);
}

// Delete method
@DeleteMapping("/package/{id}")
public ResponseEntity<?> deleteUserPackage(@PathVariable Long id) {
    UserPackage existingPackage = userPackageRepository.findById(id).orElse(null);

    if (existingPackage == null) {
        return ResponseEntity.notFound().build();
    }

    userPackageRepository.delete(existingPackage);
    return ResponseEntity.ok().build();
}
}

