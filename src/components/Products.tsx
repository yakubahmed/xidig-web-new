import React from 'react';
import { ArrowRightIcon, BoxesIcon, CreditCardIcon, GraduationCapIcon, SproutIcon, StethoscopeIcon, WalletIcon } from 'lucide-react';

const products = [{
  icon: CreditCardIcon,
  title: 'Xidig POS',
  description: 'Modern point-of-sale system with inventory, reporting, and multi-branch support.',
  category: 'Retail',
  color: 'primary'
}, {
  icon: StethoscopeIcon,
  title: 'Xidig HMS',
  description: 'Complete hospital management covering patients, pharmacy, lab, radiology, and billing.',
  category: 'Healthcare',
  color: 'secondary'
}, {
  icon: GraduationCapIcon,
  title: 'University Attendance',
  description: 'Mobile-first staff attendance system with network-restricted check-ins.',
  category: 'Education',
  color: 'primary'
}, {
  icon: BoxesIcon,
  title: 'Inventory Manager',
  description: 'Track stock levels, vendors, batches, expiry dates, and automated alerts.',
  category: 'Operations',
  color: 'secondary'
}, {
  icon: WalletIcon,
  title: 'Loan Management',
  description: 'Simple app for shop owners to track customer loans and payment schedules.',
  category: 'Finance',
  color: 'primary'
}, {
  icon: SproutIcon,
  title: 'Greenhouse Calculator',
  description: 'Professional cost estimation tool with add-ons and email export functionality.',
  category: 'Agriculture',
  color: 'secondary'
}];

export function Products() {
  return <section className="py-32 px-4 bg-gradient-to-b from-slate-950 to-slate-900 relative animate-card">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full bg-brand-secondary-500/10 border border-brand-secondary-500/20 text-brand-secondary-400 text-sm font-medium mb-6">
            Products
          </div>
          <h2 className="font-poppins font-bold text-5xl md:text-6xl text-white mb-6 tracking-tight">
            Ready-to-deploy solutions
          </h2>
          <p className="font-inter text-xl text-gray-400 leading-relaxed">
            Production-ready software that can be customized and deployed for
            your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => {
          const Icon = product.icon;
          const badgeBg = product.color === 'primary' ? 'bg-brand-primary-500/10' : 'bg-brand-secondary-500/10';
          const badgeText = product.color === 'primary' ? 'text-brand-primary-400' : 'text-brand-secondary-400';
          const badgeBorder = product.color === 'primary' ? 'border-brand-primary-500/20' : 'border-brand-secondary-500/20';
          const hoverGradient = product.color === 'primary' ? 'from-brand-primary-500/0 to-brand-primary-500/0 group-hover:from-brand-primary-500/5 group-hover:to-transparent' : 'from-brand-secondary-500/0 to-brand-secondary-500/0 group-hover:from-brand-secondary-500/5 group-hover:to-transparent';
          return <a key={index} href="#contact" className="group relative bg-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-all duration-500 cursor-pointer animate-card" style={{
            animationDelay: `${index * 0.05 + 0.05}s`
          }}>
                {/* Hover glow */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${hoverGradient} transition-all duration-500`}></div>

                <div className="relative">
                  {/* Category badge */}
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-6 ${badgeBg} ${badgeText} border ${badgeBorder}`}>
                    {product.category}
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-105 transition-transform duration-300">
                    <Icon size={28} strokeWidth={1.6} />
                  </div>

                  <h3 className="font-poppins font-semibold text-2xl text-white mb-3 group-hover:text-brand-primary-400 transition-colors duration-300">
                    {product.title}
                  </h3>

                  <p className="font-inter text-gray-400 leading-relaxed mb-6">
                    {product.description}
                  </p>

                  <div className="flex items-center gap-2 text-brand-primary-400 font-medium text-sm group-hover:gap-3 transition-all duration-300">
                    <span>Learn more</span>
                    <ArrowRightIcon size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </a>;
        })}
        </div>
      </div>
    </section>;
}
