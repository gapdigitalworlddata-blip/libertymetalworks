import React from 'react';
import Link from 'next/link';
import ScrollAnimation from '@/components/ScrollAnimation';
import Icon from '@/components/ui/AppIcon';

const capabilities = [
  {
    icon: 'BuildingStorefrontIcon',
    title: 'Bulk Manufacturing',
    desc: 'High-volume production capabilities to meet large-scale import and distribution requirements.',
  },
  {
    icon: 'PencilSquareIcon',
    title: 'Custom Development',
    desc: 'Bespoke product development for architects, designers and branded hardware programs.',
  },
  {
    icon: 'SwatchIcon',
    title: 'Multiple Finishes',
    desc: 'Polished brass, antique, powder coated, anti-tarnish and custom finishes available.',
  },
  {
    icon: 'ArchiveBoxIcon',
    title: 'Export Packaging',
    desc: 'C-TPAT certified export-grade packaging designed for safe international shipping.',
  },
  {
    icon: 'TagIcon',
    title: 'OEM / Private Label',
    desc: 'Full OEM and private label manufacturing for distributors and branded hardware lines.',
  },
  {
    icon: 'TruckIcon',
    title: 'Reliable Supply',
    desc: 'Consistent lead times and supply chain reliability for long-term partnership programs.',
  },
];

const markets = [
  { label: 'USA', x: '20%', y: '38%' },
  { label: 'UK', x: '46%', y: '25%' },
  { label: 'Germany', x: '50%', y: '26%' },
  { label: 'France', x: '47%', y: '28%' },
  { label: 'Canada', x: '18%', y: '28%' },
  { label: 'Australia', x: '80%', y: '68%' },
  { label: 'India', x: '64%', y: '42%' },
];

export default function B2BSectionHome() {
  return (
    <section className="bg-primary py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollAnimation animationClass="reveal-up" className="text-center mb-16">
          <span className="text-accent text-xs font-semibold tracking-architectural uppercase block mb-4">Global Partnerships</span>
          <h2 className="font-display text-section-xl font-semibold text-primary-foreground mb-4">
            Built for Global Partnerships
          </h2>
          <p className="text-primary-foreground/60 text-sm max-w-2xl mx-auto leading-relaxed">
            Liberty Metal Works serves international importers, distributors, wholesalers, architects and sourcing partners across four continents. Our export-ready infrastructure is built for serious B2B relationships.
          </p>
        </ScrollAnimation>

        {/* World Map SVG */}
        <ScrollAnimation animationClass="reveal-up" delay={100} className="mb-16">
          <div className="relative bg-primary-foreground/5 border border-accent/10 p-6 overflow-hidden" style={{ aspectRatio: '2/1', maxHeight: '320px' }}>
            {/* Simple SVG World Map Outline */}
            <svg
              viewBox="0 0 800 400"
              className="w-full h-full opacity-20"
              fill="none"
            >
              {/* Simplified continent shapes */}
              {/* North America */}
              <path d="M80 80 L180 70 L200 120 L190 180 L140 200 L100 180 L70 140 Z" fill="rgba(194,165,109,0.3)" stroke="rgba(194,165,109,0.5)" strokeWidth="1" />
              {/* South America */}
              <path d="M140 220 L190 210 L200 280 L170 340 L130 330 L110 270 Z" fill="rgba(194,165,109,0.3)" stroke="rgba(194,165,109,0.5)" strokeWidth="1" />
              {/* Europe */}
              <path d="M350 60 L420 55 L430 100 L410 120 L360 115 L340 90 Z" fill="rgba(194,165,109,0.3)" stroke="rgba(194,165,109,0.5)" strokeWidth="1" />
              {/* Africa */}
              <path d="M360 130 L420 125 L440 200 L420 280 L370 285 L345 210 L350 150 Z" fill="rgba(194,165,109,0.3)" stroke="rgba(194,165,109,0.5)" strokeWidth="1" />
              {/* Asia */}
              <path d="M440 55 L620 50 L640 120 L600 160 L520 165 L460 140 L430 100 Z" fill="rgba(194,165,109,0.3)" stroke="rgba(194,165,109,0.5)" strokeWidth="1" />
              {/* Australia */}
              <path d="M600 250 L680 240 L700 300 L660 330 L610 320 L590 280 Z" fill="rgba(194,165,109,0.3)" stroke="rgba(194,165,109,0.5)" strokeWidth="1" />
            </svg>
            {/* Market Dots */}
            {markets.map((market, i) => (
              <div
                key={market.label}
                className="absolute flex flex-col items-center"
                style={{ left: market.x, top: market.y, transform: 'translate(-50%, -50%)' }}
              >
                <div
                  className="world-dot w-2.5 h-2.5 rounded-full bg-accent"
                  style={{ animationDelay: `${i * 0.3}s` }}
                />
                <span className="text-accent text-xs font-semibold mt-1 whitespace-nowrap hidden sm:block" style={{ fontSize: '9px' }}>
                  {market.label}
                </span>
              </div>
            ))}
            {/* Label */}
            <div className="absolute bottom-4 right-4">
              <span className="text-accent/60 text-xs tracking-architectural uppercase">Export Markets</span>
            </div>
          </div>
        </ScrollAnimation>

        {/* Capabilities Grid — 3×2 */}
        {/* BENTO AUDIT: 6 cards, 3-col grid */}
        {/* Row 1: [col-1: Bulk Mfg] [col-2: Custom Dev] [col-3: Multiple Finishes] */}
        {/* Row 2: [col-1: Export Pkg] [col-2: OEM Label] [col-3: Reliable Supply] */}
        {/* Placed 6/6 ✓ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {capabilities.map((cap, i) => (
            <ScrollAnimation key={cap.title} animationClass="reveal-up" delay={i * 80}>
              <div className="border border-accent/15 p-7 hover:border-accent/40 hover:bg-accent/5 transition-all duration-300 group">
                <div className="w-10 h-10 border border-accent/20 flex items-center justify-center mb-5 group-hover:border-accent transition-colors">
                  <Icon name={cap.icon as 'CubeIcon'} size={18} variant="outline" className="text-accent" />
                </div>
                <h3 className="font-semibold text-primary-foreground text-sm tracking-architectural uppercase mb-3">
                  {cap.title}
                </h3>
                <p className="text-primary-foreground/50 text-xs leading-relaxed">{cap.desc}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Disclaimer + CTA */}
        <ScrollAnimation animationClass="reveal-up" delay={200} className="text-center">
          <p className="text-primary-foreground/30 text-xs mb-8 max-w-lg mx-auto leading-relaxed">
            Capabilities available upon inquiry. Contact us to discuss your specific project requirements and partnership opportunities.
          </p>
          <Link href="/b2b-export" className="btn-outline-gold">
            Explore B2B Partnerships
            <Icon name="ArrowRightIcon" size={14} variant="outline" />
          </Link>
        </ScrollAnimation>
      </div>
    </section>
  );
}