'use client';

import { motion, useTransform, useScroll, MotionValue } from "framer-motion";
import { Brush, Code, Layers, Cpu } from "lucide-react"; 
import Image from "next/image";
import { useRef } from "react";

const features = [
  {
    // Upgraded from UserRound to Layers to perfectly symbolize system tokens
    icon: Layers, 
    title: "Design Craft & Token Systems",
    description: "I don't just design static layouts; I construct scalable design token architectures and accessible component primitives using tools like Figma and Radix UI. My focus is on building a robust, systemic language that guarantees visual consistency and execution quality at scale.",
    color: "bg-purple-600/40",
    inputRange: [0.35, 0.45, 0.55],
  },
  {
    icon: Code,
    title: "UI Engineering & Component Parity",
    description: "I implement what I design natively in robust, typed front-end systems using TypeScript, React, Next.js, and Node.js. By designing component APIs that mirror visual assets, I maintain absolute parity between design environments and production code bases.",
    color: "bg-purple-600/40",
    inputRange: [0.4, 0.5, 0.6],
  },
  {
    icon: Brush,
    title: "Styling Architectures & Animation",
    description: "Expert in crafting lightweight, low-latency UI layers using Tailwind CSS, shadcn/ui, and advanced Sass layouts. I utilize Framer Motion and native web animations to add fluid, purposeful motion that guides user focus and elevates the product's premium feel without sacrificing performance.",
    color: "bg-purple-600/40",
    inputRange: [0.45, 0.55, 0.65],
  },
  {
    icon: Cpu,
    title: "Velocity, Infrastructure & AI",
    description: "I optimize developer experience and team leverage by building clean CI/CD patterns and integrating cutting-edge AI infrastructure, including agentic workflows and Model Context Protocol (MCP) implementations, to automate the mundane and ship features faster.",
    color: "bg-purple-600/40",
    inputRange: [0.5, 0.6, 0.7],
  },
];

function FeatureCard({
  feature,
  scrollYProgress,
}: {
  feature: (typeof features)[number];
  scrollYProgress: MotionValue<number>;
}) {
  const IconComponent = feature.icon;

  const iconScale = useTransform(scrollYProgress, feature.inputRange, [1, 1.25, 1]);
  const circleScale = useTransform(scrollYProgress, feature.inputRange, [0.8, 1.2, 0.8]);
  const circleOpacity = useTransform(scrollYProgress, feature.inputRange, [0, 0.4, 0]);

  return (
    <div className="relative flex flex-col items-start text-left p-6 md:p-8 rounded-2xl bg-card/30 border border-border/40 hover:bg-card/60 hover:border-border/80 transition-all duration-300 w-full group shadow-sm">
      <div className="flex items-center gap-3 mb-3 w-full">
        <div className="relative flex items-center justify-center w-8 h-8 flex-shrink-0">
          <motion.div style={{ scale: iconScale }}>
            <IconComponent className="h-4 w-4 text-primary" aria-hidden="true" />
          </motion.div>
          <motion.div
            style={{ opacity: circleOpacity, scale: circleScale }}
            className={`absolute inset-0 h-full w-full ${feature.color} rounded-full filter blur-sm`}
          />
        </div>

        <h3 className="text-lg md:text-xl font-bold tracking-tight text-foreground font-title">
          {feature.title}
        </h3>
      </div>

      <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-normal font-body">
        {feature.description}
      </p>
    </div>
  );
}

const About = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  return (
    <div 
      ref={sectionRef}
      id="about"
      className="section-container relative min-h-[100dvh] flex items-center justify-center justify-[safe_center] flex-col py-12 md:py-20 z-0" 
    >
      {/* Hero Layout */}
      <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 md:gap-8 pb-12 max-w-[90%] md:max-w-[70%] mx-auto">
        <Image
          src="/images/jon-scott.webp"
          width={180}
          height={180}
          alt="Jon Scott"
          className="rounded-full flex-none max-w-[40%] md:max-w-full shadow-md"
        />
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-foreground font-title">
            Staff Design Engineer & UX Architect
          </h1>
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed font-normal font-body">
            20+ years blending high-fidelity visual systems with production-ready code. Specialized in architecting composable design token systems, strict component APIs, and AI-accelerated engineering pipelines that eliminate handoff friction and maximize interface velocity.
          </p>
        </div>
      </div>

      {/* Capabilities Grid */}
      <div className="container max-w-[90%] md:max-w-[70%] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} scrollYProgress={scrollYProgress} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;