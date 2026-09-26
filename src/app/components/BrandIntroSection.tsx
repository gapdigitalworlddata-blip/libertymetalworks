import React from 'react';
import ScrollAnimation from '@/components/ScrollAnimation';

const stats = [
  { value: '68+', label: 'Years of Craftsmanship', sub: 'Since 1956' },
  { value: '100K', label: 'Sq. Ft. Facility', sub: 'Aligarh, India' },
  { value: '4', label: 'Continents Served', sub: 'USA · UK · EU · AU' },
];

export default function BrandIntroSection() {
  return (
    <section className="bg-background py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Quote */}
        <ScrollAnimation animationClass="reveal-up" className="text-center mb-20">
          <div className="divider-gold w-24 mx-auto mb-8" />
          <h2 className="font-display text-section-xl font-light text-foreground max-w-4xl mx-auto leading-tight">
            Since <span className="italic text-accent">1956</span>, crafting precision hardware for the world's most demanding architectural projects.
          </h2>
          <div className="divider-gold w-24 mx-auto mt-8" />
        </ScrollAnimation>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border border-border">
          {stats?.map((stat, i) => (
            <ScrollAnimation
              key={stat?.value}
              animationClass="reveal-up"
              delay={i * 120}
              className={`flex flex-col items-center justify-center py-14 px-8 text-center ${
                i < stats?.length - 1 ? 'sm:border-r border-b sm:border-b-0 border-border' : ''
              }`}
            >
              <span className="stat-number gold-gradient-text font-display font-semibold mb-2">
                {stat?.value}
              </span>
              <span className="text-foreground font-semibold text-sm tracking-architectural uppercase mb-1">
                {stat?.label}
              </span>
              <span className="text-muted-foreground text-xs tracking-wide">
                {stat?.sub}
              </span>
            </ScrollAnimation>
          ))}
        </div>

        {/* Description */}
        <ScrollAnimation animationClass="reveal-up" delay={200} className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-accent text-xs font-semibold tracking-architectural uppercase block mb-4">Our Heritage</span>
            <h3 className="font-display text-display-sm font-semibold text-foreground mb-4">
              Three Generations of Manufacturing Excellence
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Liberty Brass International, the parent company of Liberty Metal Works, was founded in 1956 by Mr. Shiv Shankar Varshney. Today, as a third-generation family business, we continue to uphold the highest standards of craftsmanship — now under the leadership of Mr. Varun Gupta, Managing Partner and Head of Product Development.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Casting', desc: 'Precision brass casting for complex architectural forms' },
              { label: 'Forging', desc: 'High-strength forged components for durability' },
              { label: 'Stamping', desc: 'Accurate sheet-metal stamping for repeatability' },
              { label: 'Fabrication', desc: 'Custom fabrication for bespoke project requirements' },
            ]?.map((cap) => (
              <div key={cap?.label} className="border border-border p-5 hover:border-accent/50 transition-colors duration-300">
                <span className="text-accent text-xs font-semibold tracking-architectural uppercase block mb-2">{cap?.label}</span>
                <p className="text-muted-foreground text-xs leading-relaxed">{cap?.desc}</p>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}