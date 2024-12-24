package com.portfolio.PortfolioAPI.Controller;

import com.portfolio.PortfolioAPI.Model.ContactForm;
import com.portfolio.PortfolioAPI.Repository.ContactFormRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/contact")
public class ContactController {

    private final ContactFormRepository contactRepository;

    @Autowired
    public ContactController(ContactFormRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    // Handle form submission
    @PostMapping
    public ResponseEntity<String> handleContactForm(@Valid @RequestBody ContactForm contactForm) {
        try {
            // Save the contact form if validation passes
            contactRepository.save(contactForm);
            return ResponseEntity.ok("Thank you for reaching out! We will get back to you soon.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("There was an error saving your contact form. Please try again later.");
        }
    }

    // Get all messages from the contact form
    @GetMapping
    public ResponseEntity<List<ContactForm>> getAllMessages() {
        try {
            List<ContactForm> contactForms = contactRepository.findAll();
            return ResponseEntity.ok(contactForms);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(null);
        }
    }
}
