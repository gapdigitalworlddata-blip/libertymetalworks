import React from 'react';
import AppImage from '@/components/ui/AppImage';
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Text + Certs */}
          <div className="flex flex-col gap-8">
            <ScrollAnimation animationClass="reveal-left">
              <p className="text-muted-foreground text-sm leading-relaxed">
                Every Liberty Metal Works product passes through a rigorous multi-stage quality control process. From incoming material inspection to final dimensional verification, our ISO-certified processes ensure consistent excellence across every batch shipped worldwide.
              </p>
            </ScrollAnimation>

            {/* Certifications */}
            <ScrollAnimation animationClass="reveal-left" delay={100}>
              <div className="grid grid-cols-2 gap-3">
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

          {/* Right: Image Grid */}
          {/* BENTO AUDIT: 3 images, mixed grid */}
          {/* Row 1-2 col-1: large image rs-2 | Row 1 col-2: image | Row 2 col-2: image */}
          {/* Placed 3/3 ✓ */}
          <div className="grid grid-cols-2 lg:grid-rows-2 gap-4" style={{ minHeight: '480px' }}>
            <ScrollAnimation animationClass="reveal-right" className="lg:row-span-2 image-zoom-container overflow-hidden">
              <AppImage
                src={qualityImages[0].src}
                alt={qualityImages[0].alt}
                width={400}
                height={480}
                className="w-full h-full object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw" />
              
            </ScrollAnimation>
            <ScrollAnimation animationClass="reveal-right" delay={100} className="image-zoom-container overflow-hidden">
              <AppImage
                src={qualityImages[1].src}
                alt={qualityImages[1].alt}
                width={400}
                height={232}
                className="w-full h-full object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw" />
              
            </ScrollAnimation>
            <ScrollAnimation animationClass="reveal-right" delay={200} className="image-zoom-container overflow-hidden">
              <AppImage
                src={qualityImages[2].src}
                alt={qualityImages[2].alt}
                width={400}
                height={232}
                className="w-full h-full object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw" />
              
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>);

}