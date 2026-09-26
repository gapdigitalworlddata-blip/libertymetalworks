'use client';
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppImage from '@/components/ui/AppImage';
import ScrollAnimation from '@/components/ScrollAnimation';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

const capabilities = [
{ icon: 'BuildingStorefrontIcon', title: 'Bulk Manufacturing', desc: 'High-volume production for large-scale import and distribution programs. Scalable capacity for consistent supply.' },
{ icon: 'PencilSquareIcon', title: 'Custom Development', desc: 'Bespoke product development for architects, designers and branded hardware programs from concept to production.' },
{ icon: 'SwatchIcon', title: 'Multiple Finishes', desc: 'Polished lacquered brass, antique (black/brass, black/chrome), powder coated and anti-tarnish finishes available.' },
{ icon: 'ArchiveBoxIcon', title: 'Export Packaging', desc: 'C-TPAT certified export-grade packaging engineered for safe international freight and customs compliance.' },
{ icon: 'TagIcon', title: 'OEM / Private Label', desc: 'Full OEM and private label manufacturing. Your brand, our precision. For distributors and hardware brands.' },
{ icon: 'TruckIcon', title: 'Reliable Supply', desc: 'Consistent lead times and supply chain reliability built for long-term international partnership programs.' }];


const markets = [
{ label: 'United States', flag: '🇺🇸', desc: 'Primary export market. Marketing office in California.' },
{ label: 'United Kingdom', flag: '🇬🇧', desc: 'Long-standing export relationships with UK distributors.' },
{ label: 'Germany', flag: '🇩🇪', desc: 'Supplying German architectural hardware importers.' },
{ label: 'France', flag: '🇫🇷', desc: 'Premium architectural hardware for French market.' },
{ label: 'Canada', flag: '🇨🇦', desc: 'North American distribution via Canadian partners.' },
{ label: 'Australia', flag: '🇦🇺', desc: 'Growing presence in Australian B2B hardware market.' }];


const productCategories = ['Door Grills', 'Door Bolts', 'Hooks', 'Door Handles', 'Other'];

