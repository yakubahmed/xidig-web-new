import { useEffect, useRef } from 'react';

type Options = {
  threshold?: number;
  rootMargin?: string;
};

export function useScrollReveal<T extends HTMLElement>({
  threshold = 0.15,
  rootMargin = '0px'
}: Options = {}) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.classList.add('scroll-reveal');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          element.classList.add('scroll-reveal-visible');
          observer.unobserve(element);
        }
      });
    }, { threshold, rootMargin });

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return ref;
}
