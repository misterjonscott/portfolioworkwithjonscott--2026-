'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SkillItem {
  id: string;
  title: string;
  text: string;
}

interface CapabilityGroup {
  categoryName: string;
  items: SkillItem[];
}

// Strictly typed capabilities categorized like production design token architecture
const capabilities: Record<string, CapabilityGroup> = {
  designCraft: {
    categoryName: 'Design Craft & Token Strategy',
    items: [
      { id: 'figma', title: 'Figma', text: "I use Figma for UI/UX design, icon illustration, rapid-prototyping, and design-system reference. It facilitates the quick creation of wireframes, interactive prototypes, and high-fidelity mockups for user-centered design." },
      { id: 'radix', title: 'Radix UI', text: 'Radix UI offers a set of accessible, unstyled primitives for building high-quality design systems and user interfaces that don\'t compromise on bespoke styling.' },
    ],
  },
  uiEngineering: {
    categoryName: 'UI Engineering & Parity',
    items: [
      { id: 'typescript', title: 'TypeScript', text: 'JavaScript has a wise partner in TypeScript, allowing me to build robust, maintainable applications that use strict static typing to prevent runtime errors and ensure code quality.' },
      { id: 'react', title: 'React', text: "React and I have been building dynamic, component-based user interfaces for almost a decade. Its scalability and structural predictability make it my go-to choice for responsive web apps." },
      { id: 'nextjs', title: 'Next.js', text: 'Next.js allows for high-performance React architectures using server-side rendering and static generation. When the project demands deep SEO optimization and optimized routing, its value is unmatched.' },
      { id: 'node', title: 'Node.js', text: 'Node serves as an efficient backend-for-frontend layer, leveraging JavaScript to spinning up fast APIs and quick server logic for full-stack interface prototyping.' },
      { id: 'framer-motion', title: 'Framer Motion & Web Animations', text: 'I leverage advanced physics-based animation libraries to engineer high-performance, fluid, scroll-driven micro-interactions that elevate the digital narrative without causing layout thrashing or performance drops.' }
    ],
  },
  stylingSystems: {
    categoryName: 'Styling Systems & APIs',
    items: [
      { id: 'tailwind', title: 'Tailwind CSS', text: 'Tailwind CSS is a utility-first framework that drastically accelerates UI development and allows design systems to map directly from Figma tokens to atomic utility utilities.' },
      { id: 'shadcn', title: 'shadcn/ui', text: 'shadcn/ui provides beautifully designed, accessible UI building blocks using Radix primitives and Tailwind CSS, keeping full ownership of the underlying component code.' },
      { id: 'mui', title: 'Material UI', text: 'When a project doesn\'t feature an established design library, I leverage Material UI for rapid, highly documented UI execution, focusing on custom layer modifications rather than rebuilding primitives.' },
      { id: 'chakra', title: 'Chakra UI', text: 'Chakra allows for fast, theme-aware layouts with clean semantic prop tokens, making it excellent for rapid interface scaffolding and highly accessible components.' },
      { id: 'sass', title: 'Sass', text: 'Sass remains highly valuable for nesting, mixing, and creating structured stylesheets that achieve high specificity while eliminating global style collisions.' },
      { id: 'bootstrap', title: 'Bootstrap', text: 'A classic staple for mobile-first layout scaffolding. It remains exceptional for building responsive, robust utilities when legacy platforms require modern web migrations.' },
      { id: 'token-gov', title: 'Design Token Governance', text: 'Expertise in establishing strict structural parity between Figma component variables and production CSS/Tailwind configuration files, ensuring design changes scale instantly across multiple product lines without friction.' }
    ],
  },
  infrastructure: {
    categoryName: 'Infrastructure & Parity',
    items: [
      { id: 'git', title: 'Git', text: "My experiences with Git include resolving complex architecture conflicts and team branching anomalies. I treat version control as a tool for collaborative sanity and strict codebase deployment governance." },
      { id: 'ai-eng', title: 'Agentic Workflows & MCP', text: 'I integrate cutting-edge AI engineering protocols like the Model Context Protocol (MCP) to architect context-aware systems, automating complex development cycles and engineering smart interface behaviors.' }
    ],
  },
};

const Skills: React.FC = () => {
  // Default to showing React's breakdown on page load
  const [selectedItem, setSelectedItem] = useState<SkillItem>(capabilities.uiEngineering.items[1]);

  return (
    <section id="skills" className="section-container relative min-h-[100dvh] flex items-center justify-center justify-[safe_center] flex-col md:py-16 z-0 bg-slate-950 px-4 tracking-tight font-title">
      <div className="w-full max-w-[1100px] flex flex-col gap-6">
        
        {/* Code Editor Frame */}
        <div className="w-full rounded-xl border border-slate-800 bg-slate-900 shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[550px]">
          
          {/* Left: Interactive Token Mapping Schema */}
          <div className="w-full md:w-7/12 p-6 border-b md:border-b-0 md:border-r border-slate-800 flex flex-col justify-between">
            <div>
              {/* Fake Window Header Controls */}
              <div className="flex gap-2 mb-6">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-xs text-slate-500 font-mono ml-2">capabilities.ts</span>
              </div>

              {/* Token Tree JSON Representation */}
              <div className="font-mono text-sm leading-relaxed text-slate-400">
                <span className="text-indigo-400">const</span> <span className="text-amber-400">jonScottCapabilities</span> = <span className="text-slate-500">{'{'}</span>
                
                <div className="pl-4 flex flex-col gap-4 my-2">
                  {Object.entries(capabilities).map(([key, group]) => (
                    <div key={key} className="group">
                      <span className="text-teal-400">&quot;{key}&quot;</span>: <span className="text-slate-500">[</span>
                      
                      {/* Interactive Tags inside the Token Group */}
                      <div className="flex flex-wrap gap-2 pl-4 my-1">
                        {group.items.map((item) => {
                          const isSelected = selectedItem.id === item.id;
                          return (
                            <button
                              key={item.id}
                              onClick={() => setSelectedItem(item)}
                              className={`px-3 py-1 text-xs rounded border transition-all duration-150 ${
                                isSelected
                                  ? 'bg-amber-400/10 text-amber-300 border-amber-400/40 shadow-sm'
                                  : 'bg-slate-800/50 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200'
                              }`}
                            >
                              {item.title}
                            </button>
                          );
                        })}
                      </div>
                      <span className="text-slate-500">],</span>
                    </div>
                  ))}
                </div>
                
                <span className="text-slate-500">{'};'}</span>
              </div>
            </div>

            {/* Instruction Footer */}
            {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
            <div className="mt-6 text-xs font-mono text-slate-500 italic">
              // Click any token tag to inspect architecture capabilities and system deployment strategy.
            </div>
          </div>

          {/* Right: Output Terminal / Context Documentation Panel */}
          <div className="w-full md:w-5/12 bg-slate-950/40 p-6 flex flex-col justify-between">
            <div className="flex flex-col h-full justify-center">
              {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">// Token Output</span>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedItem.id}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.15 }}
                  className="flex flex-col gap-4"
                >
                  <h3 className="text-2xl font-bold text-slate-100 tracking-tight">
                    {selectedItem.title}
                  </h3>
                  
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {selectedItem.text}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Simulated Debug Stats */}
            <div className="border-t border-slate-900 pt-4 mt-6 flex justify-between items-center text-[11px] font-mono text-slate-600">
              <span>STATUS: 200 OK</span>
              <span>LANG: TSX</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;