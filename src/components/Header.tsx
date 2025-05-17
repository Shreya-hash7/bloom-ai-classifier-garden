
import React from 'react';
import { Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-nature-100 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-nature-400 to-nature-600 flex items-center justify-center">
            <span className="text-white font-semibold">🌸</span>
          </div>
          <h1 className="text-xl font-bold gradient-text">FloraVision</h1>
        </Link>
        
        <div className="flex items-center space-x-4">
          <Link to="/about">
            <Button variant="ghost" size="sm" className="text-sm">
              About
            </Button>
          </Link>
          <Button variant="ghost" size="sm" className="text-sm gap-2">
            <Github size={16} />
            <span className="hidden sm:inline">GitHub</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
