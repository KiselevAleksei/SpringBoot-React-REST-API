package com.kiselev.springboot_back.repository;

import com.kiselev.springboot_back.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonRepository extends JpaRepository<Person, Long> {
}
