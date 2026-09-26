'use client';
import React, { useState } from 'react';
import ScrollAnimation from '@/components/ScrollAnimation';
import Icon from '@/components/ui/AppIcon';

const productCategories = ['Door Grills', 'Door Bolts', 'Hooks', 'Door Handles', 'Other'];

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    country: '',
    email: '',
    phone: '',
    category: '',
    requirement: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-dark-bg py-24 px-6" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <ScrollAnimation animationClass="reveal-left">
            <span className="text-accent text-xs font-semibold tracking-architectural uppercase block mb-4">Get in Touch</span>
            <h2 className="font-display text-display-sm font-semibold text-primary-foreground mb-6">
              Start Your B2B Enquiry
            </h2>
            <p className="text-primary-foreground/50 text-sm leading-relaxed mb-10">
              Contact our export team to discuss product requirements, pricing, OEM development or partnership opportunities.
            </p>

            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 border border-accent/20 flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPinIcon" size={16} variant="outline" className="text-accent" />
                </div>
                <div>
                  <span className="text-accent text-xs font-semibold tracking-architectural uppercase block mb-1">Address</span>
                  <p className="text-primary-foreground/60 text-sm leading-relaxed">
                    LBI, ITI Road, Aligarh – 202001<br />
                    Uttar Pradesh, India
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 border border-accent/20 flex items-center justify-center flex-shrink-0">
                  <Icon name="PhoneIcon" size={16} variant="outline" className="text-accent" />
                </div>
                <div>
                  <span className="text-accent text-xs font-semibold tracking-architectural uppercase block mb-1">Phone / WhatsApp</span>
                  <a href="tel:+917017203139" className="text-primary-foreground/60 text-sm hover:text-accent transition-colors">
                    +91-7017203139
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 border border-accent/20 flex items-center justify-center flex-shrink-0">
                  <Icon name="EnvelopeIcon" size={16} variant="outline" className="text-accent" />
                </div>
                <div>
                  <span className="text-accent text-xs font-semibold tracking-architectural uppercase block mb-1">Email</span>
                  <a href="mailto:Export@libertymetalworks.in" className="text-primary-foreground/60 text-sm hover:text-accent transition-colors block">
                    Export@libertymetalworks.in
                  </a>
                  <a href="mailto:Varun@libertybrassintl.com" className="text-primary-foreground/60 text-sm hover:text-accent transition-colors block mt-1">
                    Varun@libertybrassintl.com
                  </a>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Right: Form */}
          <ScrollAnimation animationClass="reveal-right">
            {submitted ? (
              <div className="border border-accent/20 p-12 text-center">
                <Icon name="CheckCircleIcon" size={40} variant="outline" className="text-accent mx-auto mb-4" />
                <h3 className="font-display text-2xl font-semibold text-primary-foreground mb-3">Enquiry Sent</h3>
                <p className="text-primary-foreground/50 text-sm leading-relaxed">
                  Thank you for your enquiry. Our export team will respond within 24–48 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-accent text-xs font-semibold tracking-architectural uppercase block mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="form-input-dark w-full px-4 py-3 text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-accent text-xs font-semibold tracking-architectural uppercase block mb-2">Company *</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      placeholder="Company name"
                      className="form-input-dark w-full px-4 py-3 text-sm"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-accent text-xs font-semibold tracking-architectural uppercase block mb-2">Country *</label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      placeholder="Your country"
                      className="form-input-dark w-full px-4 py-3 text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-accent text-xs font-semibold tracking-architectural uppercase block mb-2">Business Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="business@company.com"
                      className="form-input-dark w-full px-4 py-3 text-sm"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-accent text-xs font-semibold tracking-architectural uppercase block mb-2">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 234 567 8900"
                      className="form-input-dark w-full px-4 py-3 text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-accent text-xs font-semibold tracking-architectural uppercase block mb-2">Product Category</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="form-input-dark w-full px-4 py-3 text-sm bg-dark-bg"
                    >
                      <option value="">Select category</option>
                      {productCategories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-accent text-xs font-semibold tracking-architectural uppercase block mb-2">Requirement</label>
                  <input
                    type="text"
                    name="requirement"
                    value={formData.requirement}
                    onChange={handleChange}
                    placeholder="e.g. 5,000 units / month, custom finish"
                    className="form-input-dark w-full px-4 py-3 text-sm"
                  />
                </div>
                <div>
                  <label className="text-accent text-xs font-semibold tracking-architectural uppercase block mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe your project or requirements..."
                    className="form-input-dark w-full px-4 py-3 text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full justify-center mt-2"
                >
                  Send Enquiry
                  <Icon name="ArrowRightIcon" size={14} variant="outline" />
                </button>
              </form>
            )}
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}