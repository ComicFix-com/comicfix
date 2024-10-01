import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import FeaturedProjects from '../components/FeaturedProjects';
import Community from '../components/Community';
import HowToContribute from '../components/HowToContribute';
import Donation from '../components/Donation';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <Hero />
        <About />
        <FeaturedProjects />
        <Community />
        <HowToContribute />
        <Donation />
      </main>
      <Footer />
    </div>
  );
};

export default Index;