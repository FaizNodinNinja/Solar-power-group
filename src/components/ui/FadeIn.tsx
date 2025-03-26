
import React, { useEffect, useRef, useState } from 'react';
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  className,
  delay = 0,
  duration = 500,
  distance = 20,
  direction = 'up'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const directionStyles = {
    up: 'translate-y-[var(--distance)]',
    down: 'translate-y-[calc(var(--distance)*-1)]',
    left: 'translate-x-[var(--distance)]',
    right: 'translate-x-[calc(var(--distance)*-1)]'
  };

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-[var(--duration)] ease-out',
        isVisible ? 'opacity-100 transform-none' : 'opacity-0',
        !isVisible && directionStyles[direction],
        className
      )}
      style={{
        '--delay': `${delay}ms`,
        '--duration': `${duration}ms`,
        '--distance': `${distance}px`,
        transitionDelay: `${delay}ms`
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

export default FadeIn;
