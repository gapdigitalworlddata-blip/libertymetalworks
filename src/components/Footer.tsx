import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const footerLinks = [
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Manufacturing', href: '/manufacturing' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-dark-bg border-t border-accent/10 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Row */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-12 mb-12">
          {/* Left: Brand */}
          <div className="flex flex-col gap-5 max-w-xs">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 flex-shrink-0">
                <AppImage
                  src="/assets/images/WhatsApp_Image_2026-09-11_at_4.05.27_PM-1789540842856.jpeg"
                  alt="LMW Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-display text-sm font-semibold tracking-architectural text-primary-foreground uppercase">
                Liberty Metal Works
              </span>
            </Link>
            <p className="text-muted-foreground text-xs leading-relaxed">
              Premium architectural hardware crafted for the world's most demanding projects. ISO-certified. Export-ready.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 border border-accent/20 flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors"
                aria-label="Instagram"
              >
                <Icon name="GlobeAltIcon" size={14} variant="outline" />
              </a>
              <a
                href="mailto:Export@libertymetalworks.in"
                className="w-8 h-8 border border-accent/20 flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors"
                aria-label="Email"
              >
                <Icon name="EnvelopeIcon" size={14} variant="outline" />
              </a>
              <a
                href="tel:+917017203139"
                className="w-8 h-8 border border-accent/20 flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors"
                aria-label="Phone"
              >
                <Icon name="PhoneIcon" size={14} variant="outline" />
              </a>
            </div>
          </div>

          {/* Center: Links */}
          <div className="flex flex-col gap-3">
            <span className="text-accent text-xs font-semibold tracking-architectural uppercase mb-1">Navigation</span>
            {footerLinks?.map((link) => (
              <Link
                key={link?.label}
                href={link?.href}
                className="text-muted-foreground hover:text-primary-foreground text-sm font-medium transition-colors duration-200"
              >
                {link?.label}
              </Link>
            ))}
          </div>

          {/* Right: Contact */}
          <div className="flex flex-col gap-3 max-w-xs">
            <span className="text-accent text-xs font-semibold tracking-architectural uppercase mb-1">Contact</span>
            <div className="flex items-start gap-2">
              <Icon name="MapPinIcon" size={14} variant="outline" className="text-accent mt-0.5 flex-shrink-0" />
              <p className="text-muted-foreground text-sm leading-relaxed">
                LBI, ITI Road, Aligarh – 202001,<br />Uttar Pradesh, India
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="PhoneIcon" size={14} variant="outline" className="text-accent flex-shrink-0" />
              <a href="tel:+917017203139" className="text-muted-foreground hover:text-primary-foreground text-sm transition-colors">
                +91-7017203139
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="EnvelopeIcon" size={14} variant="outline" className="text-accent flex-shrink-0" />
              <a href="mailto:Export@libertymetalworks.in" className="text-muted-foreground hover:text-accent text-sm transition-colors break-all">
                Export@libertymetalworks.in
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="EnvelopeIcon" size={14} variant="outline" className="text-accent flex-shrink-0" />
              <a href="mailto:Varun@libertybrassintl.com" className="text-muted-foreground hover:text-accent text-sm transition-colors break-all">
                Varun@libertybrassintl.com
              </a>
            </div>
          </div>
        </div>

        <div className="divider-gold mb-6" />

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs">
            © 2026 Liberty Metal Works. A brand of Liberty Brass International.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-muted-foreground text-xs">Privacy Policy</span>
            <span className="text-muted-foreground text-xs">Terms of Use</span>
            <span className="text-accent text-xs font-semibold tracking-wide">ISO 9001:2015 Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}