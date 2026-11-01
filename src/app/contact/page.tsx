import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactClient from './ContactClient';

export const metadata = {
  title: 'Contact — Liberty Metal Works',
  description: 'Reach our export team to discuss product requirements, pricing, OEM development or B2B partnerships.',
};

export default function ContactPage() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <ContactClient />
      <Footer />
    </main>
  );
}
