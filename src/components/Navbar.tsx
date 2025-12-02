import React, { useEffect, useState } from 'react';
import { Button } from './Button';
import { MenuIcon, XIcon } from 'lucide-react';
import type { ProductRoute } from './Products';
import type { BlogPostRoute } from './Blog';

type PrimaryRoute = '/' | '/services' | '/products' | '/about' | '/contact' | '/blog';
type Route = PrimaryRoute | ProductRoute | BlogPostRoute;

type NavbarProps = {
  currentRoute: Route;
  onNavigate: (path: PrimaryRoute) => void;
};

const navLinks: { name: string; href: PrimaryRoute }[] = [{
  name: 'Home',
  href: '/'
}, {
  name: 'Services',
  href: '/services'
}, {
  name: 'Products',
  href: '/products'
}, {
  name: 'Blog',
  href: '/blog'
}, {
  name: 'About',
  href: '/about'
}, {
  name: 'Contact',
  href: '/contact'
}];

export function Navbar({
  currentRoute,
  onNavigate
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (path: Route) => {
    onNavigate(path);
    setIsMobileMenuOpen(false);
  };

  return <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/10 shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center" aria-label="Home" onClick={e => {
            e.preventDefault();
            handleNavigate('/');
          }}>
              <img src="/xidig.png" alt="Xidig Tech logo" className="h-10 w-auto drop-shadow-lg" />
              <span className="sr-only">Xidig Tech</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map(link => {
              const isActive = currentRoute === link.href;
              return <a key={link.name} href={link.href} onClick={e => {
                e.preventDefault();
                handleNavigate(link.href);
              }} className={`font-inter font-medium transition-all duration-300 relative group ${isActive ? 'text-brand-primary-400' : 'text-gray-300 hover:text-white'}`}>
                    {link.name}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-brand-primary-500 to-brand-secondary-500 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                  </a>;
            })}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:block">
              <Button variant="primary" size="sm" onClick={() => handleNavigate('/contact')}>
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden w-10 h-10 flex items-center justify-center text-white hover:text-brand-primary-400 transition-colors" aria-label="Toggle menu">
              {isMobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {/* Backdrop */}
        <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />

        {/* Menu Panel */}
        <div className={`absolute top-20 right-0 bottom-0 w-64 bg-slate-900/95 backdrop-blur-xl border-l border-white/10 transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col p-6 space-y-6">
            {navLinks.map(link => {
            const isActive = currentRoute === link.href;
            return <a key={link.name} href={link.href} onClick={e => {
              e.preventDefault();
              handleNavigate(link.href);
            }} className={`font-inter font-medium text-lg transition-colors duration-300 ${isActive ? 'text-brand-primary-400' : 'text-gray-300 hover:text-white'}`}>
                  {link.name}
                </a>;
          })}

            <div className="pt-4 border-t border-white/10">
              <Button variant="primary" size="md" className="w-full" onClick={() => handleNavigate('/contact')}>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>;
}
