import React from 'react';
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  className = ''
}: ButtonProps) {
  const baseStyles = 'font-poppins font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variants = {
    primary: 'bg-gradient-to-r from-brand-primary-500 to-brand-secondary-500 text-white hover:from-brand-primary-400 hover:to-brand-secondary-400 focus:ring-brand-primary-500 shadow-lg hover:shadow-brand-primary-500/50',
    secondary: 'bg-gradient-to-r from-brand-secondary-600 to-brand-secondary-700 text-white hover:from-brand-secondary-500 hover:to-brand-secondary-600 focus:ring-brand-secondary-500 shadow-lg hover:shadow-brand-secondary-500/50',
    outline: 'border-2 border-brand-primary-500 text-brand-primary-500 hover:bg-brand-primary-500 hover:text-white focus:ring-brand-primary-500'
  };
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  return <button type={type} onClick={onClick} className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </button>;
}