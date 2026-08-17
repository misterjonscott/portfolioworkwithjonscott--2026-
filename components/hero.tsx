'use client';

import React, { useRef, useEffect, useState } from 'react';

// Define the color palettes outside the component.
const palettes = [
  ['#004E98', '#3A6EA5', '#88BBD6', '#FF6700', '#FFC94B'],
  ['#70d6ff', '#ff70a6', '#ff9770', '#ffd670', '#e9ff70'],
  ['#9b5de5', '#f15bb5', '#fee440', '#00bbf9', '#00f5d4']
];

// Define types for points and circle properties
interface Point {
  x: number;
  y: number;
  z: number;
  rotation: number;
  distortProps: {
    nu: number;
    col1: string;
    col2: string;
  };
}

interface CircleProps {
  nu: number;
  col1: string;
  col2: string;
}

const SplashScreen: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollYRef = useRef(0);
  const animationFrameId = useRef<number | null>(null);
  const pointsRef = useRef<Point[]>([]);
  const tRef = useRef(0);
  const [textOpacity, setTextOpacity] = useState(1);
  const [backgroundColor, setBackgroundColor] = useState('#22223b');

  // Helper function to interpolate colors
  const interpolateColor = (color1: string, color2: string, factor: number) => {
    const hexToRgb = (hex: string) =>
      hex.match(/\w\w/g)?.map((x) => parseInt(x, 16)) || [0, 0, 0];
    const rgbToHex = (r: number, g: number, b: number) =>
      `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;

    const c1 = hexToRgb(color1);
    const c2 = hexToRgb(color2);

    const r = Math.round(c1[0] + factor * (c2[0] - c1[0]));
    const g = Math.round(c1[1] + factor * (c2[1] - c1[1]));
    const b = Math.round(c1[2] + factor * (c2[2] - c1[2]));

    return rgbToHex(r, g, b);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // --- Drawing State & Helpers ---
    const sketchState = {
      width: window.innerWidth,
      height: window.innerHeight,
      paletteSelected1: palettes[Math.floor(Math.random() * palettes.length)],
      paletteSelected2: palettes[Math.floor(Math.random() * palettes.length)],
    };

    const seededRandom = {
      seed: Math.random() * 100000,
      random: (min = 0, max = 1) => {
        const x = Math.sin(seededRandom.seed++) * 10000;
        const val = x - Math.floor(x);
        return val * (max - min) + min;
      },
    };

    const createVector = (x: number, y: number, z = 0) => ({ x, y, z });
    const dist = (x1: number, y1: number, x2: number, y2: number) => Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

    // --- Sketch Drawing Functions ---
    const gradient = (r: number, col1: string, col2: string) => {
      ctx.globalAlpha = 0.3;
      const gradientFill = ctx.createLinearGradient(0, -r, 0, r);
      gradientFill.addColorStop(0, col1);
      gradientFill.addColorStop(1, col2);
      ctx.fillStyle = gradientFill;
    };

    const distortedCircle = (r: number, circleProps: CircleProps) => {
      ctx.save();
      gradient(r, circleProps.col1, circleProps.col2);

      const nu = circleProps.nu;
      const nums = 5;

      for (let i = 0; i < nums; i++) {
        seededRandom.seed = nu;
        r = r + (i * 10);

        const p1 = createVector(0, -r / 2);
        const p2 = createVector(r / 2, 0);
        const p3 = createVector(0, r / 2);
        const p4 = createVector(-r / 2, 0);

        const val = seededRandom.random(0.1, 0.7);
        const random_a8_1 = seededRandom.random(-r * val, r * val);
        const random_a2_3 = seededRandom.random(-r * val, r * val);
        const random_a4_5 = seededRandom.random(-r * val, r * val);
        const random_a6_7 = seededRandom.random(-r * val, r * val);
        const ran_anker_lenA = r * seededRandom.random(0.2, 0.5);
        const ran_anker_lenB = r * seededRandom.random(0.2, 0.5);

        const a1 = createVector(ran_anker_lenA, -r / 2 + random_a8_1);
        const a2 = createVector(r / 2 + random_a2_3, -ran_anker_lenB);
        const a3 = createVector(r / 2 - random_a2_3, ran_anker_lenA);
        const a4 = createVector(ran_anker_lenB, r / 2 + random_a4_5);
        const a5 = createVector(-ran_anker_lenA, r / 2 - random_a4_5);
        const a6 = createVector(-r / 2 + random_a6_7, ran_anker_lenB);
        const a7 = createVector(-r / 2 - random_a6_7, -ran_anker_lenA);
        const a8 = createVector(-ran_anker_lenB, -r / 2 - random_a8_1);

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.bezierCurveTo(a1.x, a1.y, a2.x, a2.y, p2.x, p2.y);
        ctx.bezierCurveTo(a3.x, a3.y, a4.x, a4.y, p3.x, p3.y);
        ctx.bezierCurveTo(a5.x, a5.y, a6.x, a6.y, p4.x, p4.y);
        ctx.bezierCurveTo(a7.x, a7.y, a8.x, a8.y, p1.x, p1.y);
        ctx.closePath();
        ctx.fill();
      }
      ctx.restore();
    };

    // --- Main Loop ---
    const drawLoop = () => {
      tRef.current += 0.01;

      // Clear the canvas, but don't draw the background color
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = '#355070';
      
      const scrollOffset = scrollYRef.current * 2;
      const centerX = canvas.width / 2;
      
      for (let i = 0; i < pointsRef.current.length; i++) {
        const p = pointsRef.current[i];
        ctx.save();
        let offsetX = 0;
        if (p.x < centerX) {
          offsetX = -scrollOffset;
        } else {
          offsetX = scrollOffset;
        }

        const floatX = Math.sin(tRef.current + p.x * 0.005) * 20;
        const floatY = Math.cos(tRef.current + p.y * 0.005) * 10;

        ctx.translate(p.x + offsetX + floatX, p.y + floatY);
        ctx.rotate(p.rotation);
        const r = p.z - 5;
        distortedCircle(r * 1.3, p.distortProps);
        ctx.restore();
      }
      
      animationFrameId.current = requestAnimationFrame(drawLoop);
    };

    // --- Point Generation (Run Only Once) ---
    const generatePoints = () => {
      const newPoints: Point[] = [];
      const count = 50;
      for (let i = 0; i < count; i++) {
        const s = seededRandom.random(sketchState.width * 0.05, sketchState.width * 0.5);

        const x = seededRandom.random(s / 2, sketchState.width - s / 2);
        const y = seededRandom.random(s / 2, sketchState.height - s / 2);

        let add = true;
        for (let j = 0; j < newPoints.length; j++) {
          const p = newPoints[j];
          if (dist(x, y, p.x, p.y) < (s + p.z) * 0.6) {
            add = false;
            break;
          }
        }
        if (add) {
          newPoints.push({
            x,
            y,
            z: s,
            rotation: seededRandom.random(0, 360) * Math.PI / 180,
            distortProps: {
              nu: seededRandom.random(0, 100),
              col1: sketchState.paletteSelected1[Math.floor(seededRandom.random(0, sketchState.paletteSelected1.length))],
              col2: sketchState.paletteSelected2[Math.floor(seededRandom.random(0, sketchState.paletteSelected2.length))]
            }
          });
        }
      }
      pointsRef.current = newPoints;
    };
    
    // --- Event Handlers ---
    const handleScroll = () => {
      const scrollY = window.scrollY;
      scrollYRef.current = scrollY;
      
      const maxScroll = window.innerHeight;
      // Calculate a scaled scroll progress
      // A factor of 2 means the transition completes in half the scroll distance.
      const scrollProgress = Math.min(scrollY / (maxScroll * 0.5), 1);
      
      // We will multiply scrollProgress to make it disappear faster.
      setTextOpacity(1 - scrollProgress * 2);

      // Interpolate background color
      const newColor = interpolateColor('#22223b', '#ffffff', scrollProgress);
      setBackgroundColor(newColor);
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // --- Initialization ---
    generatePoints();
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('scroll', handleScroll);
    animationFrameId.current = requestAnimationFrame(drawLoop);

    // --- Cleanup ---
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      className="relative z-0 w-full h-screen overflow-hidden transition-colors duration-500 ease-in-out"
      style={{ backgroundColor }}
    >
      <canvas 
        ref={canvasRef} 
        className="w-full h-full absolute top-0 left-0" // The canvas should be transparent
        style={{ backgroundColor }}
      />
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none text-white font-bold">
        <h1 
          className="text-center text-5xl md:text-7xl leading-tight"
          style={{ 
            opacity: textOpacity,
            transition: 'opacity 0.3s ease-out'
          }}
        >
          Crafting Experiences.
          <br />
          Building Interfaces.
        </h1>
      </div>
    </div>
  );
};

export default SplashScreen;