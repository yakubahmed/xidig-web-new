import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export type BlogPostRoute = `/blog/${string}`;

export type BlogPost = {
  title: string;
  excerpt: string;
  tag: string;
  date: string;
  image: string;
  route: BlogPostRoute;
  content: string[];
};

export const blogPosts: BlogPost[] = [{
  title: 'Scaling fintech stacks securely',
  excerpt: 'How we harden cloud-native financial platforms with zero-trust principles, observability, and compliant data flows.',
  tag: 'Fintech',
  date: 'Nov 2025',
  image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80',
  route: '/blog/scaling-fintech-stacks',
  content: ['Financial platforms demand resilience, real-time visibility, and layered security. We design architectures with zero-trust defaults, strong identity, and encrypted data in transit and at rest.', 'Our teams implement observability from day one: distributed tracing, structured logging, and SLO-driven alerting that keep incidents small and contained.', 'Compliance is built into the delivery motion—change control, automated checks, and secure SDLC pipelines that satisfy auditors without slowing releases.']
}, {
  title: 'Designing dependable healthcare workflows',
  excerpt: 'Lessons learned from building EMR, lab, and radiology modules that stay resilient under heavy operational load.',
  tag: 'Healthcare',
  date: 'Oct 2025',
  image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1400&q=80',
  route: '/blog/designing-healthcare-workflows',
  content: ['Clinical teams need tools that stay responsive, even at peak volume. We optimize for low-latency patient records, fast search, and audit-grade data lineage.', 'We design lab and radiology workflows to minimize handoffs and reduce error rates—clear statuses, role-aware access, and automated notifications keep care teams aligned.', 'Reliability matters: we use staged rollouts, feature flags, and health checks to keep critical workflows online while shipping improvements.']
}, {
  title: 'Building mobile-first field operations',
  excerpt: 'Offline-first patterns, sync strategies, and device posture checks for teams working across remote regions.',
  tag: 'Mobile',
  date: 'Sep 2025',
  image: 'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&w=1400&q=80',
  route: '/blog/mobile-first-field-ops',
  content: ['Field teams work where connectivity is unreliable. Offline-first storage with conflict resolution keeps work flowing without data loss.', 'We implement secure device posture checks and geofencing where needed, balancing UX with compliance.', 'Sync strategies rely on small payloads, retries with backoff, and transparent status indicators so operators trust the system.']
}];

type BlogProps = {
  onNavigate?: (path: BlogPostRoute | '/blog') => void;
};

export function Blog({
  onNavigate
}: BlogProps) {
  const revealRef = useScrollReveal<HTMLElement>();
  return <section ref={revealRef} className="py-24 px-4 bg-slate-950 relative">
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="absolute left-6 top-10 h-40 w-40 rounded-full bg-brand-primary-500/10 blur-3xl" />
        <div className="absolute right-12 bottom-6 h-48 w-48 rounded-full bg-brand-secondary-500/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="max-w-3xl mb-14">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium mb-4">
            Insights
          </div>
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-white mb-4 tracking-tight">
            From the Xidig team
          </h2>
          <p className="font-inter text-lg text-gray-400 leading-relaxed">
            Field notes on shipping secure, performant software across fintech, healthcare, and mobile-first deployments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => <article key={post.title} className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm shadow-[0_24px_60px_-32px_rgba(0,0,0,0.8)] animate-card" style={{
        animationDelay: `${index * 0.05 + 0.05}s`
      }}>
                <div className="relative h-48 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white border border-white/15">
                    {post.tag}
                    <span className="text-gray-300">•</span>
                    <span className="text-gray-200">{post.date}</span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-poppins font-semibold text-xl text-white group-hover:text-brand-primary-400 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="font-inter text-sm text-gray-300 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <button className="flex items-center gap-2 text-brand-primary-400 font-medium text-sm group-hover:gap-3 transition-all duration-300" onClick={() => onNavigate ? onNavigate(post.route) : null}>
                    <span>Read more</span>
                    <ArrowRightIcon size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </article>)}
        </div>
      </div>
    </section>;
}
