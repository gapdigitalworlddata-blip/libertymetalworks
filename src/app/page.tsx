import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import BrandIntroSection from '@/app/components/BrandIntroSection';
import ProductCategoriesSection from '@/app/components/ProductCategoriesSection';
import ManufacturingProcessSection from '@/app/components/ManufacturingProcessSection';
import QualitySection from '@/app/components/QualitySection';
import CTASection from '@/app/components/CTASection';
import ContactFormSection from '@/app/components/ContactFormSection';

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <HeroSection />
      <BrandIntroSection />
      <ProductCategoriesSection />
      <ManufacturingProcessSection />
      <QualitySection />
      <CTASection />
      <ContactFormSection />
      <Footer />
    </main>
  );
}