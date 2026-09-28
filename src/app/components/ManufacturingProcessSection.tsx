import React from 'react';
import AppImage from '@/components/ui/AppImage';
import ScrollAnimation from '@/components/ScrollAnimation';
import Icon from '@/components/ui/AppIcon';

const steps = [
{
  num: '01',
  title: 'Raw Material',
  desc: 'Premium brass, iron and alloy ingots sourced to strict metallurgical standards.',
  icon: 'CubeIcon'
},
{
  num: '02',
  title: 'Precision Forming',
  desc: 'Casting, forging and stamping processes shape raw metal into architectural forms.',
  icon: 'WrenchScrewdriverIcon'
},
{
  num: '03',
  title: 'Machining',
  desc: 'CNC machining ensures dimensional accuracy and consistent tolerances across batches.',
  icon: 'CogIcon'
},
{
  num: '04',
  title: 'Finishing',
  desc: 'Polished lacquered brass, antique, powder coated and anti-tarnish finishes applied.',
  icon: 'SparklesIcon'
},
{
  num: '05',
  title: 'Quality Control',
  desc: 'ISO 9001:2015 certified multi-stage inspection before every shipment.',
  icon: 'ShieldCheckIcon'
},
{
  num: '06',
  title: 'Export Ready',
  desc: 'C-TPAT certified export packaging for USA, UK, Europe and global markets.',
  icon: 'GlobeAltIcon'
}];


export default function ManufacturingProcessSection() {
  return (
    <section className="bg-secondary py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollAnimation animationClass="reveal-up" className="mb-16">
          <span className="text-primary/60 text-xs font-semibold tracking-architectural uppercase block mb-3">Manufacturing</span>
          <h2 className="font-display text-section-xl font-semibold text-primary max-w-2xl">
            From Raw Metal to World-Class Hardware
          </h2>
        </ScrollAnimation>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Image */}
          <ScrollAnimation animationClass="reveal-left" className="sticky top-32">
            <div className="relative aspect-[4/5] overflow-hidden">
              <AppImage
                src="/assets/images/ChatGPT_Image_Sep_28__2026__11_28_35_AM-1790575160365.png"
                alt="Factory floor with metal manufacturing machinery and industrial equipment"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="grid grid-cols-2 gap-3">
                  {[
                  { val: '100K', lbl: 'Sq. Ft. Plant' },
                  { val: 'ISO', lbl: '9001 · 14001 · 45001' }].
                  map((s) =>
                  <div key={s.val} className="backdrop-blur-sm p-4 border border-white/20" style={{ backgroundColor: '#123524' }}>
                      <span className="font-display text-2xl font-semibold block" style={{ color: '#ffffff' }}>{s.val}</span>
                      <span className="text-xs tracking-wide" style={{ color: 'rgba(255,255,255,0.8)' }}>{s.lbl}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Right: Steps */}
          <div className="flex flex-col gap-0">
            {steps.map((step, i) =>
            <ScrollAnimation key={step.num} animationClass="reveal-right" delay={i * 80}>
                <div className="manufacturing-step flex items-start gap-5 py-7 border-b border-primary/10 group cursor-default">
                  <div className="flex-shrink-0 flex flex-col items-center gap-2">
                    <span className="font-display text-accent/50 text-sm font-light">{step.num}</span>
                    {i < steps.length - 1 &&
                  <div className="w-px h-6 bg-primary/15" />
                  }
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon name={step.icon as 'CubeIcon'} size={16} variant="outline" className="text-accent" />
                      <h3 className="font-semibold text-primary text-sm tracking-architectural uppercase">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-primary/60 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                  <Icon name="ArrowRightIcon" size={14} variant="outline" className="text-accent/0 group-hover:text-accent/60 flex-shrink-0 mt-1 transition-colors duration-300" />
                </div>
              </ScrollAnimation>
            )}
          </div>
        </div>
      </div>
    </section>);

}