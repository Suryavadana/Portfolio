import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importing React Router modules
import './App.css'; // General styling
import Header from './components/Header'; // Header component with navigation links
import LandingPage from './components/LandingPage'; // Landing page component
import About from './components/About'; // About page component
import Projects from './components/Projects'; // Projects page component
import Contact from './components/Contact'; // Contact page component
import ProjectDetails from './components/ProjectDetails'; // Project details component
import Certification from './components/Certification'; // Certification component

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header remains constant across all pages */}
        <Header />

        {/* Routes for navigation */}
        <Routes>
          {/* Route for Landing Page */}
          <Route path="/" element={<LandingPage />} />

          {/* Route for About Page */}
          <Route path="/about" element={<About />} />

          {/* Route for Projects Page */}
          <Route path="/projects" element={<Projects />} />

          {/* Route for Project Details */}
          <Route path="/projects/:id" element={<ProjectDetails />} />

          {/* Route for Certification Page */}
          <Route path="/certification" element={<Certification />} />

          {/* Route for Contact Page */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
