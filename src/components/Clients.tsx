import React from 'react';

const clients = [{
  name: 'SomaBank',
  tag: 'Fintech',
  color: 'primary',
  logo: 'https://dummyimage.com/160x50/0b1b34/ffffff&text=SomaBank'
}, {
  name: 'DalkaTel',
  tag: 'Telecom',
  color: 'secondary',
  logo: 'https://dummyimage.com/160x50/101828/ffffff&text=DalkaTel'
}, {
  name: 'EastTrade',
  tag: 'Logistics',
  color: 'primary',
  logo: 'https://dummyimage.com/160x50/0f172a/ffffff&text=EastTrade'
}, {
  name: 'BlueHealth',
  tag: 'Healthcare',
  color: 'secondary',
  logo: 'https://dummyimage.com/160x50/0b1b34/ffffff&text=BlueHealth'
}, {
  name: 'NovaHub',
  tag: 'SaaS',
  color: 'primary',
  logo: 'https://dummyimage.com/160x50/101828/ffffff&text=NovaHub'
}, {
  name: 'CoastalMart',
  tag: 'Retail',
  color: 'secondary',
  logo: 'https://dummyimage.com/160x50/0f172a/ffffff&text=CoastalMart'
}];

export function Clients() {
  return <section className="py-16 px-4 bg-slate-950 relative">
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="absolute left-10 top-6 h-48 w-48 rounded-full bg-brand-primary-500/10 blur-3xl" />
        <div className="absolute right-20 bottom-4 h-52 w-52 rounded-full bg-brand-secondary-500/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative animate-card">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {clients.map((client, i) => {
          const gradient = client.color === 'primary' ? 'from-brand-primary-500/15 to-brand-primary-500/0' : 'from-brand-secondary-500/15 to-brand-secondary-500/0';
          return <div key={client.name} className="group relative overflow-hidden rounded-xl bg-white/[0.02] backdrop-blur-sm p-4 border border-white/5 hover:border-white/15 transition flex items-center justify-center">
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition duration-500`} />
                <div className="relative overflow-hidden rounded-lg bg-white/5 border border-white/10 p-2 w-full h-14 flex items-center justify-center">
                  <img src={client.logo} alt={`${client.name} logo`} className="max-h-8 object-contain" loading="lazy" />
                </div>
              </div>;
        })}
        </div>
      </div>
    </section>;
}
