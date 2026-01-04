import React, { useState } from 'react';
import { Button } from './Button';
import { SendIcon, CheckCircleIcon } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        service: '',
        message: ''
      });
    }, 3000);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const revealRef = useScrollReveal<HTMLElement>();
  return <section ref={revealRef} className="py-32 px-4 bg-slate-950 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-brand-secondary-500/20 to-transparent"></div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full bg-brand-primary-500/10 border border-brand-primary-500/20 text-brand-primary-400 text-sm font-medium mb-6">
            Get in Touch
          </div>
          <h2 className="font-poppins font-bold text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-brand-primary-400 to-brand-primary-200 mb-6 tracking-tight">
            Let's build something great
          </h2>
          <p className="font-inter text-xl text-gray-400 leading-relaxed">
            Tell us about your project and we'll get back to you within hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <div className="bg-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-white/5 animate-card">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block font-inter text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-white/[0.02] border border-white/10 rounded-xl text-white font-inter placeholder:text-gray-600 focus:outline-none focus:border-brand-primary-500/50 focus:bg-white/[0.04] transition-all" placeholder="John Doe" />
                  </div>

                  <div>
                    <label htmlFor="email" className="block font-inter text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-white/[0.02] border border-white/10 rounded-xl text-white font-inter placeholder:text-gray-600 focus:outline-none focus:border-brand-primary-500/50 focus:bg-white/[0.04] transition-all" placeholder="john@company.com" />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block font-inter text-sm font-medium text-gray-300 mb-2">
                    What do you need?
                  </label>
                  <select id="service" name="service" value={formData.service} onChange={handleChange} required className="w-full px-4 py-3 bg-white/[0.02] border border-white/10 rounded-xl text-white font-inter focus:outline-none focus:border-brand-primary-500/50 focus:bg-white/[0.04] transition-all">
                    <option value="" className="bg-slate-900">
                      Select a service
                    </option>
                    <option value="software" className="bg-slate-900">
                      Custom Software Development
                    </option>
                    <option value="mobile" className="bg-slate-900">
                      Mobile App Development
                    </option>
                    <option value="cloud" className="bg-slate-900">
                      Cloud & DevOps
                    </option>
                    <option value="api" className="bg-slate-900">
                      API Development
                    </option>
                    <option value="design" className="bg-slate-900">
                      UI/UX Design
                    </option>
                    <option value="support" className="bg-slate-900">
                      IT Support
                    </option>
                    <option value="product" className="bg-slate-900">
                      Product Inquiry
                    </option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block font-inter text-sm font-medium text-gray-300 mb-2">
                    Project details
                  </label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 bg-white/[0.02] border border-white/10 rounded-xl text-white font-inter placeholder:text-gray-600 focus:outline-none focus:border-brand-primary-500/50 focus:bg-white/[0.04] transition-all resize-none" placeholder="Tell us about your project, timeline, and budget..." />
                </div>

                {submitted ? <div className="flex items-center justify-center gap-2 py-3 text-green-400 font-inter">
                    <CheckCircleIcon size={20} />
                    <span>Message sent! We'll be in touch soon.</span>
                  </div> : <Button type="submit" variant="primary" size="lg" className="w-full">
                    <span className="flex items-center justify-center gap-2">
                      <SendIcon size={20} />
                      Send Message
                    </span>
                  </Button>}
              </form>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-white/5 animate-card" style={{
            animationDelay: '0.05s'
          }}>
              <h3 className="font-poppins font-semibold text-xl text-white mb-4">
                Quick response
              </h3>
              <p className="font-inter text-gray-400 leading-relaxed mb-6">
                We typically respond within 2-4 hours during business hours. For
                urgent inquiries, we're available 24/7.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-primary-400"></div>
                  <span className="font-inter text-sm text-gray-300">
                    Free consultation included
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary-400"></div>
                  <span className="font-inter text-sm text-gray-300">
                    No commitment required
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-primary-400"></div>
                  <span className="font-inter text-sm text-gray-300">
                    Transparent pricing
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-brand-primary-500/10 to-brand-secondary-500/10 backdrop-blur-sm rounded-2xl p-8 border border-brand-primary-500/20 animate-card" style={{
            animationDelay: '0.1s'
          }}>
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="font-poppins font-semibold text-xl text-white mb-3">
                Ready to start?
              </h3>
              <p className="font-inter text-gray-300 text-sm leading-relaxed">
                Most projects can begin within 1-2 weeks of initial
                consultation. Let's discuss your timeline.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
}
