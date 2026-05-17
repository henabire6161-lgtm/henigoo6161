/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Ticker from './components/Ticker';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import ContentPortfolio from './components/ContentPortfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ContentArchive from './components/ContentArchive';

export default function App() {
  const [archiveOpen, setArchiveOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bg">
      <Ticker />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <ContentPortfolio onOpenArchive={() => setArchiveOpen(true)} />
        <Contact />
      </main>
      <Footer />
      
      <ContentArchive isOpen={archiveOpen} onClose={() => setArchiveOpen(false)} />
    </div>
  );
}

