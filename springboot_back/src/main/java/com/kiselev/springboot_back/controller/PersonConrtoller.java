package com.kiselev.springboot_back.controller;

import com.kiselev.springboot_back.exception.ResourceNotFoundException;
import com.kiselev.springboot_back.model.Person;
import com.kiselev.springboot_back.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping()
public class PersonConrtoller {
    @Autowired
    private final PersonRepository repository;

    public PersonConrtoller(PersonRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/persons")
    public List<Person> getAllPersons(){
        return repository.findAll();
    }

    //create person rest api
    @PostMapping("/persons")
    public Person createPerson(@RequestBody Person person){
        return repository.save(person);
    }

    // get person by id rest api
    @GetMapping("/persons/{id}")
    public ResponseEntity<Person> getPersonById(@PathVariable Long id) {
        Person person = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Person not exist with id :" + id));
        return ResponseEntity.ok(person);
    }

    // update person rest api

    @PutMapping("/persons/{id}")
    public ResponseEntity<Person> updatePerson(@PathVariable Long id, @RequestBody Person personDetails){
        Person person = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Person not exist with id :" + id));

        person.setFirstName(personDetails.getFirstName());
        person.setLastName(personDetails.getLastName());
        person.setEmail(personDetails.getEmail());

        Person updatedPerson = repository.save(person);
        return ResponseEntity.ok(updatedPerson);
    }

    // delete person rest api
    @DeleteMapping("/persons/{id}")
    public ResponseEntity<Map<String, Boolean>> deletePerson(@PathVariable Long id){
        Person person = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Person not exist with id :" + id));

        repository.delete(person);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
