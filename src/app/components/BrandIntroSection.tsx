import React from 'react';
import ScrollAnimation from '@/components/ScrollAnimation';

const stats = [
  { value: '68+', label: 'Years of Craftsmanship', sub: 'Since 1956' },
  { value: '100K+', label: 'Sq. Ft. Facility', sub: 'Aligarh & Rajkot, India' },
  { value: '4', label: 'Continents Served', sub: 'USA · UK · EU · Middle East' },
];

export default function BrandIntroSection() {
  return (
    <section className="bg-background py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Quote */}
        <ScrollAnimation animationClass="reveal-up" className="text-center mb-20">
          <div className="divider-gold w-24 mx-auto mb-8" />
          <h3 className="font-display text-xl md:text-2xl font-light text-foreground max-w-4xl mx-auto leading-tight">
            Founded in <span className="italic text-accent">1956</span>, Liberty Electricals has built a legacy of quality, innovation, and engineering excellence in electrical accessories and hardware.
          </h3>
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
            <p className="text-muted-foreground leading-relaxed text-sm mb-4">
              Liberty Brass International traces its roots to 1956, when Mr. Shiv Shankar Varshney founded Liberty Electricals in Aligarh. Castle Hardwares followed in 1965 as a premium architectural hardware manufacturer, and Liberty Brass International was incorporated in 1986 exclusively for exports.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Today, as a third-generation family business under the leadership of Mr. Varun Gupta (Managing Partner), we operate 100,000+ sq. ft. of ISO-certified manufacturing across Aligarh and Rajkot — serving customers in the USA, UK, Europe, Canada, and the Middle East.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Casting & Forging', desc: 'Diecasting, sand-casting, and forging for complex architectural forms' },
              { label: 'Stamping & Fabrication', desc: 'High-tonnage press work and CNC laser cutting for precision profiles' },
              { label: 'Machining', desc: 'CNC machining, drilling, and tapping for consistent tolerances' },
              { label: 'Finishing', desc: 'Polishing, electroplating, powder coating, anodising, and lacquering' },
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