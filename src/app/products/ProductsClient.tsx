'use client';
import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import ScrollAnimation from '@/components/ScrollAnimation';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

export interface Product {
  id: string;
  name: string;
  code: string;
  material: string;
  size: string;
  finish: string;
  description: string;
  image: string;
  alt: string;
  category: string;
}

export const allProducts: Product[] = [
  // Door Hardware
  { id: 'dh-001', name: 'Lever Handle Classic', code: 'LMW-DH-001', material: 'Solid Brass', size: '130mm lever', finish: 'Polished Lacquered Brass', description: 'Timeless lever handle in solid brass. Smooth action with square rose. Suitable for all door types.', image: 'https://images.pexels.com/photos/30992408/pexels-photo-30992408.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Polished brass lever door handle close-up luxury hardware', category: 'Door Hardware' },
  { id: 'dh-002', name: 'Art Nouveau Handle', code: 'LMW-DH-002', material: 'Cast Brass', size: '140mm lever', finish: 'Antique Gold', description: 'Art Nouveau-inspired organic form lever handle. A statement piece for premium interiors.', image: 'https://images.pexels.com/photos/31686397/pexels-photo-31686397.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Art nouveau antique gold door handle luxury architectural hardware', category: 'Door Hardware' },
  { id: 'dh-003', name: 'Crystal Doorknob Elite', code: 'LMW-DH-003', material: 'Crystal & Brass', size: '55mm knob', finish: 'Polished Brass', description: 'Crystal doorknob with ornate brass plate. Luxury elegance for premium interiors.', image: 'https://images.pexels.com/photos/16053387/pexels-photo-16053387.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Vintage crystal doorknob with ornate brass plate luxury', category: 'Door Hardware' },
  { id: 'dh-004', name: 'Crystal Doorknob Heritage', code: 'LMW-DH-004', material: 'Crystal & Brass', size: '55mm knob', finish: 'Antique Brass', description: 'Heritage-style crystal doorknob with ornate brass plate. Vintage charm for period interiors.', image: 'https://images.pexels.com/photos/16053390/pexels-photo-16053390.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Vintage crystal door knob with ornate brass plate', category: 'Door Hardware' },
  { id: 'dh-005', name: 'French Door Handle', code: 'LMW-DH-005', material: 'Solid Brass', size: '120mm lever', finish: 'Polished Gold', description: 'Elegant French door handle with gold finish. Perfect for premium residential and hospitality projects.', image: 'https://images.pexels.com/photos/9788371/pexels-photo-9788371.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'French doors with gold handles elegant interior', category: 'Door Hardware' },
  { id: 'dh-006', name: 'Crystal Doorknob Radiance', code: 'LMW-DH-006', material: 'Crystal & Brass', size: '55mm knob', finish: 'Polished Brass', description: 'Crystal doorknob with sunlight-reflecting brass plate. A radiant addition to any premium door.', image: 'https://images.pexels.com/photos/16053396/pexels-photo-16053396.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Crystal doorknob with sunlight reflections vintage interior', category: 'Door Hardware' },

  // Cabinet Knobs
  { id: 'ck-001', name: 'Floral Brass Knob', code: 'LMW-CK-001', material: 'Cast Brass', size: '40mm knob', finish: 'Antique Brass', description: 'Antique brass door knob with intricate floral design. Perfect for cabinets and period interiors.', image: 'https://images.pexels.com/photos/38235555/pexels-photo-38235555.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Vintage brass door knob with intricate floral design', category: 'Cabinet Knobs' },
  { id: 'ck-002', name: 'Leaf Pattern Knob', code: 'LMW-CK-002', material: 'Cast Metal', size: '40mm knob', finish: 'Antique Bronze', description: 'Antique metal door knob featuring an intricate leaf design in a floral pattern.', image: 'https://images.pexels.com/photos/38235553/pexels-photo-38235553.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Antique metal door knob with intricate leaf design', category: 'Cabinet Knobs' },
  { id: 'ck-003', name: 'Cabinet Brass Handle', code: 'LMW-CK-003', material: 'Solid Brass', size: '100mm', finish: 'Polished Brass', description: 'Elegant brass handles for wooden cabinets. Premium quality with smooth finish.', image: 'https://images.pexels.com/photos/35287566/pexels-photo-35287566.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Elegant brass door handles on a wooden cabinet', category: 'Cabinet Knobs' },
  { id: 'ck-004', name: 'Glass Cabinet Knob', code: 'LMW-CK-004', material: 'Glass & Brass', size: '40mm knob', finish: 'Antique Brass', description: 'Vintage glass door knob on ornate brass plate for cabinet applications.', image: 'https://images.pexels.com/photos/16053395/pexels-photo-16053395.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Vintage glass door knob on ornate brass plate', category: 'Cabinet Knobs' },
  { id: 'ck-005', name: 'Radiant Glass Knob', code: 'LMW-CK-005', material: 'Glass & Brass', size: '40mm knob', finish: 'Polished Brass', description: 'Ornate vintage glass door knob with sunlight streaming through. Cabinet and furniture use.', image: 'https://images.pexels.com/photos/16053388/pexels-photo-16053388.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Ornate vintage glass door knob with sunlight', category: 'Cabinet Knobs' },
  { id: 'ck-006', name: 'Heritage Glass Knob', code: 'LMW-CK-006', material: 'Glass & Brass', size: '40mm knob', finish: 'Antique Brass', description: 'Crystal door knob with ornate brass plate casting dramatic shadow. Heritage cabinet hardware.', image: 'https://images.pexels.com/photos/16053390/pexels-photo-16053390.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Crystal door knob with ornate brass plate casting shadow', category: 'Cabinet Knobs' },

  // Door Hinges
  { id: 'hg-001', name: 'Rustic Hinge Classic', code: 'LMW-HG-001', material: 'Forged Iron', size: '100mm', finish: 'Antique Black', description: 'Rustic metal hinge for weathered wooden doors. Hand-forged with traditional techniques.', image: 'https://images.pexels.com/photos/17503605/pexels-photo-17503605.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Rustic metal hinge on weathered wooden door', category: 'Door Hinges' },
  { id: 'hg-002', name: 'Ornate Church Hinge', code: 'LMW-HG-002', material: 'Cast Iron', size: '150mm', finish: 'Antique Bronze', description: 'Ornate hinge with detailed ironwork carvings. Designed for church and heritage door applications.', image: 'https://images.pexels.com/photos/34915486/pexels-photo-34915486.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Ornate wooden church doors with detailed ironwork', category: 'Door Hinges' },
  { id: 'hg-003', name: 'Decorative Iron Hinge', code: 'LMW-HG-003', material: 'Forged Iron', size: '120mm', finish: 'Antique Black', description: 'Decorative door hinge with intricate iron designs and circular handles for premium doors.', image: 'https://images.pexels.com/photos/13425281/pexels-photo-13425281.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Decorative wooden door with intricate iron designs', category: 'Door Hinges' },
  { id: 'hg-004', name: 'Heritage Bolt Hinge', code: 'LMW-HG-004', material: 'Forged Steel', size: '100mm', finish: 'Antique Iron', description: 'Corroded iron bolt lock hinge for weathered wooden doors. Period-accurate restoration.', image: 'https://images.pexels.com/photos/5502889/pexels-photo-5502889.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Corroded iron bolt lock on weathered wooden door', category: 'Door Hinges' },
  { id: 'hg-005', name: 'Aged Iron Hinge', code: 'LMW-HG-005', material: 'Cast Iron', size: '130mm', finish: 'Rust Patina', description: 'Aged rusty iron door hinge with steel lattice fence pattern. Architectural heritage style.', image: 'https://images.pexels.com/photos/7794457/pexels-photo-7794457.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Aged rusty iron door hinge with steel lattice', category: 'Door Hinges' },
  { id: 'hg-006', name: 'Vintage Knocker Hinge', code: 'LMW-HG-006', material: 'Cast Iron', size: '110mm', finish: 'Antique Blue', description: 'Weathered blue door with vintage knocker and hinge set. Heritage restoration hardware.', image: 'https://images.pexels.com/photos/37602341/pexels-photo-37602341.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Weathered blue door with vintage knocker and rusty lock', category: 'Door Hinges' },

  // Door Knockers
  { id: 'dk-001', name: 'Lion Head Knocker', code: 'LMW-DK-001', material: 'Cast Brass', size: '180mm', finish: 'Polished Brass', description: 'Intricately carved brass door knocker featuring a traditional lion design. Premium entrance statement.', image: 'https://images.pexels.com/photos/18672925/pexels-photo-18672925.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Brass door knocker with traditional lion design', category: 'Door Knockers' },
  { id: 'dk-002', name: 'Traditional Lion Knocker', code: 'LMW-DK-002', material: 'Cast Brass', size: '170mm', finish: 'Antique Brass', description: 'Traditional red door featuring an ornate brass lion knocker. Heritage and premium homes.', image: 'https://images.pexels.com/photos/38597656/pexels-photo-38597656.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Traditional red door with ornate brass lion knocker', category: 'Door Knockers' },
  { id: 'dk-003', name: 'Lion Head Symmetry', code: 'LMW-DK-003', material: 'Cast Brass', size: '160mm', finish: 'Antique Brass', description: 'Ornate brass lion head knockers on traditional wooden doors. Classical design for premium entrances.', image: 'https://images.pexels.com/photos/14501230/pexels-photo-14501230.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Ornate brass lion head knockers on wooden doors', category: 'Door Knockers' },
  { id: 'dk-004', name: 'Lion Face Knocker', code: 'LMW-DK-004', material: 'Cast Brass', size: '170mm', finish: 'Antique Bronze', description: 'Detailed lion face door knocker on traditional wooden door with decorative studs.', image: 'https://images.pexels.com/photos/30748640/pexels-photo-30748640.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Lion face door knocker on traditional wooden door', category: 'Door Knockers' },
  { id: 'dk-005', name: 'Antique Floral Knocker', code: 'LMW-DK-005', material: 'Cast Brass', size: '180mm', finish: 'Antique Gold', description: 'Ornate antique door featuring a lion head door knocker and intricate floral designs.', image: 'https://images.pexels.com/photos/8349094/pexels-photo-8349094.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Antique door with lion head knocker and floral designs', category: 'Door Knockers' },
  { id: 'dk-006', name: 'Rustic Lion Knocker', code: 'LMW-DK-006', material: 'Cast Brass', size: '160mm', finish: 'Antique Brass', description: 'Rustic wooden door with brass lion head knockers in symmetry. Heritage entrance hardware.', image: 'https://images.pexels.com/photos/40318388/pexels-photo-40318388.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Rustic wooden door with brass lion head knockers', category: 'Door Knockers' },
];

const categories = ['All', 'Door Hardware', 'Cabinet Knobs', 'Door Hinges', 'Door Knockers'];

export default function ProductsClient() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filtered = activeCategory === 'All' ? allProducts : allProducts.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary pt-36 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation animationClass="reveal-up">
            <span className="text-accent text-xs font-semibold tracking-architectural uppercase block mb-4">Our Range</span>
            <h1 className="font-display text-hero-xl font-semibold text-primary-foreground mb-4">
              Product Collections
            </h1>
            <p className="text-primary-foreground/60 text-sm max-w-xl leading-relaxed">
              Precision-crafted architectural hardware in brass, iron and alloy. Available in multiple finishes for global B2B supply.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Filter */}
      <section className="bg-secondary py-8 px-6 sticky top-[72px] z-30 border-b border-border">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-xs font-semibold tracking-architectural uppercase transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-primary text-primary-foreground'
                  : 'border border-border text-foreground hover:border-accent hover:text-accent'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Product Grid */}
      <section className="bg-background py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product, i) => (
              <ScrollAnimation key={product.id} animationClass="reveal-up" delay={i * 60}>
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="group text-left w-full product-card-hover gold-border-reveal overflow-hidden bg-card border border-border"
                >
                  <div className="aspect-video image-zoom-container overflow-hidden bg-secondary relative">
                    <AppImage
                      src={product.image}
                      alt={product.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-accent text-xs font-semibold tracking-wide block mb-1">{product.code}</span>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3">{product.name}</h3>
                    <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Icon name="CubeIcon" size={12} variant="outline" className="text-accent" />
                        {product.material}
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="SwatchIcon" size={12} variant="outline" className="text-accent" />
                        {product.finish}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 mt-4 text-accent text-xs font-semibold tracking-architectural uppercase">
                      View Details
                      <Icon name="ArrowRightIcon" size={12} variant="outline" className="transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </button>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-0 sm:p-6 product-modal-backdrop"
          style={{ backgroundColor: 'rgba(0,0,0,0.75)' }}
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-card w-full sm:max-w-3xl max-h-screen sm:max-h-[90vh] overflow-y-auto product-modal-panel"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <div className="aspect-video relative overflow-hidden">
                <AppImage
                  src={selectedProduct.image}
                  alt={selectedProduct.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-primary/80 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-primary transition-colors"
                aria-label="Close modal"
              >
                <Icon name="XMarkIcon" size={18} variant="outline" />
              </button>
            </div>
            <div className="p-8">
              <span className="text-accent text-xs font-semibold tracking-architectural uppercase block mb-2">{selectedProduct.code}</span>
              <h2 className="font-display text-3xl font-semibold text-foreground mb-4">{selectedProduct.name}</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{selectedProduct.description}</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {[
                  { label: 'Material', value: selectedProduct.material },
                  { label: 'Size', value: selectedProduct.size },
                  { label: 'Finish', value: selectedProduct.finish },
                  { label: 'Category', value: selectedProduct.category },
                ].map((detail) => (
                  <div key={detail.label} className="border border-border p-4">
                    <span className="text-accent text-xs font-semibold tracking-architectural uppercase block mb-1">{detail.label}</span>
                    <span className="text-foreground text-sm font-medium">{detail.value}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                onClick={() => setSelectedProduct(null)}
                className="btn-primary w-full justify-center"
              >
                Request B2B Quotation
                <Icon name="ArrowRightIcon" size={14} variant="outline" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}