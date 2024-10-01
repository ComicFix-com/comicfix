import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Button } from "@/components/ui/button"
import { SunIcon, MoonIcon, PaletteIcon } from 'lucide-react';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <SunIcon className="h-4 w-4" />;
      case 'dark':
        return <MoonIcon className="h-4 w-4" />;
      case 'style':
        return <PaletteIcon className="h-4 w-4" />;
      default:
        return <SunIcon className="h-4 w-4" />;
    }
  };

  return (
    <Button onClick={toggleTheme} variant="outline" size="icon">
      {getIcon()}
    </Button>
  );
};

export default ThemeToggle;