import React from 'react';
import type { CSSProperties } from 'react';

type Route = '/' | '/services' | '/products' | '/about' | '/contact';

type PageHeaderProps = {
  title: string;
  description: string;
  breadcrumbs: readonly string[];
  onNavigate: (path: Route) => void;
};

export function PageHeader({
  title,
  description,
  breadcrumbs,
  onNavigate
}: PageHeaderProps) {
  const gradientOverlay: CSSProperties = {
    background: 'radial-gradient(circle at 20% 20%, rgba(76, 131, 255, 0.12), transparent 30%), radial-gradient(circle at 80% 30%, rgba(16, 185, 129, 0.12), transparent 28%)'
  };

  return <section className="relative pt-28 pb-14 bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 opacity-70" style={gradientOverlay} />
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="flex items-center gap-3 text-sm font-inter text-gray-400 mb-4">
          {breadcrumbs.map((crumb, index) => {
        const isLast = index === breadcrumbs.length - 1;
        if (crumb === 'Home' && !isLast) {
          return <React.Fragment key={crumb}>
                <button className="text-brand-primary-300 hover:text-brand-primary-200 transition-colors" onClick={() => onNavigate('/')}>
                  Home
                </button>
                <span className="text-gray-600">/</span>
              </React.Fragment>;
        }
        return <React.Fragment key={`${crumb}-${index}`}>
              <span className={isLast ? 'text-white' : 'text-gray-400'}>
                {crumb}
              </span>
              {!isLast && <span className="text-gray-600">/</span>}
            </React.Fragment>;
      })}
        </div>

        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="font-poppins font-bold text-4xl md:text-5xl text-white mb-3 tracking-tight">
              {title}
            </h1>
            <p className="font-inter text-lg text-gray-400 max-w-2xl">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>;
}
