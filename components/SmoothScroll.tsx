"use client";

import React, { useEffect, useRef, useCallback } from 'react';

interface SmoothScrollProps {
  children: React.ReactNode;
  onSectionChange: (section: string) => void;
  currentSection: string;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children, onSectionChange, currentSection }) => {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isProgrammaticScroll = useRef(false); // Flag to track programmatic scrolling

  useEffect(() => {
    sectionsRef.current = sectionsRef.current.slice(0, React.Children.count(children));
  }, [children]);

  const handleScroll = useCallback(() => {
    if (isProgrammaticScroll.current) {
      isProgrammaticScroll.current = false;
      return;
    }
  
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
  
    scrollTimeoutRef.current = setTimeout(() => {
      requestAnimationFrame(() => {
        const sections = sectionsRef.current.filter(Boolean) as HTMLDivElement[];
        const viewportCenter = window.scrollY + window.innerHeight / 2;
  
        let closestSectionIndex = 0;
        let closestDistance = Infinity;
  
        sections.forEach((section, index) => {
          const rect = section.getBoundingClientRect();
          const sectionCenter = rect.top + window.scrollY + rect.height / 2;
          const distance = Math.abs(viewportCenter - sectionCenter);
  
          if (distance < closestDistance) {
            closestDistance = distance;
            closestSectionIndex = index;
          }
        });
  
        const closestSectionId = sections[closestSectionIndex]?.querySelector('.section-container')?.id || "";
  
        if (closestSectionId !== currentSection) {
          onSectionChange(closestSectionId);
        }
  
        isProgrammaticScroll.current = true; // Mark scroll as programmatic
        sections[closestSectionIndex]?.scrollIntoView({ behavior: 'smooth' });
      });
    }, 100); // Debounce delay of 100ms
  }, [onSectionChange, currentSection]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, [handleScroll]);

  return (
    <div>
      {React.Children.map(children, (child, index) => (
        <div
          className="h-screen"
          key={index}
          ref={(el) => { sectionsRef.current[index] = el; }}
          role="region"
          aria-labelledby={`section-${index}`}
          tabIndex={0}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default SmoothScroll;