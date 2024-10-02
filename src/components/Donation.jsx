import React from 'react';
import { Button } from "@/components/ui/button"

const Donation = () => {
 function join() {
 window.open('https://www.whatsapp.com/channel/0029VaLCZNs1XquXrwst7a0s')
 }
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Support Our Mission</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Your donation helps us maintain and grow our platform, supporting open-source projects and fostering a community of developers. Every contribution makes a difference!
        </p>
        <Button className="bg-green-500 hover:bg-green-600" onclick={pay}>
          Donate to Us 
        </Button>
      </div>
    </section>
  );
};

export default Donation;