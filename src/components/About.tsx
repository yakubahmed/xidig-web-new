import React, { useRef } from 'react';
import { Card } from './Card';
import {
  AwardIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  Clock3Icon,
  EyeIcon,
  LightbulbIcon,
  ShieldCheckIcon,
  SparklesIcon,
  TargetIcon,
  TrendingUpIcon,
  UsersIcon
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const stats = [
  {
    icon: AwardIcon,
    value: '5+',
    label: 'Years of Experience',
    color: 'primary'
  },
  {
    icon: TrendingUpIcon,
    value: '30+',
    label: 'Successful Projects',
    color: 'secondary'
  },
  {
    icon: UsersIcon,
    value: '100%',
    label: 'Client Satisfaction',
    color: 'primary'
  }
];

const pillars = [
  {
    title: 'Reliability-led delivery',
    description: 'Cloud, mobile, and data platforms built with guardrails for uptime, security, and observability.',
    icon: ShieldCheckIcon,
    accent: 'primary'
  },
  {
    title: 'Research in the open',
    description: 'We prototype new ideas, pressure-test them with customers, and ship what proves valuable.',
    icon: SparklesIcon,
    accent: 'secondary'
  },
  {
    title: 'Human-first support',
    description: 'Runbooks, enablement, and 24/7 help so teams can operate confidently after every launch.',
    icon: UsersIcon,
    accent: 'primary'
  }
];

const missionVisionValues = [
  {
    title: 'Mission',
    description: 'Deliver reliable digital infrastructure that keeps our clients operating around the clock.',
    icon: TargetIcon,
    accent: 'primary'
  },
  {
    title: 'Vision',
    description: 'Be the most trusted technology partner for organizations scaling across the Horn of Africa and beyond.',
    icon: EyeIcon,
    accent: 'secondary'
  },
  {
    title: 'Values',
    points: ['Integrity in every engagement', 'Build once, scale many', 'Teach and transfer skills'],
    icon: ShieldCheckIcon,
    accent: 'primary'
  }
];

const timeline = [
  {
    period: '2019 - 2021',
    headline: 'First wave of cloud + POS rollouts',
    detail: 'Modernized retail, finance, and health stacks with resilient infrastructure and training.',
    accent: 'primary'
  },
  {
    period: '2022',
    headline: 'Mobile + enterprise support at scale',
    detail: 'Introduced 24/7 coverage, incident playbooks, and API-first architectures.',
    accent: 'secondary'
  },
  {
    period: 'Today',
    headline: 'Connected digital transformation',
    detail: 'Linking products, data, and operations so teams move faster with clarity.',
    accent: 'primary'
  }
];

const leaders = [
  {
    name: 'Yasir Abdi',
    role: 'Founder & CEO',
    focus: 'Builds partnerships, product vision, and delivery standards that align engineering outcomes with business goals.',
    avatarUrl: 'https://images.unsplash.com/photo-1502767089025-6572583495b0?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Amina Hassan',
    role: 'CTO & Head of R&D',
    focus: 'Guides architecture reviews, security practices, and cloud-native experimentation to keep releases reliable and modern.',
    avatarUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Abdullahi Farah',
    role: 'Head of Delivery',
    focus: 'Runs delivery rhythms, QA readiness, and change management so programs stay on track end-to-end.',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Nasteexo Mohamed',
    role: 'Head of Customer Success',
    focus: 'Leads enablement, documentation, and proactive support so teams adopt and scale new systems confidently.',
    avatarUrl: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80'
  }
];

const capabilityTags = ['Cloud landing zones', 'AI-assisted support desks', 'Composable products', 'Data platforms', 'Mobile experiences', 'Runbooks + enablement'];

export function About() {
  const revealRef = useScrollReveal<HTMLElement>();
  const teamSliderRef = useRef<HTMLDivElement>(null);

  const scrollTeam = (direction: 'prev' | 'next') => {
    const container = teamSliderRef.current;
    if (!container) return;
    const amount = container.clientWidth * 0.8;
    container.scrollBy({ left: direction === 'next' ? amount : -amount, behavior: 'smooth' });
  };

  return (
    <section ref={revealRef} className="relative overflow-hidden py-20 px-4 bg-gradient-to-b from-slate-950 via-slate-900/60 to-slate-950">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-10 top-10 w-64 h-64 bg-brand-primary-500/20 blur-[120px]" />
        <div className="absolute right-0 bottom-0 w-72 h-72 bg-brand-secondary-500/20 blur-[140px]" />
      </div>

      <div className="max-w-6xl mx-auto space-y-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-brand-primary-200">
              <span className="w-2 h-2 rounded-full bg-brand-primary-400 animate-pulse" />
              About Xidig Tech
            </div>
            <div className="space-y-4">
              <h2 className="font-poppins font-bold text-4xl md:text-5xl text-white leading-tight">
                A remote-first team engineering reliable, modern systems.
              </h2>
              <p className="font-inter text-lg text-gray-200 leading-relaxed max-w-2xl">
                We design, ship, and sustain software, cloud, mobile, and IT support that keep organizations running with clarity. Every release blends stability with forward-looking R&amp;D.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {capabilityTags.map(tag => (
                <span key={tag} className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-gray-200">
                  {tag}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {stats.map(stat => {
                const Icon = stat.icon;
                const gradient = stat.color === 'primary' ? 'from-brand-primary-500/10' : 'from-brand-secondary-500/10';
                return (
                  <div key={stat.label} className="relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.04] px-4 py-5">
                    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} to-transparent`} />
                    <div className="relative flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                        <Icon className={stat.color === 'primary' ? 'text-brand-primary-300' : 'text-brand-secondary-300'} size={24} />
                      </div>
                      <div>
                        <div className="font-poppins text-3xl text-white font-semibold">{stat.value}</div>
                        <div className="font-inter text-xs uppercase tracking-wide text-gray-400">{stat.label}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <Card className="relative isolate overflow-hidden h-full animate-card border-white/10 bg-gradient-to-br from-white/5 via-white/0 to-white/5">
            <div className="absolute -right-8 -top-8 w-48 h-48 rounded-full bg-brand-primary-500/10 blur-[70px]" />
            <div className="absolute -left-6 bottom-0 w-40 h-40 rounded-full bg-brand-secondary-500/10 blur-[80px]" />
            <div className="relative space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary-500/10 px-3 py-1 text-brand-primary-100 text-xs font-semibold">
                <Clock3Icon size={14} />
                Always-on thinking
              </div>
              <h3 className="font-poppins text-2xl text-white font-semibold">
                Runway to reliable launches
              </h3>
              <p className="font-inter text-gray-200 leading-relaxed">
                We co-design the rollout: discovery, architecture reviews, governance, and knowledge transfer. You get a clear operating model that matches the ambition of your roadmap.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pillars.map(pillar => {
                  const Icon = pillar.icon;
                  const isPrimary = pillar.accent === 'primary';
                  const iconBg = isPrimary ? 'bg-brand-primary-500/15' : 'bg-brand-secondary-500/15';
                  const iconColor = isPrimary ? 'text-brand-primary-300' : 'text-brand-secondary-300';
                  return (
                    <div key={pillar.title} className="rounded-xl border border-white/10 bg-white/5 p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <div className={`w-9 h-9 rounded-lg ${iconBg} flex items-center justify-center`}>
                          <Icon className={iconColor} size={18} />
                        </div>
                        <span className="font-poppins text-sm text-white">{pillar.title}</span>
                      </div>
                      <p className="text-xs text-gray-400 leading-relaxed">{pillar.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Card>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.03] p-8 lg:p-10">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary-500/5 via-transparent to-brand-secondary-500/5" />
          <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-xl space-y-3">
              <p className="font-inter text-sm uppercase tracking-[0.25em] text-brand-secondary-100">Who we deliver for</p>
              <p className="font-inter text-lg text-gray-100 leading-relaxed">
                Startups, SMEs, enterprises, and institutions that need dependable engineering with a partner who speaks business outcomes as fluently as code.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {['24/7 coverage', 'Platform thinking', 'Security-first', 'Documentation + handover'].map(item => (
                <span key={item} className="px-3 py-2 rounded-full border border-white/10 bg-white/5 text-xs text-gray-200">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-10 h-px bg-gradient-to-r from-brand-primary-400 to-transparent" />
              <span className="text-xs uppercase tracking-[0.2em] text-brand-primary-200">Trajectory</span>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 space-y-6">
              {timeline.map(item => (
                <div key={item.period} className="relative pl-8">
                  <div className={`absolute left-0 top-2 w-4 h-4 rounded-full border-2 ${item.accent === 'primary' ? 'border-brand-primary-400' : 'border-brand-secondary-400'} bg-slate-950`} />
                  <p className="font-poppins text-sm text-brand-secondary-100">{item.period}</p>
                  <h4 className="font-poppins text-xl text-white font-semibold">{item.headline}</h4>
                  <p className="font-inter text-gray-200 leading-relaxed">{item.detail}</p>
                  <div className="absolute left-1 top-5 bottom-0 w-px bg-white/5" />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-10 h-px bg-gradient-to-r from-brand-secondary-400 to-transparent" />
              <span className="text-xs uppercase tracking-[0.2em] text-brand-secondary-200">Guiding principles</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {missionVisionValues.map(item => {
                const Icon = item.icon;
                const isPrimary = item.accent === 'primary';
                const iconBg = isPrimary ? 'bg-brand-primary-500/15' : 'bg-brand-secondary-500/15';
                const iconColor = isPrimary ? 'text-brand-primary-300' : 'text-brand-secondary-300';
                return (
                  <Card key={item.title} className="h-full bg-white/[0.05] border-white/10">
                    <div className={`w-11 h-11 rounded-xl ${iconBg} flex items-center justify-center mb-3`}>
                      <Icon className={iconColor} size={20} />
                    </div>
                    <h4 className="font-poppins text-lg text-white font-semibold mb-2">{item.title}</h4>
                    {'description' in item && item.description ? (
                      <p className="font-inter text-sm text-gray-200 leading-relaxed">{item.description}</p>
                    ) : (
                      <ul className="font-inter text-sm text-gray-200 space-y-1.5">
                        {'points' in item
                          ? item.points?.map(point => (
                              <li key={point} className="flex items-start gap-2">
                                <span className="text-brand-primary-300">-</span>
                                <span>{point}</span>
                              </li>
                            ))
                          : null}
                      </ul>
                    )}
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div>
              <h3 className="font-poppins text-3xl font-semibold text-white">Leadership team</h3>
              <p className="font-inter text-gray-400 max-w-3xl">
                Strategy, engineering depth, and customer care from people who stay close to the work.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollTeam('prev')}
                className="w-10 h-10 rounded-full border border-white/10 bg-white/5 text-white flex items-center justify-center hover:border-white/20 transition"
                aria-label="Previous team member"
              >
                <ChevronLeftIcon size={18} />
              </button>
              <button
                onClick={() => scrollTeam('next')}
                className="w-10 h-10 rounded-full border border-white/10 bg-white/5 text-white flex items-center justify-center hover:border-white/20 transition"
                aria-label="Next team member"
              >
                <ChevronRightIcon size={18} />
              </button>
            </div>
          </div>
          <div
            ref={teamSliderRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 no-scrollbar"
          >
            {leaders.map(leader => (
              <div
                key={leader.name}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/60 h-full min-h-[380px] group transition-all duration-500 min-w-[240px] sm:min-w-[260px] lg:min-w-[280px] snap-start shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
              >
                {/* Front card with on-image overlay */}
                <div className="relative h-full w-full overflow-hidden rounded-3xl">
                  {leader.avatarUrl ? (
                    <img
                      src={leader.avatarUrl}
                      alt={leader.name}
                      className="h-full w-full object-cover transition duration-700 ease-out"
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center font-poppins text-3xl text-white bg-white/5">
                      {leader.name.split(' ').map(part => part[0]).join('').slice(0, 2).toUpperCase()}
                    </div>
                  )}
                  <div
                    className="absolute inset-x-0 bottom-0 px-5 pb-5 pt-12"
                    style={{
                      background:
                        'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.28) 28%, rgba(0,0,0,0.78) 80%, rgba(0,0,0,0.96) 100%)'
                    }}
                  >
                    <div className="font-poppins text-lg text-white font-semibold leading-tight drop-shadow">{leader.name}</div>
                    <div className="font-inter text-gray-200 text-sm drop-shadow">{leader.role}</div>
                  </div>
                </div>

                {/* Hover reveal card */}
                <div className="absolute inset-0 rounded-3xl border border-white/10 bg-slate-950/90 backdrop-blur-sm p-6 flex flex-col h-full opacity-0 translate-y-3 scale-95 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition duration-500 ease-out">
                  <div className="space-y-2">
                    <div className="font-poppins text-xl text-white font-semibold">{leader.name}</div>
                    <div className="font-inter text-gray-200 text-sm">{leader.role}</div>
                    <div className="w-10 h-1 rounded-full bg-white/20" />
                  </div>
                  <div className="mt-auto space-y-3">
                    <p className="font-inter text-sm text-gray-200 leading-relaxed">
                      {leader.focus}
                    </p>
                    <div className="h-px w-full bg-white/10" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
