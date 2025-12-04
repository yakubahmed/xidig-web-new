import React, { useEffect, useMemo, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Products, products, ProductRoute } from './components/Products';
import { Blog, blogPosts, BlogPostRoute } from './components/Blog';
import { BlogPostDetail } from './components/BlogPostDetail';
import { WhyChoose } from './components/WhyChoose';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { PageHeader } from './components/PageHeader';
import { ProductDetails } from './components/ProductDetails';
import { Clients } from './components/Clients';
import { ComingSoon } from './pages/ComingSoon';

type PrimaryRoute = '/' | '/services' | '/products' | '/about' | '/contact' | '/blog' | '/coming-soon';
type Route = PrimaryRoute | ProductRoute | BlogPostRoute;

const knownRoutes: Route[] = ['/', '/services', '/products', '/about', '/contact', '/blog', '/coming-soon', '/products/xidig-pos', '/products/xidig-hms', '/products/university-attendance', '/products/inventory-manager', '/products/loan-management', '/products/greenhouse-calculator', ...blogPosts.map(p => p.route)];
const isKnownRoute = (path: string): path is Route => knownRoutes.includes(path as Route);

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
    const productMatch = products.find(p => p.route === route);
    if (productMatch) {
      return <>
          <ProductDetails product={productMatch} onNavigate={navigate} />
          <Contact />
        </>;
    }
    const blogMatch = blogPosts.find(p => p.route === route);
    if (blogMatch) {
      return <>
          <BlogPostDetail post={blogMatch} onNavigate={navigate} />
          <Contact />
        </>;
    }
    switch (route) {
      case '/services':
        return <>
            <Services />
            <Projects />
            <Contact />
          </>;
      case '/products':
        return <>
            <Products onNavigate={navigate} />
            <WhyChoose />
            <Contact />
          </>;
      case '/coming-soon':
        return <>
            <ComingSoon onNavigate={navigate} />
            <Contact />
          </>;
      case '/blog':
        return <>
            <Blog onNavigate={navigate} />
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
            <Clients />
            <Services />
            <Products onNavigate={navigate} />
            <WhyChoose />
            <Projects />
            <Blog onNavigate={navigate} />
            <Contact />
          </>;
    }
  }, [route]);

  const pageHeader = route === '/' ? null : (() => {
    const productMatch = products.find(p => p.route === route);
    if (productMatch) {
      return <PageHeader title={productMatch.title} description={productMatch.description} breadcrumbs={['Home', 'Products', productMatch.title]} onNavigate={navigate} />;
    }
    const blogMatch = blogPosts.find(p => p.route === route);
    if (blogMatch) {
      return <PageHeader title={blogMatch.title} description={blogMatch.excerpt} breadcrumbs={['Home', 'Blog', blogMatch.title]} onNavigate={navigate} />;
    }
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
      '/blog': {
        title: 'Blog',
        description: 'Insights from the Xidig team across industries.',
        breadcrumbs: ['Home', 'Blog'] as const
      },
      '/about': {
        title: 'About',
        description: 'Our story, values, and the team building Xidig.',
        breadcrumbs: ['Home', 'About'] as const
      },
      '/coming-soon': {
        title: 'Coming Soon',
        description: 'A preview of what we are building next.',
        breadcrumbs: ['Home', 'Coming Soon'] as const
      },
      '/contact': {
        title: 'Contact',
        description: 'Start a conversation with our team.',
        breadcrumbs: ['Home', 'Contact'] as const
      }
    } satisfies Record<PrimaryRoute, { title: string; description: string; breadcrumbs: readonly string[] }>;
    const current = meta[route as PrimaryRoute];
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
