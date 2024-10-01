import React from 'react';
import { Button } from "@/components/ui/button"

const Community = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Join Our Developer Community</h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-8">
          Become part of a thriving community of developers. Share knowledge, collaborate on projects, and grow your skills alongside fellow enthusiasts. Our community is the perfect place to learn, network, and contribute to exciting open-source projects.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button className="bg-green-500 hover:bg-green-600">
            <a href="https://whatsapp.com/channel/0029VaLCZNs1XquXrwst7a0s" target="_blank" rel="noopener noreferrer">
              Join WhatsApp Channel
            </a>
          </Button>
          <Button className="bg-red-500 hover:bg-red-600">
            <a href="https://youtube.com/@comicfixxx?si=pVvm3QZyUfWKCE1C" target="_blank" rel="noopener noreferrer">
              Subscribe on YouTube
            </a>
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <a href="https://www.linkedin.com/company/comicfix-com/" target="_blank" rel="noopener noreferrer">
              Follow on LinkedIn
            </a>
          </Button>
          <Button className="bg-pink-500 hover:bg-pink-600">
            <a href="https://www.instagram.com/comicfix.in?igshid=MTZta2RlYTNldWsxOA==" target="_blank" rel="noopener noreferrer">
              Follow on Instagram
            </a>
          </Button>
          <Button className="bg-black hover:bg-gray-800">
            <a href="https://x.com/comicfixin?t=ZaZjstmseOOusAJKzxHiaA&s=09" target="_blank" rel="noopener noreferrer">
              Connect on X
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Community;