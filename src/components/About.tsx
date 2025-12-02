import React from 'react';
import { Card } from './Card';
import { AwardIcon, TrendingUpIcon, UsersIcon } from 'lucide-react';
const stats = [{
  icon: AwardIcon,
  value: '5+',
  label: 'Years of Experience',
  color: 'primary'
}, {
  icon: TrendingUpIcon,
  value: '30+',
  label: 'Successful Projects',
  color: 'secondary'
}, {
  icon: UsersIcon,
  value: '100%',
  label: 'Client Satisfaction',
  color: 'primary'
}];
export function About() {
  return <section className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-950 animate-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-white mb-6">
            About Xidig Tech
          </h2>
          <p className="font-inter text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Xidig Tech is a remote-first technology provider delivering
            software, cloud, mobile apps, IT support, and digital transformation
            services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => {
          const Icon = stat.icon;
          const iconColor = stat.color === 'primary' ? 'text-brand-primary-400' : 'text-brand-secondary-400';
          const gradientFrom = stat.color === 'primary' ? 'from-brand-primary-500/20' : 'from-brand-secondary-500/20';
          const gradientTo = stat.color === 'primary' ? 'to-brand-primary-600/20' : 'to-brand-secondary-600/20';
          return <Card key={index} className="text-center animate-card" hover={false}>
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${gradientFrom} ${gradientTo} flex items-center justify-center mx-auto mb-4`}>
                  <Icon className={iconColor} size={32} />
                </div>
                <div className="font-poppins font-bold text-4xl text-white mb-2">
                  {stat.value}
                </div>
                <div className="font-inter text-gray-400">{stat.label}</div>
              </Card>;
        })}
        </div>

        <Card className="text-center animate-card" hover={false}>
          <p className="font-inter text-lg text-gray-300 leading-relaxed">
            Serving{' '}
            <span className="text-brand-primary-400 font-semibold">
              startups
            </span>
            ,
            <span className="text-brand-secondary-400 font-semibold">
              {' '}
              SMEs
            </span>
            ,
            <span className="text-brand-primary-400 font-semibold">
              {' '}
              enterprises
            </span>
            , and
            <span className="text-brand-secondary-400 font-semibold">
              {' '}
              institutions
            </span>{' '}
            worldwide
          </p>
        </Card>
      </div>
    </section>;
}
