'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const heroSlides = [
  {
    src: '/assets/images/ChatGPT_Image_Sep_28__2026__10_21_14_AM-1790571085764.png',
    alt: 'Liberty Metal Works premium door handles and architectural hardware',
  },
  {
    src: '/assets/images/Untitled_design__23_-1790570924550.png',
    alt: 'Liberty Metal Works premium architectural hardware showcase',
  },
];

export default function HeroSection() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (!parallaxRef?.current) return;
      const scrollY = window.scrollY;
      parallaxRef.current.style.transform = `translateY(${scrollY * 0.35}px)`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => setCurrentSlide(index);

  return (
    <section className="relative w-full overflow-hidden bg-dark-bg">
      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes heroSlideRight {
          from { opacity: 0; transform: translateX(-30px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes heroScaleIn {
          from { opacity: 0; transform: scale(1.08); }
          to   { opacity: 1; transform: scale(1.1); }
        }
        @keyframes heroDividerGrow {
          from { opacity: 0; width: 0; }
          to   { opacity: 1; width: 3rem; }
        }
        @keyframes heroScrollBounce {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(6px); }
        }
        .hero-bg-anim {
          animation: heroScaleIn 1.6s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .hero-overlay-anim {
          animation: heroFadeIn 1.8s ease both;
        }
        .hero-eyebrow-anim {
          animation: heroSlideRight 0.9s cubic-bezier(0.22, 1, 0.36, 1) both;
          animation-delay: 0.5s;
          opacity: 0;
        }
        .hero-divider-anim {
          animation: heroDividerGrow 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
          animation-delay: 0.5s;
          opacity: 0;
        }
        .hero-sub-anim {
          animation: heroFadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) both;
          animation-delay: 0.85s;
          opacity: 0;
        }
        .hero-cta-anim {
          animation: heroFadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) both;
          animation-delay: 1.1s;
          opacity: 0;
        }
        .hero-cta-btn {
          transition: transform 0.25s ease, opacity 0.25s ease, box-shadow 0.25s ease;
        }
        .hero-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(18,53,36,0.25);
          opacity: 0.88;
        }
        .hero-slide {
          transition: opacity 0.8s ease-in-out;
        }
      `}</style>

      {/* ── MOBILE LAYOUT ── */}
      <div className="block md:hidden">
        <div className="relative w-full" style={{ aspectRatio: '3/4' }}>
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className="hero-slide absolute inset-0"
              style={{ opacity: currentSlide === index ? 1 : 0 }}
            >
              <AppImage
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}
                className="object-contain"
                sizes="100vw"
              />
            </div>
          ))}

          {/* Overlay text centered on image */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 z-10"
            style={{ background: 'rgba(255,255,255,0.55)' }}>
            <div className={`flex items-center gap-2 mb-4 ${mounted ? 'hero-eyebrow-anim' : 'opacity-0'}`}>
              <div className={`h-px ${mounted ? 'hero-divider-anim' : 'opacity-0'}`} style={{ backgroundColor: '#123524', width: '2.5rem' }} />
              <span className="text-xs font-black tracking-architectural uppercase text-center" style={{ color: '#123524' }}>
                Since 1956 · Aligarh, India · Global Export
              </span>
              <div className="h-px" style={{ backgroundColor: '#123524', width: '2.5rem' }} />
            </div>

            <p className={`text-sm font-bold text-center leading-relaxed mb-6 ${mounted ? 'hero-sub-anim' : 'opacity-0'}`} style={{ color: '#123524' }}>
              Premium Architectural Hardware for Global B2B Markets. ISO-certified precision manufacturing exported to USA, UK, Europe, and beyond.
            </p>

            <div className={`flex flex-wrap gap-3 justify-center ${mounted ? 'hero-cta-anim' : 'opacity-0'}`}>
              <Link href="/products" className="hero-cta-btn inline-flex items-center gap-2 px-5 py-2.5 text-xs font-black tracking-widest uppercase border-2"
                style={{ color: '#123524', borderColor: '#123524', backgroundColor: 'rgba(255,255,255,0.7)' }}>
                Explore Collection
                <Icon name="ArrowRightIcon" size={12} variant="outline" />
              </Link>
              <Link href="/contact" className="hero-cta-btn inline-flex items-center gap-2 px-5 py-2.5 text-xs font-black tracking-widest uppercase"
                style={{ backgroundColor: '#123524', color: '#ffffff' }}>
                Request a Quote
                <Icon name="ArrowUpRightIcon" size={12} variant="outline" />
              </Link>
            </div>
          </div>

          {/* Slide dots */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="w-2 h-2 rounded-full transition-all duration-300"
                style={{ backgroundColor: currentSlide === index ? '#123524' : 'rgba(18,53,36,0.4)' }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── DESKTOP LAYOUT ── */}
      <div className="hidden md:block relative min-h-screen">
        {/* Background Images with Parallax */}
        <div ref={parallaxRef} className={`absolute inset-0 scale-110 ${mounted ? 'hero-bg-anim' : ''}`}>
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className="hero-slide absolute inset-0"
              style={{ opacity: currentSlide === index ? 1 : 0 }}
            >
              <AppImage
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}
                className="object-contain"
                sizes="100vw"
              />
            </div>
          ))}
        </div>

        {/* Subtle overlay */}
        <div className={`absolute inset-0 z-10 ${mounted ? 'hero-overlay-anim' : ''}`} style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.18) 100%)' }} />

        {/* Content — left side */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 pb-20 pt-36 flex items-center justify-start min-h-screen">
          <div className="max-w-md text-left">
            {/* Eyebrow */}
            <div className={`flex items-center justify-start gap-3 mb-8 ${mounted ? 'hero-eyebrow-anim' : 'opacity-0'}`}>
              <div className={`h-px ${mounted ? 'hero-divider-anim' : 'opacity-0'}`} style={{ backgroundColor: '#123524', width: '3rem' }} />
              <span className="text-xs font-black tracking-architectural uppercase" style={{ color: '#123524' }}>
                Since 1956 · Aligarh, India · Global Export
              </span>
            </div>

            {/* Subheading */}
            <p className={`text-base font-bold leading-relaxed mb-10 ${mounted ? 'hero-sub-anim' : 'opacity-0'}`} style={{ color: '#123524' }}>
              Premium Architectural Hardware for Global B2B Markets. ISO-certified precision manufacturing exported to USA, UK, Europe, and beyond.
            </p>

            {/* CTAs */}
            <div className={`flex flex-wrap gap-4 justify-start ${mounted ? 'hero-cta-anim' : 'opacity-0'}`}>
              <Link href="/products" className="hero-cta-btn inline-flex items-center gap-2 px-6 py-3 text-sm font-black tracking-widest uppercase border-2"
                style={{ color: '#123524', borderColor: '#123524' }}>
                Explore Collection
                <Icon name="ArrowRightIcon" size={14} variant="outline" />
              </Link>
              <Link href="/contact" className="hero-cta-btn inline-flex items-center gap-2 px-6 py-3 text-sm font-black tracking-widest uppercase"
                style={{ backgroundColor: '#123524', color: '#ffffff' }}>
                Request a Quote
                <Icon name="ArrowUpRightIcon" size={14} variant="outline" />
              </Link>
            </div>
          </div>
        </div>

        {/* Slide dots */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="w-2.5 h-2.5 rounded-full transition-all duration-300"
              style={{ backgroundColor: currentSlide === index ? '#123524' : 'rgba(18,53,36,0.4)' }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}