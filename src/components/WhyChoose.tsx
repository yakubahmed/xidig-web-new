import React from 'react';
import { GlobeIcon, ZapIcon, ShieldIcon, DollarSignIcon, MessageSquareIcon } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
const reasons = [{
  icon: GlobeIcon,
  title: 'Fully Remote',
  description: 'Work with us from anywhere. No geographical limitations.',
  stat: '100%',
  color: 'primary'
}, {
  icon: ZapIcon,
  title: 'Fast Delivery',
  description: 'Agile sprints with milestone-based delivery and rapid iteration.',
  stat: '2-4 weeks',
  color: 'secondary'
}, {
  icon: ShieldIcon,
  title: 'Enterprise Security',
  description: 'Bank-level security practices and compliance standards.',
  stat: 'SOC 2',
  color: 'primary'
}, {
  icon: DollarSignIcon,
  title: 'Cost Effective',
  description: 'Remote-first model means better rates without compromising quality.',
  stat: '40% less',
  color: 'secondary'
}, {
  icon: MessageSquareIcon,
  title: 'Clear Communication',
  description: 'Weekly updates, detailed reports, and always available.',
  stat: '24/7',
  color: 'primary'
}];
export function WhyChoose() {
  const revealRef = useScrollReveal<HTMLElement>();
  return <section ref={revealRef} className="py-32 px-4 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full bg-brand-primary-500/10 border border-brand-primary-500/20 text-brand-primary-400 text-sm font-medium mb-6">
            Why Xidig Tech
          </div>
          <h2 className="font-poppins font-bold text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-brand-primary-400 to-brand-primary-200 mb-6 tracking-tight">
            Built for modern teams
          </h2>
          <p className="font-inter text-xl text-gray-400 leading-relaxed">
            We combine technical excellence with transparent communication and
            flexible engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
          const Icon = reason.icon;
          const iconColor = reason.color === 'primary' ? 'text-brand-primary-400' : 'text-brand-secondary-400';
          const borderColor = reason.color === 'primary' ? 'border-brand-primary-500/20' : 'border-brand-secondary-500/20';
          const gradientFrom = reason.color === 'primary' ? 'from-brand-primary-500/10' : 'from-brand-secondary-500/10';
          const gradientTo = reason.color === 'primary' ? 'to-brand-primary-600/10' : 'to-brand-secondary-600/10';
          const hoverGradient = reason.color === 'primary' ? 'from-brand-primary-500/0 to-brand-primary-500/0 group-hover:from-brand-primary-500/5 group-hover:to-transparent' : 'from-brand-secondary-500/0 to-brand-secondary-500/0 group-hover:from-brand-secondary-500/5 group-hover:to-transparent';
          return <div key={index} className="group relative bg-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-all duration-500 animate-card" style={{
            animationDelay: `${index * 0.05 + 0.05}s`
          }}>
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${hoverGradient} transition-all duration-500`}></div>

                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${gradientFrom} ${gradientTo} border ${borderColor} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={iconColor} size={24} />
                    </div>
                    <div className={`text-2xl font-bold ${iconColor}`}>
                      {reason.stat}
                    </div>
                  </div>

                  <h3 className="font-poppins font-semibold text-xl text-white mb-3">
                    {reason.title}
                  </h3>

                  <p className="font-inter text-gray-400 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>;
        })}
        </div>
      </div>
    </section>;
}
