import React from 'react';
import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
    <section className="bg-blue-800 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Empowering Developers to Collaborate on Open Source Projects</h1>
        <p className="text-xl mb-8">Contribute to real-world projects, enhance your skills, and join a global community of coders. Stay focused, learn, and excel in coding!</p>
        <div className="space-x-4">
          <Button className="bg-blue-500 hover:bg-blue-600">Explore Projects</Button>
          <Button className="bg-white text-blue-800 hover:bg-gray-100">Join Our Community</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;