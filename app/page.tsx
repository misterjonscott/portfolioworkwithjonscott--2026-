'use client';

import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { useInView } from 'framer-motion';
import Header from '@/components/header';
import SplashScreen from '@/components/hero';

// Dynamically import all sections
const About = dynamic(() => import('@/sections/About'), { ssr: false });
const Snapshots = dynamic(() => import('@/sections/Snapshots'), { ssr: false });
const Projects = dynamic(() => import('@/sections/Projects'), { ssr: false });
const Skills = dynamic(() => import('@/sections/Skills'), { ssr: false });
const Recommendations = dynamic(() => import('@/sections/Recommendations'), { ssr: false });
const Contact = dynamic(() => import('@/sections/Contact'), { ssr: false });
const Footer = dynamic(() => import('@/components/footer'), { ssr: false });

const Home = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const activeSectionRef = useRef('home');

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const snapshotsRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const recommendationsRef = useRef(null);
  const contactRef = useRef(null);

  const isHomeInView = useInView(homeRef, { margin: "-50% 0px -50% 0px" });
  const isAboutInView = useInView(aboutRef, { margin: "-50% 0px -50% 0px" });
  const isSnapshotsInView = useInView(snapshotsRef, { margin: "-50% 0px -50% 0px" });
  const isProjectsInView = useInView(projectsRef, { margin: "-50% 0px -50% 0px" });
  const isSkillsInView = useInView(skillsRef, { margin: "-50% 0px -50% 0px" });
  const isRecommendationsInView = useInView(recommendationsRef, { margin: "-50% 0px -50% 0px" });
  const isContactInView = useInView(contactRef, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    const newActiveSection = 
      (isHomeInView && 'home') ||
      (isAboutInView && 'about') ||
      (isSnapshotsInView && 'snapshots') ||
      (isProjectsInView && 'projects') ||
      (isSkillsInView && 'skills') ||
      (isRecommendationsInView && 'recommendations') ||
      (isContactInView && 'contact');

    if (newActiveSection && newActiveSection !== activeSectionRef.current) {
      activeSectionRef.current = newActiveSection;
      setCurrentSection(newActiveSection);
    }
  }, [
    isHomeInView,
    isAboutInView,
    isSnapshotsInView,
    isProjectsInView,
    isSkillsInView,
    isRecommendationsInView,
    isContactInView,
  ]);
  
  return (
    <div style={{ position: 'relative' }} className='h-full'>
      <Header currentSection={currentSection} setCurrentSection={setCurrentSection} />
      <section id="home" ref={homeRef} className="relative">
        <SplashScreen />
      </section>
      <section id="about" ref={aboutRef} className="relative">
        <About />
      </section>
      <section id="snapshots" ref={snapshotsRef} className="relative">
        <Snapshots />
      </section>
      <section id="projects" ref={projectsRef} className="relative">
        <Projects />
      </section>
      <section id="skills" ref={skillsRef} className="relative">
        <Skills />
      </section>
      <section id="recommendations" ref={recommendationsRef} className="relative">
        <Recommendations />
      </section>
      <section id="contact" ref={contactRef} className="relative">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default Home;