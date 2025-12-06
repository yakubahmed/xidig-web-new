import React from 'react';
import { CalendarIcon, MailIcon, SparklesIcon } from 'lucide-react';
import { Button } from '../components/Button';
import { useScrollReveal } from '../hooks/useScrollReveal';

type ComingSoonProps = {
  onNavigate: (path: '/' | '/contact' | '/services' | '/products') => void;
};

export function ComingSoon({
  onNavigate
}: ComingSoonProps) {
  const revealRef = useScrollReveal<HTMLElement>();

  return <section ref={revealRef} className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden px-4 pt-28 pb-16">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-10 top-10 w-80 h-80 bg-brand-primary-500/10 blur-3xl rounded-full" />
        <div className="absolute right-0 bottom-10 w-96 h-96 bg-brand-secondary-500/10 blur-3xl rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.06),transparent_32%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.04),transparent_28%)]" />
      </div>

      <div className="max-w-5xl mx-auto relative text-center space-y-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
          <SparklesIcon size={16} className="text-brand-primary-300" />
          <span className="text-sm font-medium text-gray-200">New experience is on the way</span>
        </div>

        <div className="space-y-6">
          <h1 className="font-poppins font-bold text-5xl md:text-6xl text-white leading-tight">
            Something exciting is
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary-400 via-white to-brand-secondary-400">
              {' '}coming soon
            </span>
          </h1>
          <p className="font-inter text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're crafting the next chapter of Xidig. Be the first to know when we launch -- get early access,
            previews, and beta invites.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="primary" size="lg" onClick={() => onNavigate('/contact')}>
            <span className="flex items-center gap-2">
              <MailIcon size={18} />
              Notify me
            </span>
          </Button>
          <Button variant="outline" size="lg" onClick={() => onNavigate('/services')}>
            <span className="flex items-center gap-2">
              <CalendarIcon size={18} />
              View our services
            </span>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {['Curated betas', 'Launch discounts', 'Early roadmap'].map(item => <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div className="text-sm font-semibold text-white mb-1">{item}</div>
              <p className="text-sm text-gray-400">Exclusive for early subscribers.</p>
            </div>)}
        </div>

        <div className="max-w-3xl mx-auto border border-white/10 rounded-2xl bg-white/[0.04] px-6 py-4 text-left">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm text-gray-400">Planned launch window</p>
              <p className="text-lg font-semibold text-white">Q2 2025</p>
            </div>
            <button className="text-sm font-medium text-brand-primary-300 hover:text-brand-primary-200 transition-colors" onClick={() => onNavigate('/products')}>
              Explore current products &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>;
}
