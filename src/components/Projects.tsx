import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
const projects = [{
  title: 'Banking Dashboard',
  description: 'Real-time transaction monitoring and analytics platform for financial institutions.',
  category: 'FinTech',
  tags: ['React', 'Node.js', 'PostgreSQL'],
  color: 'primary'
}, {
  title: 'E-commerce Platform',
  description: 'Full-featured marketplace with payment integration and inventory management.',
  category: 'Retail',
  tags: ['Next.js', 'Stripe', 'MongoDB'],
  color: 'secondary'
}, {
  title: 'CRM/ERP System',
  description: 'Unified business management connecting sales, operations, and finance.',
  category: 'Enterprise',
  tags: ['TypeScript', 'GraphQL', 'AWS'],
  color: 'primary'
}, {
  title: 'Healthcare App',
  description: 'Patient management and telemedicine platform with appointment scheduling.',
  category: 'Healthcare',
  tags: ['Flutter', 'Firebase', 'WebRTC'],
  color: 'secondary'
}, {
  title: 'Cloud Infrastructure',
  description: 'Scalable deployment with automated CI/CD pipelines and monitoring.',
  category: 'DevOps',
  tags: ['Kubernetes', 'Terraform', 'Docker'],
  color: 'primary'
}, {
  title: 'Learning Platform',
  description: 'Educational portal with course delivery and student progress tracking.',
  category: 'Education',
  tags: ['Vue.js', 'Laravel', 'Redis'],
  color: 'secondary'
}];
export function Projects() {
  return <section className="py-32 px-4 bg-gradient-to-b from-slate-900 to-slate-950 relative animate-card">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full bg-brand-secondary-500/10 border border-brand-secondary-500/20 text-brand-secondary-400 text-sm font-medium mb-6">
            Case Studies
          </div>
          <h2 className="font-poppins font-bold text-5xl md:text-6xl text-white mb-6 tracking-tight">
            Recent work
          </h2>
          <p className="font-inter text-xl text-gray-400 leading-relaxed">
            A selection of projects we've delivered for clients across
            industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
          const badgeBg = project.color === 'primary' ? 'bg-brand-primary-500/10' : 'bg-brand-secondary-500/10';
          const badgeText = project.color === 'primary' ? 'text-brand-primary-400' : 'text-brand-secondary-400';
          const badgeBorder = project.color === 'primary' ? 'border-brand-primary-500/20' : 'border-brand-secondary-500/20';
          const hoverGradient = project.color === 'primary' ? 'from-brand-primary-500/0 to-brand-primary-500/0 group-hover:from-brand-primary-500/5 group-hover:to-transparent' : 'from-brand-secondary-500/0 to-brand-secondary-500/0 group-hover:from-brand-secondary-500/5 group-hover:to-transparent';
          return <a key={index} href="#contact" className="group relative bg-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-all duration-500 cursor-pointer animate-card" style={{
            animationDelay: `${index * 0.05 + 0.05}s`
          }}>
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${hoverGradient} transition-all duration-500`}></div>

                <div className="relative">
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-6 ${badgeBg} ${badgeText} border ${badgeBorder}`}>
                    {project.category}
                  </div>

                  <h3 className="font-poppins font-semibold text-2xl text-white mb-3 group-hover:text-brand-primary-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="font-inter text-gray-400 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => <span key={i} className="px-2 py-1 text-xs font-medium bg-white/5 text-gray-400 rounded border border-white/5">
                        {tag}
                      </span>)}
                  </div>

                  <div className="flex items-center gap-2 text-brand-primary-400 font-medium text-sm group-hover:gap-3 transition-all duration-300">
                    <span>View case study</span>
                    <ArrowRightIcon size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </a>;
        })}
        </div>
      </div>
    </section>;
}
