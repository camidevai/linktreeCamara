import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <svg
        width="81"
        height="80"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-16 h-16 md:w-20 md:h-20"
        role="img"
        aria-label="Logo CCHIA"
      >
        {/* Círculo exterior - Navy */}
        <circle cx="50" cy="50" r="45" stroke="#0E3A66" strokeWidth="3" fill="none" />
        
        {/* Cerebro estilizado con lazo AI */}
        <path
          d="M30 50 Q30 30 50 30 Q70 30 70 50"
          stroke="#0E3A66"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Lazo AI - Teal claro */}
        <path
          d="M35 55 Q40 45 50 50 Q60 55 65 50"
          stroke="#04B6A1"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Lazo AI - Teal oscuro */}
        <path
          d="M40 60 Q45 52 50 55 Q55 58 60 55"
          stroke="#07809B"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Nodos de conexión */}
        <circle cx="35" cy="50" r="3" fill="#04B6A1" />
        <circle cx="50" cy="45" r="3" fill="#04B6A1" />
        <circle cx="65" cy="50" r="3" fill="#07809B" />
        
        {/* Texto AI integrado */}
        <text
          x="50"
          y="75"
          textAnchor="middle"
          fontSize="16"
          fontWeight="bold"
          fill="#0E3A66"
          fontFamily="Inter, sans-serif"
        >
          AI
        </text>
      </svg>
    </div>
  );
};
