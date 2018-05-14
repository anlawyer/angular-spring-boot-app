package com.example.favoritesapi.models;

import lombok.*;
import javax.persistence.*;

@Data
@AllArgsConstructor @NoArgsConstructor @Getter @Setter
@Entity @Table(name = "FAVORITES")
public class Favorite {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "API")
    private String API;

    @Column(name = "Description")
    private String Description;

    @Column(name = "Link")
    private String Link;

}
