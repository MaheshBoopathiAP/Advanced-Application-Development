package com.boat.book.service;

import com.boat.book.model.AuthenticationResponse;
import com.boat.book.model.UserPackage;
import com.boat.book.repository.UserPackageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserPackageService {

    private final UserPackageRepository userPackageRepository;

    @Autowired
    public UserPackageService(UserPackageRepository userPackageRepository) {
        this.userPackageRepository = userPackageRepository;
    }

    public UserPackage createUserPackage(AuthenticationResponse authenticationResponse, String title, String imageUrl, String dayPrice, String nightPrice, String description) {
        Long userId = authenticationResponse.getId(); // Get the id from the AuthenticationResponse
        UserPackage userPackage = new UserPackage();
        userPackage.setUserId(userId);
        userPackage.setTitle(title);
        userPackage.setImageUrl(imageUrl);
        userPackage.setDayPrice(dayPrice);
        userPackage.setNightPrice(nightPrice);
        userPackage.setDescription(description);
        return userPackageRepository.save(userPackage);
    }
}
