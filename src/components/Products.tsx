import React from 'react';
import { ArrowRightIcon, BoxesIcon, CreditCardIcon, GraduationCapIcon, SproutIcon, StethoscopeIcon, WalletIcon } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export type ProductRoute = '/products/xidig-pos' | '/products/xidig-hms' | '/products/university-attendance' | '/products/inventory-manager' | '/products/loan-management' | '/products/greenhouse-calculator';

export type Product = {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  category: string;
  color: 'primary' | 'secondary';
  route: ProductRoute;
  image: string;
  features: string[];
  tech: string[];
};

export const products: Product[] = [{
  icon: CreditCardIcon,
  title: 'Xidig POS',
  description: 'Modern point-of-sale system with inventory, reporting, and multi-branch support.',
  category: 'Retail',
  color: 'primary',
  route: '/products/xidig-pos',
  image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=80',
  features: ['Multi-branch inventory', 'Real-time sales analytics', 'Staff roles and permissions', 'Offline-first workflows'],
  tech: ['React', 'Node.js', 'PostgreSQL']
}, {
  icon: StethoscopeIcon,
  title: 'Xidig HMS',
  description: 'Complete hospital management covering patients, pharmacy, lab, radiology, and billing.',
  category: 'Healthcare',
  color: 'secondary',
  route: '/products/xidig-hms',
  image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1400&q=80',
  features: ['Patient intake & EMR', 'Lab & radiology workflows', 'Pharmacy and billing', 'Doctor scheduling'],
  tech: ['React', 'Node.js', 'MongoDB']
}, {
  icon: GraduationCapIcon,
  title: 'University Attendance',
  description: 'Mobile-first staff attendance system with network-restricted check-ins.',
  category: 'Education',
  color: 'primary',
  route: '/products/university-attendance',
  image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=80',
  features: ['Geo/IP restricted check-ins', 'Mobile-first UX', 'Timesheets and payroll exports', 'Admin dashboards'],
  tech: ['Flutter', 'Firebase']
}, {
  icon: BoxesIcon,
  title: 'Inventory Manager',
  description: 'Track stock levels, vendors, batches, expiry dates, and automated alerts.',
  category: 'Operations',
  color: 'secondary',
  route: '/products/inventory-manager',
  image: 'https://images.unsplash.com/photo-1450101215322-bf5cd27642fc?auto=format&fit=crop&w=1400&q=80',
  features: ['Batch and expiry tracking', 'Vendor management', 'Reorder automation', 'Audit-ready logs'],
  tech: ['Next.js', 'Supabase']
}, {
  icon: WalletIcon,
  title: 'Loan Management',
  description: 'Simple app for shop owners to track customer loans and payment schedules.',
  category: 'Finance',
  color: 'primary',
  route: '/products/loan-management',
  image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1400&q=80',
  features: ['Customer ledgers', 'Payment schedules', 'Reminders and notifications', 'Exportable statements'],
  tech: ['React Native', 'Express', 'SQLite']
}, {
  icon: SproutIcon,
  title: 'Greenhouse Calculator',
  description: 'Professional cost estimation tool with add-ons and email export functionality.',
  category: 'Agriculture',
  color: 'secondary',
  route: '/products/greenhouse-calculator',
  image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1400&q=80',
  features: ['Bill of materials', 'Add-on pricing', 'Scenario comparisons', 'Email & PDF export'],
  tech: ['Vue', 'Laravel', 'MySQL']
}];

type ProductsProps = {
  onNavigate?: (path: ProductRoute | '/products' | '/contact') => void;
};

export function Products({
  onNavigate
}: ProductsProps) {
  const revealRef = useScrollReveal<HTMLElement>();
  const handleNavigate = (path: ProductRoute) => {
    if (onNavigate) {
      onNavigate(path);
    }
  };

  return <section ref={revealRef} className="py-32 px-4 bg-gradient-to-b from-slate-950 to-slate-900 relative">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full bg-brand-secondary-500/10 border border-brand-secondary-500/20 text-brand-secondary-400 text-sm font-medium mb-6">
            Products
          </div>
          <h2 className="font-poppins font-bold text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-brand-primary-400 to-brand-primary-200 mb-6 tracking-tight">
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
          return <a key={product.route} href={product.route} onClick={e => {
            e.preventDefault();
            handleNavigate(product.route);
          }} className="group relative bg-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-all duration-500 cursor-pointer animate-card" style={{
            animationDelay: `${index * 0.05 + 0.05}s`
          }}>
                {/* Hover glow */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${hoverGradient} transition-all duration-500`}></div>

                <div className="relative space-y-5">
                  <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5 h-36 group-hover:border-white/20 transition">
                    <img src={product.image} alt={`${product.title} preview`} className="w-full h-full object-cover" loading="lazy" />
                  </div>

                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${badgeBg} ${badgeText} border ${badgeBorder}`}>
                    {product.category}
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform duration-300">
                      <Icon size={24} strokeWidth={1.6} />
                    </div>
                    <div>
                      <h3 className="font-poppins font-semibold text-xl text-white group-hover:text-brand-primary-400 transition-colors duration-300">
                        {product.title}
                      </h3>
                      <p className="font-inter text-sm text-gray-400 leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {product.features.slice(0, 3).map((feature, i) => <span key={i} className="px-2 py-1 text-xs font-medium bg-white/5 text-gray-300 rounded border border-white/5">
                          {feature}
                        </span>)}
                  </div>

                  <div className="flex items-center gap-2 text-brand-primary-400 font-medium text-sm group-hover:gap-3 transition-all duration-300">
                    <span>View details</span>
                    <ArrowRightIcon size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </a>;
        })}
        </div>
      </div>
    </section>;
}
