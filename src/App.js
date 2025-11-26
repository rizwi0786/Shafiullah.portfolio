import React from 'react';
import Header from './components/Header';
import ScrollProgressBar from './components/ScrollProgressBar';
import CustomCursor from './components/CustomCursor';
import CyberGridBackground from './components/CyberGridBackground'; // NEW
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Leadership from './components/Leadership';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App relative">
      <CustomCursor />
      <CyberGridBackground /> {/* NEW */}
      <ScrollProgressBar />
      <Header />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Leadership />
      <Contact />
    </div>
  );
}

export default App;
