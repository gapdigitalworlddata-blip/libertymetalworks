'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Manufacturing', href: '/manufacturing' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-secondary shadow-lg shadow-black/10 py-3'
            : 'bg-secondary py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-4">
          {/* Logo + Brand */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-16 h-16 flex-shrink-0 overflow-hidden">
              <AppImage
                src="/assets/images/WhatsApp_Image_2026-09-11_at_4.05.27_PM-removebg-preview-1789639667640.png"
                alt="Liberty Metal Works LMW Logo"
                width={64}
                height={64}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-sm font-semibold tracking-architectural text-primary uppercase leading-none">
                Liberty Metal Works
              </span>
              <span
                className="font-sans font-bold leading-tight mt-0.5 tracking-wide uppercase"
                style={{
                  fontSize: '9px',
                  color: '#123524',
                  letterSpacing: '0.06em',
                }}
              >
                ✦ A BRAND OF LIBERTY BRASS INTERNATIONAL ✦
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center justify-center flex-1 gap-0">
            {navLinks?.map((link) => (
              <Link
                key={link?.label}
                href={link?.href}
                className="nav-link-underline text-primary hover:text-accent font-semibold tracking-architectural uppercase transition-colors duration-200 flex-1 text-center whitespace-nowrap"
                style={{ fontSize: '10px' }}
              >
                {link?.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block flex-shrink-0">
            <Link href="/contact" className="btn-primary whitespace-nowrap" style={{ fontSize: '10px', padding: '8px 14px' }}>
              Request a Quote
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden text-primary p-2 -mr-2"
            aria-label="Open menu"
          >
            <Icon name="Bars3Icon" size={24} variant="outline" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-secondary mobile-menu-overlay ${
          mobileOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex flex-col h-full px-6 py-5">
          <div className="flex items-center justify-between mb-12">
            <Link href="/" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
              <div className="w-10 h-10 flex-shrink-0">
                <AppImage
                  src="/assets/images/WhatsApp_Image_2026-09-11_at_4.05.27_PM-removebg-preview-1789639667640.png"
                  alt="LMW Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-display text-base font-semibold tracking-wide text-primary uppercase">
                Liberty Metal Works
              </span>
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="text-primary p-2 -mr-2"
              aria-label="Close menu"
            >
              <Icon name="XMarkIcon" size={24} variant="outline" />
            </button>
          </div>

          <nav className="flex flex-col gap-2 flex-1">
            {navLinks?.map((link, i) => (
              <Link
                key={link?.label}
                href={link?.href}
                onClick={() => setMobileOpen(false)}
                className="font-display text-4xl font-semibold text-primary hover:text-accent transition-colors duration-200 py-2 uppercase tracking-tight"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {link?.label}
              </Link>
            ))}
          </nav>

          <div className="pb-8">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="btn-primary w-full justify-center text-center block"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}