export default function B2BExportPage() {
  const [formData, setFormData] = useState({
    name: '', company: '', country: '', email: '', phone: '', category: '', requirement: '', message: ''
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
    <main className="overflow-x-hidden">
      <Header />

      {/* Hero */}
      <section className="relative bg-primary pt-36 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-accent/5" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full border border-accent/5" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollAnimation animationClass="reveal-up">
            <span className="text-accent text-xs font-semibold tracking-architectural uppercase block mb-4">B2B &amp; Export</span>
            <h1 className="font-display text-hero-xl font-semibold text-primary-foreground mb-5">
              Built for Global<br />
              <span className="italic font-light text-accent">Partnerships.</span>
            </h1>
            <p className="text-primary-foreground/60 text-base max-w-xl leading-relaxed mb-8">
              Liberty Metal Works is structured for serious international B2B relationships. We supply importers, distributors, wholesalers, architects and sourcing partners across four continents.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#partnership-form" className="btn-outline-gold">
                Start a Partnership Enquiry
                <Icon name="ArrowDownIcon" size={14} variant="outline" />
              </a>
              <Link href="/products" className="btn-outline-white">
                View Product Range
                <Icon name="ArrowRightIcon" size={14} variant="outline" />
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Markets */}
      <section className="bg-background py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation animationClass="reveal-up" className="mb-14">
            <span className="text-accent text-xs font-semibold tracking-architectural uppercase block mb-3">Export Markets</span>
            <h2 className="font-display text-section-xl font-semibold text-foreground">
              Where We Ship
            </h2>
          </ScrollAnimation>

          {/* World Map */}
          <ScrollAnimation animationClass="reveal-up" delay={100} className="mb-14">
            <div className="relative border border-border bg-secondary overflow-hidden" style={{ aspectRatio: '2/1', maxHeight: '300px' }}>
              <svg viewBox="0 0 800 400" className="w-full h-full opacity-15" fill="none">
                <path d="M80 80 L180 70 L200 120 L190 180 L140 200 L100 180 L70 140 Z" fill="rgba(194,165,109,0.4)" stroke="rgba(194,165,109,0.6)" strokeWidth="1.5" />
                <path d="M140 220 L190 210 L200 280 L170 340 L130 330 L110 270 Z" fill="rgba(194,165,109,0.4)" stroke="rgba(194,165,109,0.6)" strokeWidth="1.5" />
                <path d="M350 60 L420 55 L430 100 L410 120 L360 115 L340 90 Z" fill="rgba(194,165,109,0.4)" stroke="rgba(194,165,109,0.6)" strokeWidth="1.5" />
                <path d="M360 130 L420 125 L440 200 L420 280 L370 285 L345 210 L350 150 Z" fill="rgba(194,165,109,0.4)" stroke="rgba(194,165,109,0.6)" strokeWidth="1.5" />
                <path d="M440 55 L620 50 L640 120 L600 160 L520 165 L460 140 L430 100 Z" fill="rgba(194,165,109,0.4)" stroke="rgba(194,165,109,0.6)" strokeWidth="1.5" />
                <path d="M600 250 L680 240 L700 300 L660 330 L610 320 L590 280 Z" fill="rgba(194,165,109,0.4)" stroke="rgba(194,165,109,0.6)" strokeWidth="1.5" />
              </svg>
              {[
              { label: 'USA', x: '20%', y: '38%', delay: '0s' },
              { label: 'UK', x: '46%', y: '25%', delay: '0.3s' },
              { label: 'DE', x: '50%', y: '26%', delay: '0.6s' },
              { label: 'CA', x: '18%', y: '28%', delay: '0.9s' },
              { label: 'AU', x: '80%', y: '68%', delay: '1.2s' },
              { label: 'IN', x: '64%', y: '42%', delay: '1.5s' }].
              map((dot) =>
              <div
                key={dot.label}
                className="absolute flex flex-col items-center"
                style={{ left: dot.x, top: dot.y, transform: 'translate(-50%,-50%)' }}>
                
                  <div className="world-dot w-3 h-3 rounded-full bg-accent" style={{ animationDelay: dot.delay }} />
                  <span className="text-accent font-semibold mt-1 hidden sm:block" style={{ fontSize: '9px' }}>{dot.label}</span>
                </div>
              )}
            </div>
          </ScrollAnimation>

          {/* Market Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {markets.map((market, i) =>
            <ScrollAnimation key={market.label} animationClass="reveal-up" delay={i * 60}>
                <div className="border border-border p-5 text-center hover:border-accent/50 transition-all duration-300 group">
                  <span className="text-3xl block mb-3">{market.flag}</span>
                  <span className="font-semibold text-foreground text-xs tracking-architectural uppercase block mb-2">{market.label}</span>
                  <p className="text-muted-foreground text-xs leading-relaxed hidden sm:block">{market.desc}</p>
                </div>
              </ScrollAnimation>
            )}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-primary py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation animationClass="reveal-up" className="mb-14">
            <span className="text-accent text-xs font-semibold tracking-architectural uppercase block mb-3">What We Offer</span>
            <h2 className="font-display text-section-xl font-semibold text-primary-foreground">B2B Capabilities</h2>
          </ScrollAnimation>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {capabilities.map((cap, i) =>
            <ScrollAnimation key={cap.title} animationClass="reveal-up" delay={i * 80}>
                <div className="border border-accent/15 p-8 hover:border-accent/40 hover:bg-accent/5 transition-all duration-300 group">
                  <div className="w-10 h-10 border border-accent/20 flex items-center justify-center mb-5 group-hover:border-accent transition-colors">
                    <Icon name={cap.icon as 'CubeIcon'} size={18} variant="outline" className="text-accent" />
                  </div>
                  <h3 className="font-semibold text-primary-foreground text-sm tracking-architectural uppercase mb-3">{cap.title}</h3>
                  <p className="text-primary-foreground/50 text-xs leading-relaxed">{cap.desc}</p>
                </div>
              </ScrollAnimation>
            )}
          </div>
          <ScrollAnimation animationClass="reveal-up" delay={200}>
            <p className="text-primary-foreground/30 text-xs text-center max-w-lg mx-auto leading-relaxed">
              All capabilities are available upon inquiry. Contact us to discuss your specific project requirements, minimum order quantities and lead times.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Why Partner */}
      <section className="bg-secondary py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimation animationClass="reveal-left">
              <span className="text-primary/60 text-xs font-semibold tracking-architectural uppercase block mb-4">Why Liberty Metal Works</span>
              <h2 className="font-display text-section-xl font-semibold text-primary mb-6">
                A Manufacturing Partner<br />
                <span className="italic font-light text-accent">You Can Rely On.</span>
              </h2>
              <div className="flex flex-col gap-5">
                {[
                { icon: 'ShieldCheckIcon', point: 'ISO 9001:2015 certified quality management system' },
                { icon: 'GlobeAltIcon', point: 'Export experience to USA, UK, Europe and Canada' },
                { icon: 'TrophyIcon', point: 'Highest Export Performance Award — Ministry of Commerce, India' },
                { icon: 'UserGroupIcon', point: 'Third-generation family business with 68+ years of precision manufacturing' },
                { icon: 'CogIcon', point: 'C-TPAT certified packaging and logistics compliance' }].
                map((item) =>
                <div key={item.point} className="flex items-start gap-4">
                    <Icon name={item.icon as 'ShieldCheckIcon'} size={16} variant="outline" className="text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-primary/70 text-sm leading-relaxed">{item.point}</p>
                  </div>
                )}
              </div>
            </ScrollAnimation>
            <ScrollAnimation animationClass="reveal-right">
              <div className="aspect-square overflow-hidden image-zoom-container relative">
                <AppImage
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_122d56994-1771885570568.png"
                  alt="Luxury brass door hardware architectural detail, warm well-lit interior setting"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-primary/85 backdrop-blur-sm p-5 border border-accent/20">
                    <span className="text-accent font-semibold text-sm block mb-1">Aligarh, India</span>
                    <span className="text-primary-foreground/60 text-xs">Manufacturing hub since 1956 · Exporting to 4 continents</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Partnership Form */}
      <section className="bg-dark-bg py-24 px-6" id="partnership-form">
        <div className="max-w-3xl mx-auto">
          <ScrollAnimation animationClass="reveal-up" className="text-center mb-14">
            <span className="text-accent text-xs font-semibold tracking-architectural uppercase block mb-4">Start a Conversation</span>
            <h2 className="font-display text-section-xl font-semibold text-primary-foreground mb-4">
              Partnership Enquiry
            </h2>
            <p className="text-primary-foreground/50 text-sm leading-relaxed">
              Tell us about your requirements and our export team will respond within 24–48 business hours.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animationClass="reveal-up" delay={100}>
            {submitted ?
            <div className="border border-accent/20 p-12 text-center">
                <Icon name="CheckCircleIcon" size={40} variant="outline" className="text-accent mx-auto mb-4" />
                <h3 className="font-display text-2xl font-semibold text-primary-foreground mb-3">Enquiry Received</h3>
                <p className="text-primary-foreground/50 text-sm leading-relaxed">
                  Thank you for your partnership enquiry. Our export team will be in touch within 24–48 business hours.
                </p>
              </div> :

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-accent text-xs font-semibold tracking-architectural uppercase block mb-2">Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your full name" className="form-input-dark w-full px-4 py-3 text-sm" />
                  </div>
                  <div>
                    <label className="text-accent text-xs font-semibold tracking-architectural uppercase block mb-2">Company *</label>
                    <input type="text" name="company" value={formData.company} onChange={handleChange} required placeholder="Company name" className="form-input-dark w-full px-4 py-3 text-sm" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-accent text-xs font-semibold tracking-architectural uppercase block mb-2">Country *</label>
                    <input type="text" name="country" value={formData.country} onChange={handleChange} required placeholder="Your country" className="form-input-dark w-full px-4 py-3 text-sm" />
                  </div>
                  <div>
                    <label className="text-accent text-xs font-semibold tracking-architectural uppercase block mb-2">Business Email *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="business@company.com" className="form-input-dark w-full px-4 py-3 text-sm" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-accent text-xs font-semibold tracking-architectural uppercase block mb-2">Phone / WhatsApp</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 234 567 8900" className="form-input-dark w-full px-4 py-3 text-sm" />
                  </div>
                  <div>
                    <label className="text-accent text-xs font-semibold tracking-architectural uppercase block mb-2">Product Category</label>
                    <select name="category" value={formData.category} onChange={handleChange} className="form-input-dark w-full px-4 py-3 text-sm bg-dark-bg">
                      <option value="">Select category</option>
                      {productCategories.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-accent text-xs font-semibold tracking-architectural uppercase block mb-2">Requirement</label>
                  <input type="text" name="requirement" value={formData.requirement} onChange={handleChange} placeholder="e.g. 10,000 units / month, OEM development" className="form-input-dark w-full px-4 py-3 text-sm" />
                </div>
                <div>
                  <label className="text-accent text-xs font-semibold tracking-architectural uppercase block mb-2">Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows={4} placeholder="Describe your partnership requirements..." className="form-input-dark w-full px-4 py-3 text-sm resize-none" />
                </div>
                <button type="submit" className="btn-primary w-full justify-center mt-2">
                  Send Partnership Enquiry
                  <Icon name="ArrowRightIcon" size={14} variant="outline" />
                </button>
              </form>
            }
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </main>);

}