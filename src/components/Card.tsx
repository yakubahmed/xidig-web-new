import React from 'react';
interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}
export function Card({
  children,
  className = '',
  hover = true
}: CardProps) {
  return <div className={`
        bg-white/[0.02] backdrop-blur-sm rounded-2xl p-6 border border-white/5
        ${hover ? 'transition-all duration-500 hover:border-white/10' : ''}
        ${className}
      `}>
      {children}
    </div>;
}