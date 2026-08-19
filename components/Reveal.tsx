import React, { useEffect, useRef, useState } from 'react';
import { RevealProps } from '../types';

export const Reveal: React.FC<RevealProps> = ({ 
  children, 
  className = "", 
  delay = 0, 
  duration = 1000,
  direction = 'up' 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the component is visible
        rootMargin: "0px 0px -50px 0px" 
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const getTransformClass = () => {
    if (isVisible) return 'translate-x-0 translate-y-0 opacity-100';
    
    switch (direction) {
      case 'up': return 'translate-y-12 opacity-0';
      case 'down': return '-translate-y-12 opacity-0';
      case 'left': return '-translate-x-12 opacity-0';
      case 'right': return 'translate-x-12 opacity-0';
      default: return 'translate-y-12 opacity-0';
    }
  };

  const transitionDelay = `${delay}ms`;
  const transitionDuration = `${duration}ms`;

  return (
    <div
      ref={ref}
      className={`transition-all ease-out transform ${getTransformClass()} ${className}`}
      style={{ transitionDelay, transitionDuration }}
    >
      {children}
    </div>
  );
};