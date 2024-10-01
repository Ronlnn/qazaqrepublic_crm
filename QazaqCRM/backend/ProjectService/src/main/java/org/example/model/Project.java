package org.example.model;

import jakarta.persistence.*;


import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "projects")
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private String name;
    private String description;
//    @OneToMany(mappedBy = "users")
//
//    @ElementCollection
//    @CollectionTable(name = "project_users", joinColumns = @JoinColumn(name = "project_id"))
//    @Column(name = "user_id")
//    private List<UUID> userIds = new ArrayList<>();
}
