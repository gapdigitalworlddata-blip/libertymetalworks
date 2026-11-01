import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductsClient from './ProductsClient';

export const metadata = {
  title: 'Products — Liberty Metal Works',
  description: 'Precision-crafted architectural hardware in brass, iron and alloy.',
};

export default function ProductsPage() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <ProductsClient />
      <Footer />
    </main>
  );
}
