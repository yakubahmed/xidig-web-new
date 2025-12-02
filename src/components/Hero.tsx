import React from 'react';
import { Button } from './Button';
import { RocketIcon, CalendarIcon } from 'lucide-react';
export function Hero() {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(25,167,206,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(25,167,206,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      {/* Refined floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-secondary-500/10 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-10">
        {/* Small badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
          <div className="w-2 h-2 rounded-full bg-brand-primary-400 animate-pulse"></div>
          <span className="font-inter text-sm text-gray-300">
            Remote-First Technology Partner
          </span>
        </div>

        <h1 className="font-poppins font-bold text-6xl md:text-8xl text-white leading-[1.1] tracking-tight">
          Build Better,{' '}
          <span className="block mt-2">
            Ship{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-brand-primary-400 via-brand-primary-300 to-brand-secondary-400 bg-clip-text text-transparent">
                Faster
              </span>
              <div className="absolute -inset-2 bg-gradient-to-r from-brand-primary-500/20 to-brand-secondary-500/20 blur-2xl"></div>
            </span>
          </span>
        </h1>

        <p className="font-inter text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Enterprise-grade software, cloud infrastructure, and digital solutions
          delivered by a fully remote team.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button variant="primary" size="lg">
            <span className="flex items-center gap-2">
              <RocketIcon size={20} />
              Start Your Project
            </span>
          </Button>
          <Button variant="outline" size="lg">
            <span className="flex items-center gap-2">
              <CalendarIcon size={20} />
              Schedule a Call
            </span>
          </Button>
        </div>

        {/* Social proof */}
        <div className="flex flex-wrap items-center justify-center gap-8 pt-8 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-primary-400 to-brand-primary-600 border-2 border-slate-950"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-secondary-400 to-brand-secondary-600 border-2 border-slate-950"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-primary-300 to-brand-secondary-500 border-2 border-slate-950"></div>
            </div>
            <span>30+ projects delivered</span>
          </div>
          <div className="h-4 w-px bg-gray-700"></div>
          <span>5+ years experience</span>
          <div className="h-4 w-px bg-gray-700"></div>
          <span>100% remote</span>
        </div>
      </div>

      {/* Modern scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-gray-500 text-xs">
          <span>Scroll to explore</span>
          <div className="w-5 h-8 border border-gray-700 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-brand-primary-500 rounded-full animate-scroll"></div>
          </div>
        </div>
      </div>
    </section>;
}