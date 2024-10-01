import React from 'react';
import { Button } from "@/components/ui/button"
import { HomeIcon, FolderIcon, UsersIcon, HeartIcon, MailIcon } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className="bg-blue-900 dark:bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">ComicFix</div>
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="flex items-center"><HomeIcon className="mr-1" size={16} /> Home</a>
          <a href="#" className="flex items-center"><FolderIcon className="mr-1" size={16} /> Open Source Projects</a>
          <a href="#" className="flex items-center"><UsersIcon className="mr-1" size={16} /> Community</a>
          <a href="#" className="flex items-center"><HeartIcon className="mr-1" size={16} /> Donate</a>
          <a href="#" className="flex items-center"><MailIcon className="mr-1" size={16} /> Contact Us</a>
        </nav>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800">Join Our Community</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;