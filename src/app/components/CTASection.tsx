import React from 'react';
import Link from 'next/link';
import ScrollAnimation from '@/components/ScrollAnimation';
import Icon from '@/components/ui/AppIcon';

export default function CTASection() {
  return (
    <section className="bg-primary grain-overlay py-28 px-6 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-accent/5 pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full border border-accent/5 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <ScrollAnimation animationClass="reveal-up">
          <div className="divider-gold w-16 mx-auto mb-8" />
          <h2 className="font-display text-section-xl font-semibold text-primary-foreground mb-6 leading-tight">
            Let's Build Something<br />
            <span className="italic font-light text-accent">That Lasts.</span>
          </h2>
          <p className="text-white text-sm max-w-xl mx-auto leading-relaxed mb-10">
            Whether you're an importer, distributor, architect or sourcing partner — we're ready to discuss how Liberty Metal Works can serve your requirements.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-outline-gold">
              Start a B2B Enquiry
              <Icon name="ArrowRightIcon" size={14} variant="outline" />
            </Link>
            <Link href="/contact" className="btn-outline-white">
              Request Product Catalogue
              <Icon name="DocumentArrowDownIcon" size={14} variant="outline" />
            </Link>
          </div>
          <div className="divider-gold w-16 mx-auto mt-10" />
        </ScrollAnimation>
      </div>
    </section>
  );
}