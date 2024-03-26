package com.boat.book.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity
@Data
@Table(name = "user_packages_table")
public class UserPackage {

    @Getter
    @Setter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_id") 
    private Long userId;

    @Column(name = "title")
    private String title;

    @Column(name = "image_url")
    private String imageUrl;

    @Column(name = "day_price")
    private String dayPrice;

    @Column(name = "night_price")
    private String nightPrice;

    @Column(name = "description")
    private String description;

    // Default constructor
    public UserPackage() {
    }

    public UserPackage(Long id,Long userId, String title, String imageUrl, String dayPrice, String nightPrice, String description) {
        this.id = id;
        this.userId = userId;
        this.title = title;
        this.imageUrl = imageUrl;
        this.dayPrice = dayPrice;
        this.nightPrice = nightPrice;
        this.description = description;
    }

    // Getters and setters
}
