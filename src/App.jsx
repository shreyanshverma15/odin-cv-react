import { useState } from 'react';
import './App.css';

// Import all the components
import Firstname from './components/Firstname.jsx';
import Lastname from './components/Lastname.jsx';
import City from './components/City.jsx';
import Email from './components/Email.jsx';
import Phone from './components/Phone.jsx';
import Education from './components/Education.jsx';
import ProfessionalSummary from './components/ProfessionalSummary.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Certifications from './components/Certifications.jsx';
import Languages from './components/Languages.jsx';
import GitHub from './components/GitHub.jsx';

export default function App() {
  return (
    <div className="App">
      <h1>CV Builder</h1>
      <Firstname />
      <Lastname />
      <City />
      <Email />
      <Phone />
      <Education />
      <ProfessionalSummary />
      <Skills />
      <Experience />
      <Certifications />
      <Languages />
      <GitHub />
    </div>
  );
}
