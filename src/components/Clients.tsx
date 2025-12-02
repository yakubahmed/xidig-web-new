import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const clients = [{
  name: 'SomLeaf',
  tag: 'AgriTech',
  color: 'primary',
  logo: '/partners/somleaf-logo1.png'
}, {
  name: 'Ramaas Energy',
  tag: 'Energy',
  color: 'secondary',
  logo: '/partners/ramaas.png'
}, {
  name: 'Submalco',
  tag: 'Logistics',
  color: 'primary',
  logo: '/partners/submalco.png'
}, {
  name: 'Facacusub',
  tag: 'Finance',
  color: 'secondary',
  logo: '/partners/facacusub.png'
}, {
  name: 'LayerOne',
  tag: 'Telecom',
  color: 'primary',
  logo: '/partners/Layer_1.png'
}, {
  name: 'IRMMCR',
  tag: 'Consulting',
  color: 'secondary',
  logo: '/partners/irmmcr.png'
}];

const marqueeClients = [...clients, ...clients];

export function Clients() {
  const revealRef = useScrollReveal<HTMLElement>();
  return <section ref={revealRef} className="py-16 px-4 bg-slate-950 relative">
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="absolute left-10 top-6 h-48 w-48 rounded-full bg-brand-primary-500/10 blur-3xl" />
        <div className="absolute right-20 bottom-4 h-52 w-52 rounded-full bg-brand-secondary-500/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative animate-card">
        <div className="relative overflow-hidden py-2">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-28 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-28 bg-gradient-to-l from-slate-950 via-slate-950/80 to-transparent" />

          <div className="flex items-stretch gap-4 partners-marquee">
            {marqueeClients.map((client, i) => {
            const gradient = client.color === 'primary' ? 'from-brand-primary-500/15 to-brand-primary-500/0' : 'from-brand-secondary-500/15 to-brand-secondary-500/0';
            const isLoop = i >= clients.length;
            return <div key={`${client.name}-${i}`} className="group relative overflow-hidden rounded-xl bg-white/[0.02] backdrop-blur-sm p-4 border border-white/5 hover:border-white/15 transition flex items-center justify-center w-44 sm:w-48 lg:w-52 flex-shrink-0" aria-hidden={isLoop}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition duration-500`} />
                  <div className="relative overflow-hidden rounded-lg bg-white/5 border border-white/10 p-2 w-full h-14 flex items-center justify-center">
                    <img src={client.logo} alt={`${client.name} logo`} className="max-h-8 object-contain filter grayscale brightness-0 invert opacity-90 group-hover:filter-none group-hover:opacity-100 transition duration-300" loading="lazy" />
                  </div>
                </div>;
          })}
          </div>
        </div>
      </div>
    </section>;
}
