import React from 'react';

import ScrollAnimation from '@/components/ScrollAnimation';
import Icon from '@/components/ui/AppIcon';

const certifications = [
{ code: 'ISO 9001:2015', name: 'Quality Management' },
{ code: 'ISO 14001:2015', name: 'Environmental Management' },
{ code: 'ISO 45001:2018', name: 'Occupational Health & Safety' },
{ code: 'C-TPAT', name: 'Customs Trade Partnership' }];


const qualityImages = [
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_43bf45f2c-1789478671760.png",
  alt: 'Polished brass metal surface texture close-up macro photography, bright well-lit studio',
  span: 'lg:row-span-2'
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_15f52c6f0-1779044868607.png",
  alt: 'Metal machining precision manufacturing process, bright industrial workshop',
  span: ''
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_122d56994-1771885570568.png",
  alt: 'Brass hardware fitting detail close-up, warm well-lit background',
  span: ''
}];


export default function QualitySection() {
  return (
    <section className="bg-background py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollAnimation animationClass="reveal-up" className="mb-16">
          <span className="text-accent text-xs font-semibold tracking-architectural uppercase block mb-3">Quality Standards</span>
          <h2 className="font-display text-section-xl font-semibold text-foreground max-w-3xl">
            Precision You Can See.<br />
            <span className="italic font-light text-accent">Quality You Can Feel.</span>
          </h2>
        </ScrollAnimation>

        <div className="flex flex-col gap-8">
          <ScrollAnimation animationClass="reveal-left">
            <p className="text-muted-foreground text-sm leading-relaxed max-w-3xl">
              Every Liberty Metal Works product passes through a rigorous multi-stage quality control process. From incoming material inspection to final dimensional verification, our ISO-certified processes ensure consistent excellence across every batch shipped worldwide.
            </p>
          </ScrollAnimation>

          {/* Certifications */}
          <ScrollAnimation animationClass="reveal-left" delay={100}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {certifications.map((cert, i) =>
              <div
                key={cert.code}
                className="certification-badge p-5 flex flex-col gap-2"
                style={{ transitionDelay: `${i * 60}ms` }}>
                
                  <span className="text-accent font-semibold text-sm tracking-wide">{cert.code}</span>
                  <span className="text-muted-foreground text-xs leading-relaxed">{cert.name}</span>
                </div>
              )}
            </div>
          </ScrollAnimation>

          <ScrollAnimation animationClass="reveal-left" delay={200}>
            <div className="border-l-2 border-accent pl-5">
              <p className="text-foreground/80 text-sm leading-relaxed italic font-display text-lg">
                "Highest Export Performance Award recipient from the Ministry of Commerce, Government of India."
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animationClass="reveal-left" delay={250}>
            <div className="flex flex-wrap gap-6">
              {[
              { icon: 'ShieldCheckIcon', label: 'Multi-stage Inspection' },
              { icon: 'BeakerIcon', label: 'Material Testing' },
              { icon: 'MagnifyingGlassIcon', label: 'Dimensional Verification' }].
              map((item) =>
              <div key={item.label} className="flex items-center gap-2">
                  <Icon name={item.icon as 'ShieldCheckIcon'} size={16} variant="outline" className="text-accent" />
                  <span className="text-foreground text-xs font-semibold tracking-wide uppercase">{item.label}</span>
                </div>
              )}
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>);

}