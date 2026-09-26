import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppImage from '@/components/ui/AppImage';
import ScrollAnimation from '@/components/ScrollAnimation';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

const timeline = [
{ year: '1956', title: 'Liberty Electricals Founded', desc: 'Mr. Shiv Shankar Varshney establishes Liberty Electricals in Aligarh, beginning a legacy of precision manufacturing.' },
{ year: '1986', title: 'Liberty Brass International', desc: 'The company expands into brass builder hardware, establishing Liberty Brass International as an export-focused manufacturing entity.' },
{ year: '2000s', title: 'Global Export Growth', desc: 'Products begin reaching UK, Europe, USA and Canadian markets. Export performance awards from the Ministry of Commerce, Government of India.' },
{ year: '2015', title: 'ISO Certification', desc: 'Achieves ISO 9001:2015, ISO 14001:2015 and C-TPAT certifications, formalizing world-class quality and compliance standards.' },
{ year: '2024', title: 'Liberty Metal Works', desc: 'Liberty Metal Works is launched as a dedicated architectural hardware brand, targeting premium B2B markets in USA, UK, Germany and beyond.' }];


const certifications = [
{ code: 'ISO 9001:2015', name: 'Quality Management System' },
{ code: 'ISO 14001:2015', name: 'Environmental Management' },
{ code: 'ISO 45001:2018', name: 'Occupational Health & Safety' },
{ code: 'C-TPAT', name: 'Customs-Trade Partnership Against Terrorism' }];


