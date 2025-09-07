import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Efficiency from './components/Efficiency';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Efficiency />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;