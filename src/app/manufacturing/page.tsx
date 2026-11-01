import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppImage from '@/components/ui/AppImage';
import ScrollAnimation from '@/components/ScrollAnimation';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

const processSteps = [
  {
    num: '01',
    title: 'Raw Material Procurement',
    desc: 'Premium brass ingots, iron billets and alloy rods are sourced from certified metallurgical suppliers. Every incoming batch undergoes chemical composition testing before production begins.',
    image: 'https://images.pexels.com/photos/47047/gold-ingots-golden-treasure-47047.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Raw metal ingots in bright industrial warehouse, well-lit storage facility',
  },
  {
    num: '02',
    title: 'Precision Forming',
    desc: 'Casting, forging and stamping processes transform raw metal into near-net architectural forms. Our 100,000 sq. ft. facility houses dedicated production lines for each process type.',
    image: 'https://images.pexels.com/photos/6804260/pexels-photo-6804260.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Metal casting and forging process in bright factory, molten metal forming precision parts',
  },
  {
    num: '03',
    title: 'CNC Machining',
    desc: 'Computer-controlled machining ensures dimensional accuracy and surface finish consistency across production batches. Tolerances held to architectural specification requirements.',
    image: 'https://images.pexels.com/photos/8865189/pexels-photo-8865189.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'CNC machining precision metal parts bright factory floor well-lit workshop',
  },
  {
    num: '04',
    title: 'Surface Finishing',
    desc: 'Polished lacquered brass, antique (black/brass and black/chrome), powder coated and anti-tarnish finishes. Each finish is applied in dedicated finishing bays with controlled environments.',
    image: 'https://images.pexels.com/photos/8525275/pexels-photo-8525275.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Metal surface polishing and finishing process bright workshop, brass hardware gleaming',
  },
  {
    num: '05',
    title: 'Quality Control',
    desc: 'ISO 9001:2015 certified multi-stage inspection. Dimensional verification, finish quality assessment and functional testing are performed before any product is released for packaging.',
    image: 'https://images.pexels.com/photos/36003961/pexels-photo-36003961.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Quality control inspection of metal hardware parts, bright well-lit inspection room',
  },
  {
    num: '06',
    title: 'Export Ready',
    desc: 'C-TPAT certified export packaging. Products are individually wrapped, boxed and palletized to international shipping standards for safe delivery to USA, UK, Europe and beyond.',
    image: 'https://images.pexels.com/photos/4487383/pexels-photo-4487383.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Export packaging warehouse bright logistics facility, packaged hardware ready for shipping',
  },
];

const facilityStats = [
  { value: '100,000', unit: 'sq. ft.', label: 'Manufacturing Facility' },
  { value: '68+', unit: 'years', label: 'Manufacturing Experience' },
  { value: '4', unit: 'processes', label: 'Core Capabilities' },
  { value: 'ISO', unit: '9001·14001·45001', label: 'Certified Standards' },
];