export default function AboutPage() {
  return (
    <main className="overflow-x-hidden">
      <Header />

      {/* Hero */}
      <section className="relative min-h-screen flex items-end bg-dark-bg overflow-hidden">
        <div className="absolute inset-0">
          <AppImage
            src="https://img.rocket.new/generatedImages/rocket_gen_img_103d82c14-1772147158404.png"
            alt="Precision metal manufacturing facility interior, bright industrial lights, clean workshop"
            fill
            priority
            className="object-cover opacity-40"
            sizes="100vw" />
          
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/60 to-dark-bg/20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 pt-40 w-full">
          <span className="text-accent text-xs font-semibold tracking-architectural uppercase block mb-4">Our Story</span>
          <h1 className="font-display text-hero-xl font-semibold text-primary-foreground mb-4">
            Three Generations.<br />
            <span className="italic font-light text-accent">One Standard.</span>
          </h1>
          <p className="text-primary-foreground/60 text-base max-w-xl leading-relaxed">
            From a small workshop in Aligarh in 1956 to a 100,000 sq. ft. ISO-certified export facility — the Liberty story is one of relentless craftsmanship.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-background py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimation animationClass="reveal-up" className="mb-16">
            <span className="text-accent text-xs font-semibold tracking-architectural uppercase block mb-3">Heritage</span>
            <h2 className="font-display text-section-xl font-semibold text-foreground">Our Journey</h2>
          </ScrollAnimation>

          <div className="relative">
            <div className="absolute left-16 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-accent/20 to-transparent hidden sm:block" />
            <div className="flex flex-col gap-0">
              {timeline?.map((item, i) =>
              <ScrollAnimation key={item?.year} animationClass="reveal-up" delay={i * 100}>
                  <div className="flex gap-8 pb-12">
                    <div className="flex flex-col items-center gap-2 flex-shrink-0 w-16 hidden sm:flex">
                      <div className="w-3 h-3 rounded-full bg-accent border-2 border-background mt-1 relative z-10" />
                    </div>
                    <div className="flex-1 pb-4">
                      <span className="text-accent font-display text-2xl font-semibold block mb-2">{item?.year}</span>
                      <h3 className="font-semibold text-foreground text-base tracking-wide mb-2">{item?.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item?.desc}</p>
                    </div>
                  </div>
                </ScrollAnimation>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities */}
      <section className="bg-secondary py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation animationClass="reveal-up" className="mb-14">
            <span className="text-primary/60 text-xs font-semibold tracking-architectural uppercase block mb-3">Capabilities</span>
            <h2 className="font-display text-section-xl font-semibold text-primary">Manufacturing Excellence</h2>
          </ScrollAnimation>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animationClass="reveal-left">
              <div className="aspect-video overflow-hidden image-zoom-container">
                <AppImage
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_14522924c-1767251693062.png"
                  alt="Precision metal parts manufacturing close-up, bright well-lit factory floor"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw" />
                
              </div>
            </ScrollAnimation>
            <div className="flex flex-col gap-5">
              {[
              { stat: '100,000', unit: 'sq. ft.', label: 'Manufacturing Facility' },
              { stat: '68+', unit: 'years', label: 'Industry Experience' },
              { stat: '4', unit: 'continents', label: 'Export Markets' }]?.
              map((s, i) =>
              <ScrollAnimation key={s?.label} animationClass="reveal-right" delay={i * 80}>
                  <div className="flex items-center gap-6 py-5 border-b border-primary/10">
                    <span className="font-display text-4xl font-semibold text-primary">{s?.stat}<span className="text-accent text-2xl ml-1">{s?.unit}</span></span>
                    <span className="text-primary/60 text-sm font-semibold tracking-architectural uppercase">{s?.label}</span>
                  </div>
                </ScrollAnimation>
              )}
              <p className="text-primary/60 text-sm leading-relaxed">
                Specializing in Casting, Forging, Stamping and Fabrication — our facility is equipped to handle complex architectural hardware programs from prototype to production at scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-primary py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation animationClass="reveal-up" className="mb-14 text-center">
            <span className="text-accent text-xs font-semibold tracking-architectural uppercase block mb-3">Certifications</span>
            <h2 className="font-display text-section-xl font-semibold text-primary-foreground">Internationally Certified</h2>
          </ScrollAnimation>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications?.map((cert, i) =>
            <ScrollAnimation key={cert?.code} animationClass="reveal-up" delay={i * 80}>
                <div className="border border-accent/20 p-8 text-center hover:border-accent/50 transition-colors">
                  <Icon name="ShieldCheckIcon" size={28} variant="outline" className="text-accent mx-auto mb-4" />
                  <span className="text-accent font-semibold text-base block mb-2">{cert?.code}</span>
                  <span className="text-primary-foreground/50 text-xs leading-relaxed">{cert?.name}</span>
                </div>
              </ScrollAnimation>
            )}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-background py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation animationClass="reveal-up" className="mb-14">
            <span className="text-accent text-xs font-semibold tracking-architectural uppercase block mb-3">Leadership</span>
            <h2 className="font-display text-section-xl font-semibold text-foreground">The People Behind the Product</h2>
          </ScrollAnimation>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animationClass="reveal-left">
              <div className="aspect-square max-w-sm overflow-hidden bg-secondary relative">
                <AppImage
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_109182e11-1784360964427.png"
                  alt="Business executive in formal attire, professional office setting, warm lighting"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw" />
                
              </div>
            </ScrollAnimation>
            <ScrollAnimation animationClass="reveal-right" className="flex flex-col gap-5">
              <div>
                <span className="text-accent text-xs font-semibold tracking-architectural uppercase block mb-2">Managing Partner</span>
                <h3 className="font-display text-display-sm font-semibold text-foreground">Mr. Varun Gupta</h3>
                <span className="text-muted-foreground text-sm">Head of Product Development · Liberty Brass International</span>
              </div>
              <div className="divider-gold w-12" />
              <p className="text-muted-foreground text-sm leading-relaxed">
                Under Varun Gupta's leadership, Liberty Metal Works has been positioned as a premium architectural hardware brand for global markets. His focus on product development, quality standards and international partnerships has driven the company's expansion into USA, UK and European markets.
              </p>
              <Link href="/contact" className="btn-primary self-start">
                Get in Touch
                <Icon name="ArrowRightIcon" size={14} variant="outline" />
              </Link>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <Footer />
    </main>);

}