package com.portfolio.PortfolioAPI.Repository;
import com.portfolio.PortfolioAPI.Model.ContactForm;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ContactFormRepository extends JpaRepository<ContactForm, Long> {
    // Custom query to find a contact form by email (or any unique identifier)
    Optional<ContactForm> findByEmail(String email);
}
