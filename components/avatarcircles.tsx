'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useTransform, MotionValue } from "framer-motion";

interface Circle {
  id: number;
  color: string;
  size: string;
  position: string;
  opacity: number;
  radius: number;
  speed: number;
}

const allPossibleCirclesData = [
  { id: 0, color: 'bg-pink-400', size: 'w-10 h-10', position: '-top-8 -left-6', radius: 10, speed: 2 },
  { id: 1, color: 'bg-cyan-400', size: 'w-12 h-12', position: '-top-4 -right-8', radius: 10, speed: 4 },
  { id: 2, color: 'bg-yellow-400', size: 'w-14 h-14', position: '-bottom-6 -left-4', radius: 10, speed: 6 },
  { id: 3, color: 'bg-purple-400', size: 'w-16 h-16', position: '-bottom-8 -right-6', radius: 10, speed: 8 },
  { id: 4, color: 'bg-orange-400', size: 'w-18 h-18', position: 'top-2 -left-12', radius: 10, speed: 10 },
  { id: 5, color: 'bg-green-400', size: 'w-20 h-20', position: 'bottom-4 -right-10', radius: 10, speed: 12 },
  { id: 6, color: 'bg-red-400', size: 'w-24 h-24', position: '-top-12 right-4', radius: 10, speed: 14 },
  { id: 7, color: 'bg-blue-400', size: 'w-28 h-28', position: 'top-8 -left-8', radius: 10, speed: 16 },
  { id: 8, color: 'bg-indigo-400', size: 'w-12 h-12', position: '-top-6 right-2', radius: 10, speed: 18 },
  { id: 9, color: 'bg-teal-400', size: 'w-14 h-14', position: 'bottom-2 -left-10', radius: 10, speed: 20 },
  { id: 10, color: 'bg-lime-400', size: 'w-16 h-16', position: '-bottom-4 right-8', radius: 10, speed: 22 },
  { id: 11, color: 'bg-fuchsia-400', size: 'w-18 h-18', position: 'top-6 -right-4', radius: 10, speed: 24 },
];

interface AvatarCirclesProps {
  imageUrl: string;
  alt: string;
  className?: string;
  scrollYProgress: MotionValue<number>;
}

const AvatarCircles: React.FC<AvatarCirclesProps> = ({ imageUrl, alt, className = "", scrollYProgress }) => {
  const [circlesToDisplay, setCirclesToDisplay] = useState<Circle[]>([]);
  const [isClient, setIsClient] = useState(false);

  // Define each useTransform call manually at the top level
  // This is the only way to satisfy React's rules
  const transformX0 = useTransform(scrollYProgress, (value) => Math.sin(value * Math.PI * 2) * 10);
  const transformY0 = useTransform(scrollYProgress, (value) => Math.cos(value * Math.PI * 2) * 10);
  const transformX1 = useTransform(scrollYProgress, (value) => Math.sin(value * Math.PI * 4) * 10);
  const transformY1 = useTransform(scrollYProgress, (value) => Math.cos(value * Math.PI * 4) * 10);
  const transformX2 = useTransform(scrollYProgress, (value) => Math.sin(value * Math.PI * 6) * 10);
  const transformY2 = useTransform(scrollYProgress, (value) => Math.cos(value * Math.PI * 6) * 10);
  const transformX3 = useTransform(scrollYProgress, (value) => Math.sin(value * Math.PI * 8) * 10);
  const transformY3 = useTransform(scrollYProgress, (value) => Math.cos(value * Math.PI * 8) * 10);
  const transformX4 = useTransform(scrollYProgress, (value) => Math.sin(value * Math.PI * 10) * 10);
  const transformY4 = useTransform(scrollYProgress, (value) => Math.cos(value * Math.PI * 10) * 10);
  const transformX5 = useTransform(scrollYProgress, (value) => Math.sin(value * Math.PI * 12) * 10);
  const transformY5 = useTransform(scrollYProgress, (value) => Math.cos(value * Math.PI * 12) * 10);
  const transformX6 = useTransform(scrollYProgress, (value) => Math.sin(value * Math.PI * 14) * 10);
  const transformY6 = useTransform(scrollYProgress, (value) => Math.cos(value * Math.PI * 14) * 10);
  const transformX7 = useTransform(scrollYProgress, (value) => Math.sin(value * Math.PI * 16) * 10);
  const transformY7 = useTransform(scrollYProgress, (value) => Math.cos(value * Math.PI * 16) * 10);
  const transformX8 = useTransform(scrollYProgress, (value) => Math.sin(value * Math.PI * 18) * 10);
  const transformY8 = useTransform(scrollYProgress, (value) => Math.cos(value * Math.PI * 18) * 10);
  const transformX9 = useTransform(scrollYProgress, (value) => Math.sin(value * Math.PI * 20) * 10);
  const transformY9 = useTransform(scrollYProgress, (value) => Math.cos(value * Math.PI * 20) * 10);
  const transformX10 = useTransform(scrollYProgress, (value) => Math.sin(value * Math.PI * 22) * 10);
  const transformY10 = useTransform(scrollYProgress, (value) => Math.cos(value * Math.PI * 22) * 10);
  const transformX11 = useTransform(scrollYProgress, (value) => Math.sin(value * Math.PI * 24) * 10);
  const transformY11 = useTransform(scrollYProgress, (value) => Math.cos(value * Math.PI * 24) * 10);

  // Store all motion values in a map for easy lookup
  const transforms: { [key: number]: { x: MotionValue<number>; y: MotionValue<number> } } = {
    0: { x: transformX0, y: transformY0 },
    1: { x: transformX1, y: transformY1 },
    2: { x: transformX2, y: transformY2 },
    3: { x: transformX3, y: transformY3 },
    4: { x: transformX4, y: transformY4 },
    5: { x: transformX5, y: transformY5 },
    6: { x: transformX6, y: transformY6 },
    7: { x: transformX7, y: transformY7 },
    8: { x: transformX8, y: transformY8 },
    9: { x: transformX9, y: transformY9 },
    10: { x: transformX10, y: transformY10 },
    11: { x: transformX11, y: transformY11 },
  };

  useEffect(() => {
    setIsClient(true);
    const numCircles = Math.floor(Math.random() * 3) + 6;
    const shuffledData = [...allPossibleCirclesData].sort(() => 0.5 - Math.random());
    const newCircles = shuffledData.slice(0, numCircles).map(circle => ({
      ...circle,
      opacity: Math.floor(Math.random() * 30) + 20,
    }));
    setCirclesToDisplay(newCircles);
  }, []);

  if (!isClient) {
    return (
      <div className={`absolute -top-16 left-1/2 transform -translate-x-1/2 ${className}`}>
        <div className="relative">
          <div className="relative z-10 w-32 h-32 border-2 border-black rounded-full overflow-hidden">
            <Image
              src={imageUrl}
              alt={alt}
              fill
              sizes="(max-width: 768px) 200px, 128px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`absolute -top-16 left-1/2 transform -translate-x-1/2 ${className}`}
    >
      <div className="relative">
        {circlesToDisplay.map((circle) => {
          const transform = transforms[circle.id];
          if (!transform) return null;

          return (
            <motion.div
              key={circle.id}
              className={`absolute ${circle.position} ${circle.size} ${circle.color} rounded-full transition-opacity duration-300`}
              style={{
                opacity: circle.opacity / 100,
                x: transform.x,
                y: transform.y,
              }}
            />
          );
        })}

        <div className="relative z-10 w-32 h-32 border-2 border-black rounded-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={alt}
            fill
            sizes="(max-width: 768px) 200px, 128px"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AvatarCircles;