import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">About Us</h3>
            <ul>
              <li><a href="#" className="hover:underline">Our Mission</a></li>
              <li><a href="#" className="hover:underline">Team</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Open Source Projects</h3>
            <ul>
              <li><a href="#" className="hover:underline">Featured Projects</a></li>
              <li><a href="#" className="hover:underline">How to Contribute</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Community</h3>
            <ul>
              <li><a href="#" className="hover:underline">Guidelines</a></li>
              <li><a href="#" className="hover:underline">Events</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <ul>
              <li><a href="#" className="hover:underline">Support</a></li>
              <li><a href="#" className="hover:underline">Partnerships</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 ComicFix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;