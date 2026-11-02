import React, { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

// Lazy loading component optimization
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Resume = lazy(() => import('./components/Resume'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-900 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<div className="text-center py-20 text-teal-400 font-semibold">Loading content...</div>}>
          <About />
          <Skills />
          <Projects />
          <Resume />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;