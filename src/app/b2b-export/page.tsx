import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import B2BExportClient from './B2BExportClient';

export const metadata = {
  title: 'B2B & Export — Liberty Metal Works',
  description: 'Liberty Metal Works serves international importers, distributors, wholesalers, architects and sourcing partners across four continents.',
};

export default function B2BExportPage() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <B2BExportClient />
      <Footer />
    </main>
  );
}
