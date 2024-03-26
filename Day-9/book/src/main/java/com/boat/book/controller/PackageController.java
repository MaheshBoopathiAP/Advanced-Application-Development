package com.boat.book.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.web.bind.annotation.*;
import com.boat.book.model.Packages;
import com.boat.book.service.PackageService;

import jakarta.servlet.http.HttpServletRequest;

import java.util.List;

@RestController
@RequestMapping("/api/packages")
public class PackageController {

    @Autowired
    private PackageService packageService;

    @GetMapping
    public List<Packages> getAllPackages() {
        return packageService.getAllPackages();
    }

    @GetMapping("/{id}")
    public Packages getPackageById(@PathVariable Long id) {
        return packageService.getPackageById(id);
    }

    @PostMapping
    public Packages createPackage(@RequestBody Packages packages) {
        return packageService.createPackage(packages);
    }

    @PutMapping("/{id}")
    public Packages updatePackage(@PathVariable Long id, @RequestBody Packages packages) {
        return packageService.updatePackage(id, packages);
    }

    @DeleteMapping("/{id}")
    public void deletePackage(@PathVariable Long id) {
        packageService.deletePackage(id);
    }

}
