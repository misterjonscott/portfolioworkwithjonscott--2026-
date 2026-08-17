'use client';

import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Define the props interface
interface HeaderProps {
  currentSection: string;
  setCurrentSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentSection, setCurrentSection }) => {
  const [isClient, setIsClient] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleNavigation = (section: string) => {
    setCurrentSection(section);
    setIsOpen(false);

    const element = document.getElementById(section);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 20; // 20px offset
      window.scrollTo({
        top,
        behavior: 'smooth',
      });
    }
  };

  if (!isClient) {
    return null;
  }

  return (
    <header className="fixed top-0 w-full bg-background shadow-md z-10">
      <div className="flex items-center justify-between mx-auto px-4 py-2 h-14">
        <div className="flex items-center space-x-2 font-title">
          {/* The Name: Authoritative & Bold */}
          <span className="text-3xl font-black tracking-tight text-foreground uppercase">
            Jon Scott
          </span>
          
          {/* The Divider */}
          <span className="text-border font-light text-xl">|</span>
          
          {/* The Discipline: Technical, Clean, Monospace Suffix */}
          <span className="font-mono text-sm bg-muted px-1.5 py-0.5 rounded text-primary border border-border/40">
            ux
          </span>
        </div>
        <div className="block md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu" className="p-2 rounded-md hover:bg-muted">
            <Menu size={24} />
          </button>
        </div>
        <div className="hidden md:flex gap-4">
          {['home', 'about', 'snapshots', 'projects', 'skills', 'recommendations', 'contact'].map((section) => (
            <div key={section} className="relative">
              <button
                onClick={() => handleNavigation(section)}
                className={`px-3 py-1.5 rounded-md ${currentSection === section ? 'text-primary-foreground' : 'hover:bg-muted'}`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
              <AnimatePresence>
                {currentSection === section && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 z-[-1] bg-primary rounded-md"
                  />
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed bottom-0 right-0 w-full h-full bg-background z-20 
                    flex md:hidden flex-col items-end justify-end p-4 pb-20"
        >
          <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 p-2 rounded-md hover:bg-muted" aria-label="Close Menu">
            <X size={24} />
          </button>
          <div className="mt-4 flex flex-col items-end">
            {['home', 'about', 'snapshots', 'projects', 'skills', 'recommendations', 'contact'].map((section) => (
              <div key={section} className="relative">
                <button
                  onClick={() => handleNavigation(section)}
                  className={`px-3 py-1.5 rounded-md mb-2 ${currentSection === section ? 'text-primary-foreground' : 'hover:bg-muted'}`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
                <AnimatePresence>
                  {currentSection === section && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 z-[-1] bg-primary rounded-md mb-2"
                    />
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;