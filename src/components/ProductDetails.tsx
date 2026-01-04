import React from 'react';
import { ArrowRightIcon, ShieldCheckIcon, SparklesIcon } from 'lucide-react';
import { Product, ProductRoute } from './Products';
import { useScrollReveal } from '../hooks/useScrollReveal';

type ProductDetailsProps = {
  product: Product;
  onNavigate: (path: ProductRoute | '/products' | '/contact') => void;
};

export function ProductDetails({
  product,
  onNavigate
}: ProductDetailsProps) {
  const revealRef = useScrollReveal<HTMLElement>();
  return <section ref={revealRef} className="py-24 px-4 bg-slate-950">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-3 space-y-6">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
            <img src={product.image} alt={`${product.title} screenshot`} className="w-full h-full object-cover" loading="lazy" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <div className="flex items-center gap-2 text-brand-primary-300 font-medium mb-2">
                <SparklesIcon size={18} />
                Highlights
              </div>
              <ul className="space-y-2">
                {product.features.map((feature, i) => <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary-400 mt-2"></span>
                    <span>{feature}</span>
                  </li>)}
              </ul>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <div className="flex items-center gap-2 text-brand-secondary-300 font-medium mb-2">
                <ShieldCheckIcon size={18} />
                Delivery
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                Implementation includes discovery, customizations, data migration, and onboarding. Go-live in phased milestones with training and support.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {product.tech.map((t, i) => <span key={i} className="px-2 py-1 text-xs rounded border border-white/10 text-gray-300 bg-white/[0.02]">
                      {t}
                    </span>)}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-brand-primary-500/10 text-brand-primary-300 border border-brand-primary-500/20 mb-4">
              {product.category}
            </div>
            <h2 className="font-poppins font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-brand-primary-400 to-brand-primary-200 mb-3">
              {product.title}
            </h2>
            <p className="font-inter text-gray-300 leading-relaxed mb-6">
              {product.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {product.features.slice(0, 3).map((feature, i) => <span key={i} className="px-3 py-1 rounded-full text-xs bg-white/5 text-gray-200 border border-white/10">
                    {feature}
                  </span>)}
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-brand-primary-500 text-white font-inter font-semibold shadow-lg hover:bg-brand-primary-400 transition-colors" onClick={() => onNavigate('/contact')}>
                Talk to us
                <ArrowRightIcon size={16} />
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-white/15 text-white font-inter hover:border-white/30 transition-colors" onClick={() => onNavigate('/products')}>
                Back to products
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <h3 className="font-poppins font-semibold text-xl text-white mb-3">
              Implementation roadmap
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-brand-primary-300 font-semibold">1</span>
                <div>
                  <div className="text-white font-inter font-medium">Discovery & scope</div>
                  <p className="text-sm text-gray-400">Workshops to map requirements, integrations, and data migration.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-primary-300 font-semibold">2</span>
                <div>
                  <div className="text-white font-inter font-medium">Configuration & build</div>
                  <p className="text-sm text-gray-400">Tailor modules, roles, and automations to your operations.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-brand-primary-300 font-semibold">3</span>
                <div>
                  <div className="text-white font-inter font-medium">Go-live & enablement</div>
                  <p className="text-sm text-gray-400">User training, rollout support, and hypercare with SLAs.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>;
}
