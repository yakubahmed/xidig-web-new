import React from 'react';
import { Card } from './Card';
import { CodeIcon, SmartphoneIcon, PaletteIcon, HeadphonesIcon, MegaphoneIcon, GlobeIcon } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
const services = [{
  icon: CodeIcon,
  title: 'Custom Software',
  description: 'ERP, POS, HMS, Inventory systems, and custom dashboards built to your exact specifications.',
  color: 'primary',
  featured: true
}, {
  icon: SmartphoneIcon,
  title: 'Mobile Apps',
  description: 'Native iOS and Android apps with Flutter for fast, beautiful cross-platform experiences.',
  color: 'secondary',
  featured: true
}, {
  icon: GlobeIcon,
  title: 'Web Hosting & Domain Registration',
  description: 'Reliable hosting plans, SSL, DNS management, and domain provisioning handled end-to-end.',
  color: 'secondary',
  featured: false
}, {
  icon: PaletteIcon,
  title: 'UI/UX Design',
  description: 'User research, wireframes, prototypes, and complete design systems.',
  color: 'primary',
  featured: false
}, {
  icon: HeadphonesIcon,
  title: 'IT Support',
  description: '24/7 monitoring, configuration, troubleshooting, and technical support.',
  color: 'secondary',
  featured: false
}, {
  icon: MegaphoneIcon,
  title: 'Digital Marketing',
  description: 'Performance campaigns, SEO, and analytics to grow your product reach.',
  color: 'primary',
  featured: false
}];
export function Services() {
  const revealRef = useScrollReveal<HTMLElement>();
  return <section ref={revealRef} className="py-32 px-4 bg-slate-950 relative">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-brand-primary-500/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full bg-brand-primary-500/10 border border-brand-primary-500/20 text-brand-primary-400 text-sm font-medium mb-6">
            Services
          </div>
          <h2 className="font-poppins font-bold text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-brand-primary-400 to-brand-primary-200 mb-6 tracking-tight">
            Everything you need to build and scale
          </h2>
          <p className="font-inter text-xl text-gray-400 leading-relaxed">
            From concept to deployment, we handle the full stack of modern
            software development.
          </p>
        </div>

        {/* Modern bento-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
          const Icon = service.icon;
          const iconColor = service.color === 'primary' ? 'text-brand-primary-400' : 'text-brand-secondary-400';
          const borderColor = service.color === 'primary' ? 'border-brand-primary-500/20' : 'border-brand-secondary-500/20';
          const gradientFrom = service.color === 'primary' ? 'from-brand-primary-500/10' : 'from-brand-secondary-500/10';
          const gradientTo = service.color === 'primary' ? 'to-brand-primary-600/10' : 'to-brand-secondary-600/10';
          const hoverGradient = service.color === 'primary' ? 'from-brand-primary-500/0 to-brand-primary-500/0 group-hover:from-brand-primary-500/5 group-hover:to-transparent' : 'from-brand-secondary-500/0 to-brand-secondary-500/0 group-hover:from-brand-secondary-500/5 group-hover:to-transparent';
          return <div key={index} className={`group relative bg-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-all duration-500 ${service.featured ? 'md:col-span-1 lg:row-span-1' : ''} animate-card`} style={{
            animationDelay: `${index * 0.05 + 0.05}s`
          }}>
                {/* Hover glow effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${hoverGradient} transition-all duration-500`}></div>

                <div className="relative">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${gradientFrom} ${gradientTo} border ${borderColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={iconColor} size={24} />
                  </div>

                  <h3 className="font-poppins font-semibold text-2xl text-white mb-3 group-hover:text-brand-primary-400 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="font-inter text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>;
        })}
        </div>
      </div>
    </section>;
}
