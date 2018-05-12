package com.example.favoritesapi.controllers;

import com.example.favoritesapi.models.Favorite;
import com.example.favoritesapi.repositories.FavoriteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
public class FavoriteController {
    @Autowired
    private FavoriteRepository favoriteRepository;

    @GetMapping("/")
    public Iterable<Favorite> findAllFavorite() {
        return favoriteRepository.findAll();
    }

    @DeleteMapping("/{userId}")
    public HttpStatus deleteFavoriteById(@PathVariable Long userId) {
        favoriteRepository.delete(userId);
        return HttpStatus.OK;
    }

    @PostMapping("/")
    public Favorite createNewFavorite(@RequestBody Favorite newFavorite) {
        return favoriteRepository.save(newFavorite);
    }
}
