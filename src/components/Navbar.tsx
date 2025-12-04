import React, { useEffect, useState } from 'react';
import { Button } from './Button';
import { ChevronDownIcon, MenuIcon, XIcon } from 'lucide-react';
import type { ProductRoute } from './Products';
import type { BlogPostRoute } from './Blog';
import { products } from './Products';

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
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (path: Route) => {
    onNavigate(path);
    setIsMobileMenuOpen(false);
    setIsProductsOpen(false);
    setIsMobileProductsOpen(false);
  };

  return <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/85 backdrop-blur-xl shadow-[0_10px_30px_-20px_rgba(0,0,0,0.8)]' : 'bg-transparent'}`}>
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
              if (link.name === 'Products') {
                return <div key={link.name} className="relative" onMouseEnter={() => setIsProductsOpen(true)} onMouseLeave={() => setIsProductsOpen(false)}>
                      <button onClick={e => {
                    e.preventDefault();
                    setIsProductsOpen(prev => !prev);
                  }} className={`font-inter font-medium transition-all duration-300 relative group flex items-center gap-1 ${isActive ? 'text-brand-primary-400' : 'text-gray-300 hover:text-white'}`}>
                        {link.name}
                        <ChevronDownIcon size={16} className={`transition-transform duration-300 ${isProductsOpen ? 'rotate-180' : ''}`} />
                        <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-brand-primary-500 to-brand-secondary-500 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                      </button>

                      <div
                        onMouseEnter={() => setIsProductsOpen(true)}
                        onMouseLeave={() => setIsProductsOpen(false)}
                        className={`absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[420px] max-w-[88vw] bg-slate-950/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_20px_50px_-25px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-200 ${isProductsOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                        <div className="relative border-b border-white/5 px-5 py-4 flex items-center justify-between">
                          <div className="space-y-1">
                            <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400">Products</p>
                            <p className="text-xs text-gray-300">Jump to a product page.</p>
                          </div>
                          <button onClick={() => handleNavigate('/products')} className="text-xs font-semibold text-brand-primary-300 hover:text-white transition-colors px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                            View all
                          </button>
                        </div>

                        <div className="relative flex flex-col divide-y divide-white/5">
                          {products.map(product => {
                          const Icon = product.icon;
                          const isProductActive = currentRoute === product.route;
                          return <a key={product.route} href={product.route} onClick={e => {
                            e.preventDefault();
                            handleNavigate(product.route);
                          }} className={`flex items-center gap-3 px-5 py-3 hover:bg-white/5 transition ${isProductActive ? 'bg-white/5' : ''}`}>
                                <div className="h-10 w-10 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center text-white">
                                  <Icon size={18} strokeWidth={1.6} />
                                </div>
                                <div className="flex-1">
                                  <div className="text-sm font-semibold text-white">{product.title}</div>
                                  <div className="text-xs text-gray-400">{product.category}</div>
                                </div>
                              </a>;
                        })}
                        </div>
                      </div>

                    </div>;
              }
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
            if (link.name === 'Products') {
              return <div key={link.name} className="space-y-3">
                    <button onClick={e => {
                  e.preventDefault();
                  setIsMobileProductsOpen(prev => !prev);
                }} className={`w-full flex items-center justify-between font-inter font-medium text-lg transition-colors duration-300 ${isActive ? 'text-brand-primary-400' : 'text-gray-300 hover:text-white'}`}>
                      <span>{link.name}</span>
                      <ChevronDownIcon size={20} className={`transition-transform duration-300 ${isMobileProductsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${isMobileProductsOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="space-y-2 pl-3">
                        {products.map(product => <a key={product.route} href={product.route} onClick={e => {
                          e.preventDefault();
                          handleNavigate(product.route);
                        }} className="block rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2 text-sm text-gray-200 hover:text-white hover:border-white/15 transition">
                              <div className="font-semibold">{product.title}</div>
                              <div className="text-xs text-gray-400">{product.category}</div>
                            </a>)}
                        <button onClick={() => handleNavigate('/products')} className="text-left text-sm font-medium text-brand-primary-300 hover:text-brand-primary-200 transition px-3 py-1">
                          View all products →
                        </button>
                      </div>
                    </div>
                  </div>;
            }
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
