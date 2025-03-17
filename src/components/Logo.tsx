
import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12',
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className={`relative ${sizeClasses[size]} aspect-square bg-primary rounded-lg overflow-hidden flex items-center justify-center`}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600"></div>
        <div className="relative text-white font-bold text-xl">P</div>
      </div>
      <span className="font-bold text-foreground tracking-tight">
        PRODSORT
      </span>
    </div>
  );
};

export default Logo;
