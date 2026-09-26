'use client';
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppImage from '@/components/ui/AppImage';
import ScrollAnimation from '@/components/ScrollAnimation';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

interface Product {
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

const allProducts: Product[] = [
// Door Grills
{ id: 'dg-001', name: 'Colonial Arch Grill', code: 'LMW-DG-001', material: 'Cast Brass', size: '300×600mm', finish: 'Polished Lacquered Brass', description: 'Ornate colonial-style arch grill with intricate lattice pattern. Suitable for premium residential and hospitality projects.', image: "https://images.unsplash.com/photo-1706611520500-51e65ea488ff", alt: 'Ornate colonial arch door grill architectural detail, warm interior lighting', category: 'Door Grills' },
{ id: 'dg-002', name: 'Georgian Panel Grill', code: 'LMW-DG-002', material: 'Forged Iron', size: '400×800mm', finish: 'Antique Black', description: 'Georgian-inspired flat panel grill with geometric detailing for contemporary architectural applications.', image: "https://images.unsplash.com/photo-1591187883094-9862ad89e3f4", alt: 'Georgian panel grill architectural door hardware, dark atmospheric', category: 'Door Grills' },
{ id: 'dg-003', name: 'Art Deco Ventilation Grill', code: 'LMW-DG-003', material: 'Cast Brass', size: '250×500mm', finish: 'Satin Brass', description: 'Art Deco geometric ventilation grill with fan motif. Ideal for interior doors and wall applications.', image: "https://images.unsplash.com/photo-1513827837868-731e05585a3e", alt: 'Art deco ventilation grill metal hardware, bright industrial setting', category: 'Door Grills' },
{ id: 'dg-004', name: 'Floral Brass Grill', code: 'LMW-DG-004', material: 'Cast Brass', size: '200×400mm', finish: 'Polished Lacquered Brass', description: 'Intricate floral pattern grill, hand-finished to museum quality. For high-end residential applications.', image: "https://img.rocket.new/generatedImages/rocket_gen_img_12dbe1922-1772154718029.png", alt: 'Polished brass floral pattern grill hardware macro close-up, bright studio', category: 'Door Grills' },
{ id: 'dg-005', name: 'Industrial Mesh Grill', code: 'LMW-DG-005', material: 'Fabricated Steel', size: '600×1200mm', finish: 'Powder Coated Black', description: 'Heavy-duty industrial mesh grill for commercial and industrial architectural applications.', image: "https://images.unsplash.com/photo-1462333600803-e29597ef638b", alt: 'Industrial steel mesh grill architectural hardware dark moody', category: 'Door Grills' },
{ id: 'dg-006', name: 'Heritage Wrought Grill', code: 'LMW-DG-006', material: 'Wrought Iron', size: '350×700mm', finish: 'Antique Bronze', description: 'Hand-forged heritage wrought iron grill replicating period architectural details.', image: "https://images.unsplash.com/photo-1730015261174-e3c111e37cd9", alt: 'Heritage wrought iron door grill architectural hardware warm lighting', category: 'Door Grills' },
// Door Bolts
{ id: 'db-001', name: 'Tower Bolt Classic', code: 'LMW-DB-001', material: 'Solid Brass', size: '150mm', finish: 'Polished Lacquered Brass', description: 'Classic tower bolt in solid brass with smooth action and full-length backplate.', image: "https://img.rocket.new/generatedImages/rocket_gen_img_122d56994-1771885570568.png", alt: 'Polished brass tower bolt hardware close-up, bright studio lighting', category: 'Door Bolts' },
{ id: 'db-002', name: 'Flush Bolt Set', code: 'LMW-DB-002', material: 'Solid Brass', size: '200mm', finish: 'Satin Chrome', description: 'Concealed flush bolt for double doors. Minimal profile, maximum security.', image: "https://img.rocket.new/generatedImages/rocket_gen_img_408b1dcb1-1789541452814.png", alt: 'Chrome flush bolt door hardware architectural detail', category: 'Door Bolts' },
{ id: 'db-003', name: 'Barrel Bolt Heavy', code: 'LMW-DB-003', material: 'Forged Brass', size: '100mm', finish: 'Antique Brass', description: 'Heavy-duty barrel bolt with antique finish for period-accurate restoration projects.', image: "https://img.rocket.new/generatedImages/rocket_gen_img_122d56994-1771885570568.png", alt: 'Antique brass barrel bolt hardware close-up warm lighting', category: 'Door Bolts' },
{ id: 'db-004', name: 'Slide Latch Premium', code: 'LMW-DB-004', material: 'Cast Brass', size: '75mm', finish: 'Polished Gold', description: 'Premium slide latch with polished gold finish for luxury interior doors.', image: "https://images.unsplash.com/photo-1732532399621-afd080eb0b52", alt: 'Gold slide latch door hardware premium close-up bright studio', category: 'Door Bolts' },
{ id: 'db-005', name: 'Security Bolt XL', code: 'LMW-DB-005', material: 'Forged Steel', size: '300mm', finish: 'Powder Coated Black', description: 'Heavy-duty security bolt for external doors. Anti-pick, anti-drill construction.', image: "https://images.unsplash.com/photo-1686464394907-9995c7e8f877", alt: 'Security door bolt heavy duty hardware dark background', category: 'Door Bolts' },
{ id: 'db-006', name: 'Monkey Tail Bolt', code: 'LMW-DB-006', material: 'Cast Iron', size: '450mm', finish: 'Antique Black', description: 'Traditional monkey tail bolt for period gates and doors. Forged with decorative scroll handle.', image: "https://img.rocket.new/generatedImages/rocket_gen_img_449b429ec-1789541454167.png", alt: 'Antique cast iron monkey tail bolt architectural hardware', category: 'Door Bolts' },
// Hooks
{ id: 'hk-001', name: 'Victorian Coat Hook', code: 'LMW-HK-001', material: 'Cast Brass', size: '120mm projection', finish: 'Polished Lacquered Brass', description: 'Victorian-style decorative coat hook with ornate backplate. For premium residential and hospitality interiors.', image: "https://images.unsplash.com/photo-1722942717934-578388d3a174", alt: 'Victorian brass coat hooks on wall interior warm lighting', category: 'Hooks' },
{ id: 'hk-002', name: 'Hat & Coat Double Hook', code: 'LMW-HK-002', material: 'Solid Brass', size: '150mm projection', finish: 'Satin Brass', description: 'Dual-arm hat and coat hook with substantial backplate for entrance halls.', image: "https://img.rocket.new/generatedImages/rocket_gen_img_4da7bd0bd-1789541454175.png", alt: 'Satin brass double coat hook interior hardware architectural', category: 'Hooks' },
{ id: 'hk-003', name: 'Minimalist Hook', code: 'LMW-HK-003', material: 'Forged Brass', size: '80mm projection', finish: 'Brushed Brass', description: 'Clean-lined minimalist hook for contemporary architectural interiors.', image: "https://img.rocket.new/generatedImages/rocket_gen_img_4a0fc3d84-1789541454165.png", alt: 'Brushed brass minimalist hook contemporary interior hardware', category: 'Hooks' },
{ id: 'hk-004', name: 'Bathroom Robe Hook', code: 'LMW-HK-004', material: 'Cast Brass', size: '60mm projection', finish: 'Polished Chrome', description: 'Premium robe hook for luxury bathrooms and spa environments.', image: "https://images.unsplash.com/photo-1571562178225-3c5e1243d2bf", alt: 'Chrome robe hook bathroom hardware close-up bright studio', category: 'Hooks' },
{ id: 'hk-005', name: 'Industrial Hook Set', code: 'LMW-HK-005', material: 'Fabricated Steel', size: '100mm projection', finish: 'Powder Coated Black', description: 'Industrial-style hook in matte black for contemporary commercial interiors.', image: "https://images.unsplash.com/photo-1639492099617-35844e70abb5", alt: 'Black industrial hook set wall mounted hardware dark background', category: 'Hooks' },
{ id: 'hk-006', name: 'Picture Rail Hook', code: 'LMW-HK-006', material: 'Cast Brass', size: '40mm projection', finish: 'Antique Brass', description: 'Traditional picture rail hook for period interiors. Compatible with standard rail profiles.', image: "https://img.rocket.new/generatedImages/rocket_gen_img_449db3124-1789541453690.png", alt: 'Antique brass picture rail hook hardware interior architectural', category: 'Hooks' },
// Door Handles
{ id: 'dh-001', name: 'Lever Handle Classic', code: 'LMW-DH-001', material: 'Solid Brass', size: '130mm lever', finish: 'Polished Lacquered Brass', description: 'Timeless lever handle in solid brass. Smooth action with square rose. Suitable for all door types.', image: "https://images.unsplash.com/photo-1541617392762-9bd12653bd12", alt: 'Polished brass lever door handle close-up luxury hardware', category: 'Door Handles' },
{ id: 'dh-002', name: 'Art Nouveau Handle', code: 'LMW-DH-002', material: 'Cast Brass', size: '140mm lever', finish: 'Antique Gold', description: 'Art Nouveau-inspired organic form lever handle. A statement piece for premium interiors.', image: "https://images.unsplash.com/photo-1671816960864-cece063ec680", alt: 'Art nouveau antique gold door handle luxury architectural hardware', category: 'Door Handles' },
{ id: 'dh-003', name: 'Contemporary Pull Handle', code: 'LMW-DH-003', material: 'Forged Brass', size: '300mm pull', finish: 'Brushed Satin', description: 'Architectural pull handle for heavy doors. Minimalist profile with substantial feel.', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1df8b54e9-1783281363006.png", alt: 'Brushed satin pull handle architectural door hardware modern', category: 'Door Handles' },
{ id: 'dh-004', name: 'D-Pull Barn Handle', code: 'LMW-DH-004', material: 'Cast Brass', size: '200mm pull', finish: 'Antique Brass', description: 'D-pull handle for barn and sliding doors. Rustic-industrial aesthetic with premium construction.', image: "https://images.unsplash.com/photo-1541617392762-9bd12653bd12", alt: 'Antique brass D-pull barn door handle hardware close-up warm', category: 'Door Handles' },
{ id: 'dh-005', name: 'Knob Handle Oval', code: 'LMW-DH-005', material: 'Solid Brass', size: '55mm knob', finish: 'Polished Chrome', description: 'Oval door knob in polished chrome. Classic form, smooth action, durable construction.', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1950264cf-1767121745841.png", alt: 'Chrome oval door knob handle hardware bright studio lighting', category: 'Door Handles' },
{ id: 'dh-006', name: 'Mortise Handle Set', code: 'LMW-DH-006', material: 'Cast Brass', size: '160mm lever', finish: 'Satin Nickel', description: 'Complete mortise handle set with escutcheon plates. For high-security architectural applications.', image: "https://img.rocket.new/generatedImages/rocket_gen_img_4a94532db-1789541454239.png", alt: 'Satin nickel mortise handle set architectural hardware professional', category: 'Door Handles' }];


const categories = ['All', 'Door Grills', 'Door Bolts', 'Hooks', 'Door Handles'];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filtered = activeCategory === 'All' ? allProducts : allProducts.filter((p) => p.category === activeCategory);

  return (
    <main className="overflow-x-hidden">
      <Header />

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
          {categories.map((cat) =>
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 text-xs font-semibold tracking-architectural uppercase transition-all duration-300 ${
            activeCategory === cat ?
            'bg-primary text-primary-foreground' :
            'border border-border text-foreground hover:border-accent hover:text-accent'}`
            }>
            
              {cat}
            </button>
          )}
        </div>
      </section>

      {/* Product Grid */}
      <section className="bg-background py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product, i) =>
            <ScrollAnimation key={product.id} animationClass="reveal-up" delay={i * 60}>
                <button
                onClick={() => setSelectedProduct(product)}
                className="group text-left w-full product-card-hover gold-border-reveal overflow-hidden bg-card border border-border">
                
                  <div className="aspect-video image-zoom-container overflow-hidden bg-secondary relative">
                    <AppImage
                    src={product.image}
                    alt={product.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                  
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
            )}
          </div>
        </div>
      </section>

      {/* Product Modal */}
      {selectedProduct &&
      <div
        className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-0 sm:p-6 product-modal-backdrop"
        style={{ backgroundColor: 'rgba(0,0,0,0.75)' }}
        onClick={() => setSelectedProduct(null)}>
        
          <div
          className="bg-card w-full sm:max-w-3xl max-h-screen sm:max-h-[90vh] overflow-y-auto product-modal-panel"
          onClick={(e) => e.stopPropagation()}>
          
            <div className="relative">
              <div className="aspect-video relative overflow-hidden">
                <AppImage
                src={selectedProduct.image}
                alt={selectedProduct.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw" />
              
              </div>
              <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-primary/80 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-primary transition-colors"
              aria-label="Close modal">
              
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
              { label: 'Category', value: selectedProduct.category }].
              map((detail) =>
              <div key={detail.label} className="border border-border p-4">
                    <span className="text-accent text-xs font-semibold tracking-architectural uppercase block mb-1">{detail.label}</span>
                    <span className="text-foreground text-sm font-medium">{detail.value}</span>
                  </div>
              )}
              </div>
              <Link
              href="/contact"
              onClick={() => setSelectedProduct(null)}
              className="btn-primary w-full justify-center">
              
                Request B2B Quotation
                <Icon name="ArrowRightIcon" size={14} variant="outline" />
              </Link>
            </div>
          </div>
        </div>
      }

      <Footer />
    </main>);

}