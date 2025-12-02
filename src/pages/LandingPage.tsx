import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Products } from '../components/Products';
import { WhyChoose } from '../components/WhyChoose';
import { Projects } from '../components/Projects';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
export function LandingPage() {
  return <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <div id="services">
        <Services />
      </div>
      <div id="products">
        <Products />
      </div>
      <div id="why-choose">
        <WhyChoose />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>;
}