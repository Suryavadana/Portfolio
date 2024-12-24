import React from 'react';
import certificate from '../assets/images/certificate.png'; // Import certificate image
import background from '../assets/images/background.jpg'; // Import background image
import '../styles/Certificate.css'; // Import CSS file

const Certification = () => {
  return (
    <section
      className="certification"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column', // Arrange heading and image vertically
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <h1
        style={{
          fontSize: '2.5rem',
          color: '#333',
          marginBottom: '20px',
          animation: 'slideFromTop 1s ease-out',
        }}
      >
        LaunchCode Certificate
      </h1>
      <div className="certification-container">
        <img
          src={certificate}
          alt="Launch Code Certification"
          className="certificate-image"
          style={{
            width: '250%', // Resize the image to 50% of the container's width
            maxWidth: '500px', // Set a maximum width for the image
            height: 'auto',
            border: '2px solid #ccc',
            borderRadius: '10px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
          }}
        />
      </div>
    </section>
  );
};

export default Certification;
