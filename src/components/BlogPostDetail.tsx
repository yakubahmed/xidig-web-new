import React from 'react';
import { ArrowLeftIcon, SendIcon } from 'lucide-react';
import { BlogPost, BlogPostRoute } from './Blog';
import { useScrollReveal } from '../hooks/useScrollReveal';

type BlogPostDetailProps = {
  post: BlogPost;
  onNavigate: (path: BlogPostRoute | '/blog' | '/contact') => void;
};

export function BlogPostDetail({
  post,
  onNavigate
}: BlogPostDetailProps) {
  const revealRef = useScrollReveal<HTMLElement>();
  return <section ref={revealRef} className="py-24 px-4 bg-slate-950">
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="flex items-center justify-between">
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-gray-300 border border-white/10 hover:border-white/20 hover:text-white transition-colors" onClick={() => onNavigate('/blog')}>
            <ArrowLeftIcon size={16} />
            Back to blog
          </button>
          <div className="text-xs uppercase tracking-wide px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-200">
            {post.tag} • {post.date}
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]">
          <img src={post.image} alt={post.title} className="w-full h-80 object-cover" loading="lazy" />
        </div>

        <div className="space-y-6">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl text-white leading-tight">
            {post.title}
          </h1>
          <div className="space-y-4">
            {post.content.map((paragraph, i) => <p key={i} className="font-inter text-lg text-gray-300 leading-relaxed">
                  {paragraph}
                </p>)}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-2xl border border-white/10 bg-white/[0.03]">
          <div>
            <div className="font-poppins text-white font-semibold text-lg">
              Interested in this topic?
            </div>
            <p className="font-inter text-gray-400 text-sm">
              Talk to our team about applying these ideas to your product.
            </p>
          </div>
          <button className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-brand-primary-500 text-white font-inter font-semibold shadow-lg hover:bg-brand-primary-400 transition-colors" onClick={() => onNavigate('/contact')}>
            <SendIcon size={16} />
            Contact us
          </button>
        </div>
      </div>
    </section>;
}