export default function ManufacturingPage() {
  return (
    <main className="overflow-x-hidden">
      <Header />

      {/* Hero */}
      <section className="relative min-h-screen flex items-end bg-dark-bg overflow-hidden">
        <div className="absolute inset-0">
          <AppImage
            src="https://images.pexels.com/photos/34718922/pexels-photo-34718922.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Large manufacturing facility interior with industrial machinery, bright factory lighting, clean production floor"
            fill
            priority
            className="object-cover opacity-50"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/50 to-dark-bg/10" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 pt-40 w-full">
          <ScrollAnimation animationClass="reveal-up">
            <span className="text-accent text-xs font-semibold tracking-architectural uppercase block mb-4">Manufacturing</span>
            <h1 className="font-display text-hero-xl font-semibold text-primary-foreground mb-4">
              Precision at<br />
              <span className="italic font-light text-accent">Every Step.</span>
            </h1>
            <p className="text-primary-foreground/60 text-base max-w-xl leading-relaxed">
              From raw material to export-ready product — our manufacturing process is built on 68 years of precision craftsmanship and ISO-certified quality standards.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Facility Stats */}
      <section className="bg-secondary py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-0 border border-border">
          {facilityStats.map((stat, i) => (
            <ScrollAnimation
              key={stat.label}
              animationClass="reveal-up"
              delay={i * 80}
              className={`flex flex-col items-center justify-center py-10 px-6 text-center ${i < facilityStats.length - 1 ? 'border-r border-border' : ''}`}
            >
              <span className="font-display text-4xl font-semibold text-primary mb-1">{stat.value}</span>
              <span className="text-accent text-xs font-semibold mb-2">{stat.unit}</span>
              <span className="text-muted-foreground text-xs tracking-architectural uppercase">{stat.label}</span>
            </ScrollAnimation>
          ))}
        </div>
      </section>

      {/* Process Steps — Alternating */}
      <section className="bg-background py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation animationClass="reveal-up" className="mb-20">
            <span className="text-accent text-xs font-semibold tracking-architectural uppercase block mb-3">The Process</span>
            <h2 className="font-display text-section-xl font-semibold text-foreground">
              From Raw Metal to<br />
              <span className="italic font-light text-accent">World-Class Hardware</span>
            </h2>
          </ScrollAnimation>

          <div className="flex flex-col gap-0">
            {processSteps.map((step, i) => (
              <ScrollAnimation key={step.num} animationClass="reveal-up" delay={60}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 border-b border-border ${i % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
                  {/* Image */}
                  <div className={`image-zoom-container overflow-hidden ${i % 2 === 1 ? 'lg:order-2' : ''}`} style={{ minHeight: '360px', position: 'relative' }}>
                    <AppImage
                      src={step.image}
                      alt={step.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  {/* Content */}
                  <div className={`flex flex-col justify-center p-12 lg:p-16 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <span className="font-display text-6xl font-light text-accent/20 block mb-4">{step.num}</span>
                    <h3 className="font-display text-display-sm font-semibold text-foreground mb-4">{step.title}</h3>
                    <div className="divider-gold w-12 mb-5" />
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-primary py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation animationClass="reveal-up" className="mb-14">
            <span className="text-accent text-xs font-semibold tracking-architectural uppercase block mb-3">Core Capabilities</span>
            <h2 className="font-display text-section-xl font-semibold text-primary-foreground">
              What We Do Best
            </h2>
          </ScrollAnimation>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: 'FireIcon', title: 'Casting', desc: 'Sand and die casting for complex brass architectural forms with fine surface detail.' },
              { icon: 'BoltIcon', title: 'Forging', desc: 'Hot and cold forging for high-strength components requiring superior mechanical properties.' },
              { icon: 'Square2StackIcon', title: 'Stamping', desc: 'Precision sheet-metal stamping for consistent, repeatable architectural hardware components.' },
              { icon: 'WrenchIcon', title: 'Fabrication', desc: 'Custom fabrication for bespoke architectural programs and OEM development projects.' },
            ].map((cap, i) => (
              <ScrollAnimation key={cap.title} animationClass="reveal-up" delay={i * 80}>
                <div className="border border-accent/15 p-8 hover:border-accent/40 transition-all duration-300 group">
                  <Icon name={cap.icon as 'FireIcon'} size={24} variant="outline" className="text-accent mb-5" />
                  <h3 className="font-semibold text-primary-foreground text-sm tracking-architectural uppercase mb-3">{cap.title}</h3>
                  <p className="text-primary-foreground/50 text-xs leading-relaxed">{cap.desc}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollAnimation animationClass="reveal-up">
            <h2 className="font-display text-display-sm font-semibold text-primary mb-4">
              Ready to Discuss Your Requirements?
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              Contact our export team to discuss manufacturing capacity, lead times and custom development programs.
            </p>
            <Link href="/contact" className="btn-primary inline-flex">
              Start a Manufacturing Enquiry
              <Icon name="ArrowRightIcon" size={14} variant="outline" />
            </Link>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </main>
  );
}
