import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import ScrollAnimation from '@/components/ScrollAnimation';
import Icon from '@/components/ui/AppIcon';

const categories = [
{
  id: '01',
  name: 'Door Grills',
  description: 'Ornate brass and iron grills for doors and windows',
  href: '/products',
  image: "https://images.unsplash.com/photo-1688649721280-bf00b7ba6997",
  alt: 'Ornate metal door grill architectural detail, dark industrial setting, moody shadows'
},
{
  id: '02',
  name: 'Door Bolts',
  description: 'Precision-engineered bolts in multiple finishes',
  href: '/products',
  image: "https://images.unsplash.com/photo-1578758510223-e96564f45388",
  alt: 'Brass door bolt precision hardware, dark atmospheric background, metallic sheen'
},
{
  id: '03',
  name: 'Hooks',
  description: 'Decorative coat, hat and utility hooks',
  href: '/products',
  image: "https://images.unsplash.com/photo-1683535610173-5fe4ad76770c",
  alt: 'Decorative brass hooks on wall, warm dim lighting, architectural interior'
},
{
  id: '04',
  name: 'Door Handles',
  description: 'Luxury lever and pull handles for premium interiors',
  href: '/products',
  image: "https://images.unsplash.com/photo-1524575986238-c1fb1c0b1ebb",
  alt: 'Luxury brass door handle premium interior hardware, dark moody setting'
}];


export default function ProductCategoriesSection() {
  return (
    <section className="bg-primary py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollAnimation animationClass="reveal-up" className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-6">
          <div>
            <span className="text-accent text-xs font-semibold tracking-architectural uppercase block mb-3">Product Range</span>
            <h2 className="font-display text-section-xl font-semibold text-primary-foreground">
              Our Collections
            </h2>
          </div>
          <Link href="/products" className="btn-outline-gold self-start sm:self-auto flex-shrink-0">
            View All Products
            <Icon name="ArrowRightIcon" size={14} variant="outline" />
          </Link>
        </ScrollAnimation>

        {/* Grid — 2×2 */}
        {/* BENTO AUDIT: 4 cards, 2×2 grid */}
        {/* Row 1: [col-1: Door Grills] [col-2: Door Bolts] */}
        {/* Row 2: [col-1: Hooks] [col-2: Door Handles] */}
        {/* Placed 4/4 ✓ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {categories?.map((cat, i) =>
          <ScrollAnimation key={cat?.id} animationClass="reveal-up" delay={i * 100}>
              <Link
              href={cat?.href}
              className="group relative block overflow-hidden product-card-hover gold-border-reveal"
              style={{ aspectRatio: '4/3' }}>
              
                {/* Image */}
                <div className="image-zoom-container absolute inset-0">
                  <AppImage
                  src={cat?.image}
                  alt={cat?.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw" />
                
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 category-overlay group-hover:category-overlay-hover transition-all duration-500 z-10" />

                {/* Content */}
                <div className="absolute inset-0 z-20 flex flex-col justify-between p-8">
                  <div className="flex items-start justify-between">
                    <span className="text-accent font-display text-4xl font-light opacity-70">{cat?.id}</span>
                    <div className="w-8 h-8 border border-primary-foreground/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                      <Icon name="ArrowUpRightIcon" size={14} variant="outline" className="text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display text-3xl font-semibold text-primary-foreground mb-2 uppercase tracking-wide">
                      {cat?.name}
                    </h3>
                    <p className="text-primary-foreground/60 text-xs mb-4 leading-relaxed">{cat?.description}</p>
                    <div className="flex items-center gap-2 text-accent text-xs font-semibold tracking-architectural uppercase">
                      Explore Collection
                      <Icon name="ArrowRightIcon" size={12} variant="outline" className="transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollAnimation>
          )}
        </div>
      </div>
    </section>);

}