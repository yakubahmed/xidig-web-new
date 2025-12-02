import React, { useEffect, useMemo, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Products } from './components/Products';
import { WhyChoose } from './components/WhyChoose';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { PageHeader } from './components/PageHeader';

type Route = '/' | '/services' | '/products' | '/about' | '/contact';

const isKnownRoute = (path: string): path is Route => ['/', '/services', '/products', '/about', '/contact'].includes(path);

export function App() {
  const [route, setRoute] = useState<Route>(() => isKnownRoute(window.location.pathname) ? window.location.pathname : '/');

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (isKnownRoute(path)) {
        setRoute(path);
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: Route) => {
    if (path === route) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    window.history.pushState({}, '', path);
    setRoute(path);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const pageContent = useMemo(() => {
    switch (route) {
      case '/services':
        return <>
            <Services />
            <Projects />
            <Contact />
          </>;
      case '/products':
        return <>
            <Products />
            <WhyChoose />
            <Contact />
          </>;
      case '/about':
        return <>
            <About />
            <Projects />
            <Contact />
          </>;
      case '/contact':
        return <>
            <Contact />
          </>;
      case '/':
      default:
        return <>
            <Hero />
            <Services />
            <Products />
            <WhyChoose />
            <Projects />
            <About />
            <Contact />
          </>;
    }
  }, [route]);

  const pageHeader = route === '/' ? null : (() => {
    const meta = {
      '/services': {
        title: 'Services',
        description: 'What we deliver across software, cloud, and design.',
        breadcrumbs: ['Home', 'Services'] as const
      },
      '/products': {
        title: 'Products',
        description: 'Ready-to-deploy solutions tailored for your industry.',
        breadcrumbs: ['Home', 'Products'] as const
      },
      '/about': {
        title: 'About',
        description: 'Our story, values, and the team building Xidig.',
        breadcrumbs: ['Home', 'About'] as const
      },
      '/contact': {
        title: 'Contact',
        description: 'Start a conversation with our team.',
        breadcrumbs: ['Home', 'Contact'] as const
      }
    } satisfies Record<Route, { title: string; description: string; breadcrumbs: readonly string[] }>;
    const current = meta[route];
    return <PageHeader title={current.title} description={current.description} breadcrumbs={current.breadcrumbs} onNavigate={navigate} />;
  })();

  return <div className="min-h-screen bg-slate-950">
      <Navbar currentRoute={route} onNavigate={navigate} />
      <div key={route} className="animate-page">
        {pageHeader}
        {pageContent}
      </div>
      <Footer onNavigate={navigate} />
    </div>;
}
