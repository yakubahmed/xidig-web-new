import React from 'react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';

type Route = '/' | '/services' | '/products' | '/about' | '/contact';

type FooterProps = {
  onNavigate: (path: Route) => void;
};

export function Footer({
  onNavigate
}: FooterProps) {
  return <footer className="bg-slate-950 border-t border-white/10 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-poppins font-bold text-xl text-white mb-4">
              <a href="#" className="flex items-center" aria-label="Home" onClick={e => {
            e.preventDefault();
            onNavigate('/');
          }}>
              <img src="/xidig.png" alt="Xidig Tech logo" className="h-10 w-auto drop-shadow-lg" />
              <span className="sr-only">Xidig Tech</span>
            </a>
            </h3>
            <p className="font-inter text-gray-400 text-sm leading-relaxed">
              Remote-first technology provider delivering digital transformation
              services worldwide.
            </p>
          </div>

          <div>
            <h4 className="font-poppins font-semibold text-white mb-4">
              Services
            </h4>
            <ul className="space-y-2 font-inter text-sm text-gray-400">
              <li>
                <a href="/services" onClick={e => {
                e.preventDefault();
                onNavigate('/services');
              }} className="hover:text-brand-primary-400 transition-colors">
                  Software Development
                </a>
              </li>
              <li>
                <a href="/services" onClick={e => {
                e.preventDefault();
                onNavigate('/services');
              }} className="hover:text-brand-primary-400 transition-colors">
                  Mobile Apps
                </a>
              </li>
              <li>
                <a href="/services" onClick={e => {
                e.preventDefault();
                onNavigate('/services');
              }} className="hover:text-brand-primary-400 transition-colors">
                  Cloud & DevOps
                </a>
              </li>
              <li>
                <a href="/services" onClick={e => {
                e.preventDefault();
                onNavigate('/services');
              }} className="hover:text-brand-primary-400 transition-colors">
                  UI/UX Design
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-poppins font-semibold text-white mb-4">
              Products
            </h4>
            <ul className="space-y-2 font-inter text-sm text-gray-400">
              <li>
                <a href="/products" onClick={e => {
                e.preventDefault();
                onNavigate('/products');
              }} className="hover:text-brand-primary-400 transition-colors">
                  POS System
                </a>
              </li>
              <li>
                <a href="/products" onClick={e => {
                e.preventDefault();
                onNavigate('/products');
              }} className="hover:text-brand-primary-400 transition-colors">
                  HMS
                </a>
              </li>
              <li>
                <a href="/products" onClick={e => {
                e.preventDefault();
                onNavigate('/products');
              }} className="hover:text-brand-primary-400 transition-colors">
                  Inventory Manager
                </a>
              </li>
              <li>
                <a href="/products" onClick={e => {
                e.preventDefault();
                onNavigate('/products');
              }} className="hover:text-brand-primary-400 transition-colors">
                  Loan Management
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-poppins font-semibold text-white mb-4">
              Connect
            </h4>
            <div className="flex gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-primary-400 hover:border-brand-primary-500/30 transition-all" aria-label="LinkedIn">
                <LinkedinIcon size={20} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-primary-400 hover:border-brand-primary-500/30 transition-all" aria-label="GitHub">
                <GithubIcon size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-primary-400 hover:border-brand-primary-500/30 transition-all" aria-label="Twitter">
                <TwitterIcon size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="font-inter text-sm text-gray-400">
            © 2025 Xidig Tech — Remote Technology Provider. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>;
}
