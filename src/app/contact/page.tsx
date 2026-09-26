'use client';
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollAnimation from '@/components/ScrollAnimation';
import Icon from '@/components/ui/AppIcon';

const productCategories = ['Door Grills', 'Door Bolts', 'Hooks', 'Door Handles', 'Other'];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '', company: '', country: '', email: '', phone: '', category: '', requirement: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="overflow-x-hidden">
      <Header />

      {/* Hero */}
      <section className="bg-primary pt-36 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation animationClass="reveal-up">
            <span className="text-accent text-xs font-semibold tracking-architectural uppercase block mb-4">Contact</span>
            <h1 className="font-display text-hero-xl font-semibold text-primary-foreground mb-4">
              Let's Start a<br />
              <span className="italic font-light text-accent">Conversation.</span>
            </h1>
            <p className="text-primary-foreground/60 text-base max-w-xl leading-relaxed">
              Reach our export team to discuss product requirements, pricing, OEM development or any B2B partnership opportunity.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact Details + Form */}
      <section className="bg-background py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Left: Details — 2 cols */}
          <div className="lg:col-span-2 flex flex-col gap-10">
            <ScrollAnimation animationClass="reveal-left">
              <h2 className="font-display text-display-sm font-semibold text-foreground mb-6">
                Contact Information
              </h2>

              <div className="flex flex-col gap-7">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-accent/30 flex items-center justify-center flex-shrink-0 bg-secondary">
                    <Icon name="MapPinIcon" size={18} variant="outline" className="text-accent" />
                  </div>
                  <div>
                    <span className="text-accent text-xs font-semibold tracking-architectural uppercase block mb-2">Office Address</span>
                    <p className="text-foreground font-semibold text-sm mb-1">Liberty Metal Works</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      LBI, ITI Road<br />
                      Aligarh – 202001<br />
                      Uttar Pradesh, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-accent/30 flex items-center justify-center flex-shrink-0 bg-secondary">
                    <Icon name="PhoneIcon" size={18} variant="outline" className="text-accent" />
                  </div>
                  <div>
                    <span className="text-accent text-xs font-semibold tracking-architectural uppercase block mb-2">Phone / WhatsApp</span>
                    <a href="tel:+917017203139" className="text-foreground text-sm font-semibold hover:text-accent transition-colors">
                      +91-7017203139
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-accent/30 flex items-center justify-center flex-shrink-0 bg-secondary">
                    <Icon name="EnvelopeIcon" size={18} variant="outline" className="text-accent" />
                  </div>
                  <div>
                    <span className="text-accent text-xs font-semibold tracking-architectural uppercase block mb-2">Email</span>
                    <a href="mailto:Export@libertymetalworks.in" className="text-foreground text-sm font-semibold hover:text-accent transition-colors block mb-1">
                      Export@libertymetalworks.in
                    </a>
                    <a href="mailto:Varun@libertybrassintl.com" className="text-muted-foreground text-sm hover:text-accent transition-colors block">
                      Varun@libertybrassintl.com
                    </a>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Map Placeholder */}
            <ScrollAnimation animationClass="reveal-left" delay={100}>
              <div className="bg-secondary border border-border overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-8">
                  <Icon name="MapIcon" size={40} variant="outline" className="text-accent/40" />
                  <div className="text-center">
                    <p className="text-foreground font-semibold text-sm mb-1">Aligarh, Uttar Pradesh</p>
                    <p className="text-muted-foreground text-xs">LBI, ITI Road – 202001</p>
                  </div>
                  <a
                    href="https://www.google.com/maps/search/LBI+ITI+Road+Aligarh+202001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-xs"
                  >
                    Open in Google Maps
                    <Icon name="ArrowTopRightOnSquareIcon" size={12} variant="outline" />
                  </a>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Right: Form — 3 cols */}
          <div className="lg:col-span-3">
            <ScrollAnimation animationClass="reveal-right">
              <h2 className="font-display text-display-sm font-semibold text-foreground mb-8">
                B2B Enquiry Form
              </h2>

              {submitted ? (
                <div className="border border-accent/30 p-12 text-center bg-secondary">
                  <Icon name="CheckCircleIcon" size={40} variant="outline" className="text-accent mx-auto mb-4" />
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-3">Enquiry Sent</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Thank you for your enquiry. Our export team will respond within 24–48 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-foreground text-xs font-semibold tracking-architectural uppercase block mb-2">Name *</label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your full name" className="form-input-light w-full px-4 py-3 text-sm" />
                    </div>
                    <div>
                      <label className="text-foreground text-xs font-semibold tracking-architectural uppercase block mb-2">Company *</label>
                      <input type="text" name="company" value={formData.company} onChange={handleChange} required placeholder="Company name" className="form-input-light w-full px-4 py-3 text-sm" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-foreground text-xs font-semibold tracking-architectural uppercase block mb-2">Country *</label>
                      <input type="text" name="country" value={formData.country} onChange={handleChange} required placeholder="Your country" className="form-input-light w-full px-4 py-3 text-sm" />
                    </div>
                    <div>
                      <label className="text-foreground text-xs font-semibold tracking-architectural uppercase block mb-2">Business Email *</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="business@company.com" className="form-input-light w-full px-4 py-3 text-sm" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-foreground text-xs font-semibold tracking-architectural uppercase block mb-2">Phone / WhatsApp</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 234 567 8900" className="form-input-light w-full px-4 py-3 text-sm" />
                    </div>
                    <div>
                      <label className="text-foreground text-xs font-semibold tracking-architectural uppercase block mb-2">Product Category</label>
                      <select name="category" value={formData.category} onChange={handleChange} className="form-input-light w-full px-4 py-3 text-sm">
                        <option value="">Select category</option>
                        {productCategories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-foreground text-xs font-semibold tracking-architectural uppercase block mb-2">Requirement</label>
                    <input type="text" name="requirement" value={formData.requirement} onChange={handleChange} placeholder="e.g. 5,000 units / month, custom finish" className="form-input-light w-full px-4 py-3 text-sm" />
                  </div>
                  <div>
                    <label className="text-foreground text-xs font-semibold tracking-architectural uppercase block mb-2">Message</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="Describe your project or requirements in detail..." className="form-input-light w-full px-4 py-3 text-sm resize-none" />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center mt-2">
                    Send Enquiry
                    <Icon name="ArrowRightIcon" size={14} variant="outline" />
                  </button>
                  <p className="text-muted-foreground text-xs text-center">
                    We respond within 24–48 business hours · Export@libertymetalworks.in
                  </p>
                </form>
              )}
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}