import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  delay?: number;
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  direction = 'up', 
  delay = 0,
  className = ''
}) => {
  const { elementRef, isVisible } = useScrollAnimation();

  const getTransformClasses = () => {
    const baseClasses = 'transition-all duration-1000 ease-out';
    
    if (!isVisible) {
      switch (direction) {
        case 'left':
          return `${baseClasses} opacity-0 transform -translate-x-20`;
        case 'right':
          return `${baseClasses} opacity-0 transform translate-x-20`;
        case 'up':
          return `${baseClasses} opacity-0 transform translate-y-20`;
        case 'down':
          return `${baseClasses} opacity-0 transform -translate-y-20`;
        default:
          return `${baseClasses} opacity-0 transform translate-y-20`;
      }
    }
    
    return `${baseClasses} opacity-100 transform translate-x-0 translate-y-0`;
  };

  return (
    <div
      ref={elementRef}
      className={`${getTransformClasses()} ${className}`}
      style={{
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;