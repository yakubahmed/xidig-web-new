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

                      <div className={`absolute left-1/2 -translate-x-1/2 mt-4 w-[720px] max-w-[88vw] bg-slate-950/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-200 ${isProductsOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                        <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-brand-primary-500/15 via-transparent to-brand-secondary-500/15 pointer-events-none" />
                        <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-60" />

                        <div className="relative px-5 pt-4 pb-3 border-b border-white/5 flex items-center justify-between">
                          <div>
                            <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400">Products</p>
                            <p className="text-sm text-gray-200">Pick a solution to explore its details.</p>
                          </div>
                          <button onClick={() => handleNavigate('/products')} className="text-xs font-semibold text-brand-primary-300 hover:text-brand-primary-200 transition-colors px-3 py-2 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/10">
                            View all →
                          </button>
                        </div>

                        <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-3 p-4">
                          {products.map((product, idx) => {
                          const isProductActive = currentRoute === product.route;
                          const Icon = product.icon;
                          const badgeColor = product.color === 'primary' ? 'text-brand-primary-300 bg-brand-primary-500/10' : 'text-brand-secondary-300 bg-brand-secondary-500/10';
                          return <a key={product.route} href={product.route} onClick={e => {
                            e.preventDefault();
                            handleNavigate(product.route);
                          }} className={`group flex gap-3 p-3 rounded-xl border border-white/5 hover:border-white/15 bg-white/[0.02] hover:bg-white/[0.05] transition ${isProductActive ? 'ring-1 ring-brand-primary-400/40' : ''}`}>
                                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-white/10 to-white/0 border border-white/10 text-white shadow-inner shadow-black/20">
                                  <Icon size={18} strokeWidth={1.6} className="transition-transform duration-300 group-hover:scale-105" />
                                </div>
                                <div className="flex-1 space-y-1">
                                  <div className="flex items-center justify-between gap-2">
                                    <span className="text-sm font-semibold text-white flex items-center gap-2">
                                      {product.title}
                                      {idx < 2 ? <span className="text-[10px] uppercase tracking-wide px-2 py-0.5 rounded-full bg-white/10 text-white/80 border border-white/15">Featured</span> : null}
                                    </span>
                                    <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${badgeColor}`}>
                                      {product.category}
                                    </span>
                                  </div>
                                  <span className="text-xs text-gray-400 leading-relaxed overflow-hidden text-ellipsis max-h-12 block">
                                    {product.description}
                                  </span>
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
