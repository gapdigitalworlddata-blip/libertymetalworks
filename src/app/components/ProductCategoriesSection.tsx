import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import ScrollAnimation from '@/components/ScrollAnimation';
import Icon from '@/components/ui/AppIcon';

const categories = [
  {
    id: '01',
    name: 'Door Hardware',
    description: 'Premium handles and accessories for doors',
    href: '/products',
    image: 'https://images.pexels.com/photos/30992408/pexels-photo-30992408.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Close-up of a hand turning an ornate brass door handle, showcasing elegant craftsmanship',
  },
  {
    id: '02',
    name: 'Cabinet Knobs',
    description: 'Premium decorative knobs for cabinets',
    href: '/products',
    image: 'https://images.pexels.com/photos/38235555/pexels-photo-38235555.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Close-up of a vintage brass door knob on a wooden door with intricate floral design',
  },
  {
    id: '03',
    name: 'Door Hinges',
    description: 'Premium quality architectural hardware',
    href: '/products',
    image: 'https://images.pexels.com/photos/17503605/pexels-photo-17503605.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Detailed view of a rustic metal hinge on a weathered wooden door',
  },
  {
    id: '04',
    name: 'Door Knockers',
    description: 'Premium decorative brass hardware',
    href: '/products',
    image: 'https://images.pexels.com/photos/38597656/pexels-photo-38597656.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Traditional red door featuring an ornate brass lion knocker',
  },
];

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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {categories?.map((cat, i) => (
            <ScrollAnimation key={cat?.id} animationClass="reveal-up" delay={i * 100}>
              <Link
                href={cat?.href}
                className="group relative block overflow-hidden product-card-hover gold-border-reveal"
                style={{ aspectRatio: '4/3' }}
              >
                {/* Image */}
                <div className="image-zoom-container absolute inset-0">
                  <AppImage
                    src={cat?.image}
                    alt={cat?.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
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
          ))}
        </div>
      </div>
    </section>
  );
}
