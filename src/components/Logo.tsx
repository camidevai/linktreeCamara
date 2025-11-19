import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img
        src="/img/image_916df3.png.png"
        alt="Logo CCHIA"
        className="w-16 h-16 md:w-20 md:h-20 object-contain"
      />
    </div>
  );
};
