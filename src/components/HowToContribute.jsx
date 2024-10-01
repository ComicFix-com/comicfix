import React from 'react';

const HowToContribute = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">How to Contribute to Open Source</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-xl mb-2">Step 1: Choose a Project</h3>
            <p>Browse through our GitHub repositories and find a project that interests you.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-xl mb-2">Step 2: Fork the Repository</h3>
            <p>Fork the project repository and start making improvements or additions.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-xl mb-2">Step 3: Submit a Pull Request</h3>
            <p>Once you're done with your changes, submit a pull request for review.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold text-xl mb-2">Step 4: Join the Discussion</h3>
            <p>Collaborate with the community through our various platforms and discussions.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToContribute;