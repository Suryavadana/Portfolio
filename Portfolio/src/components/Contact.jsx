import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Contact.css';

const Contact = () => {
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    try {
      const response = await axios.post('http://localhost:8080/contact', data);
      if (response.status === 200) {
        setMessage('Your message has been sent successfully!');
        setMessageType('success');
      } else {
        setMessage('There was an error sending your message. Please try again.');
        setMessageType('error');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setMessage('There was an error sending your message. Please try again.');
      setMessageType('error');
    }

    // Clear the message after 5 seconds
    setTimeout(() => {
      setMessage('');
      setMessageType('');
    }, 5000);
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" required />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" required />
          </div>
          <div className="form-field">
            <label htmlFor="subject">Subject:</label>
            <input type="text" name="subject" id="subject" required />
          </div>
          <div className="form-field">
            <label htmlFor="message">Message:</label>
            <textarea name="message" id="message" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
        {message && (
          <div className={`contact-message ${messageType}`}>
            {message}
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
