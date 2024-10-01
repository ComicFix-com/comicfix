import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import FeaturedProjects from '../components/FeaturedProjects';
import Community from '../components/Community';
import HowToContribute from '../components/HowToContribute';
import Donation from '../components/Donation';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <FeaturedProjects />
      <Community />
      <HowToContribute />
      <Donation />
    </div>
  );
};

export default HomePage;