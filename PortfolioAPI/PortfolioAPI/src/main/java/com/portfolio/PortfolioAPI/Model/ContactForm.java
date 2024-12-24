package com.portfolio.PortfolioAPI.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;

@Entity
public class ContactForm {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotEmpty(message = "Name is required.") // Ensure name is not empty
    @Size(min = 2, max = 100, message = "Name should be between 2 and 100 characters.") // Validate name length
    private String name;

    @NotEmpty(message = "Email is required.") // Ensure email is not empty
    @Email(message = "Invalid email format.") // Ensure email follows the correct format
    private String email;

    @NotEmpty(message = "Subject is required.") // Ensure subject is not empty
    @Size(min = 3, max = 150, message = "Subject should be between 3 and 150 characters.") // Validate subject length
    private String subject;

    @NotEmpty(message = "Message is required.") // Ensure message is not empty
    @Size(min = 10, max = 1000, message = "Message should be between 10 and 1000 characters.") // Validate message length
    private String message;

    // Getters and setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
