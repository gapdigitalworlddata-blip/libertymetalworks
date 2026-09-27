import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppImage from '@/components/ui/AppImage';
import ScrollAnimation from '@/components/ScrollAnimation';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

const timeline = [
{
  year: '1956',
  title: 'Liberty Electricals Founded',
  desc: 'Mr. Shiv Shankar Varshney establishes Liberty Electricals in Aligarh — manufacturing electrical light fittings, conduit wiring accessories, and dust-proof, waterproof, and flame-proof lighting solutions for Central and State Government agencies.'
},
{
  year: '1965',
  title: 'Castle Hardwares Established',
  desc: 'Castle Hardwares is founded as a premium manufacturer of architectural and builder\'s hardware, scaffolding, and fencing components — operating from a 30,000 sq. ft. facility producing brass, aluminium, iron, steel, and zinc products.'
},
{
  year: '1986',
  title: 'Liberty Brass International Incorporated',
  desc: 'Liberty Brass International is formed exclusively for exports, initially supplying builder\'s hardware, artware, and decorative metal products to global markets.'
},
{
  year: '1989',
  title: 'Import Export License',
  desc: 'The group obtains its Import Export License, formalising its global trade operations and expanding reach to USA, UK, Europe, Canada, and the Middle East.'
},
{
  year: '2010',
  title: 'ISO 9001:2008 Certified',
  desc: 'Liberty Brass International achieves ISO 9001:2008 Quality Management System certification, marking a formal commitment to world-class manufacturing standards.'
},
{
  year: '2015',
  title: 'Los Angeles Marketing Office',
  desc: 'A marketing and customer-support office is opened in Los Angeles, USA — providing local support and issue resolution for North American customers.'
},
{
  year: '2020',
  title: 'ISO 9001:2015 & ISO 14001:2015',
  desc: 'Upgrades to ISO 9001:2015 Quality Management and ISO 14001:2015 Environmental Management certifications, reinforcing commitment to sustainable manufacturing.'
},
{
  year: '2023',
  title: 'Triple ISO Compliance',
  desc: 'Achieves ISO 9001:2015, ISO 14001:2015, and ISO 45001:2015 certifications simultaneously — covering quality, environment, and occupational health & safety.'
},
{
  year: '2024',
  title: 'Cologne Office Opens',
  desc: 'A marketing office is established in Cologne, Germany — extending local customer support across European markets and strengthening the group\'s global presence.'
}];


const certifications = [
{ code: 'ISO 9001:2015', name: 'Quality Management System', num: '305023011835Q' },
{ code: 'ISO 14001:2015', name: 'Environmental Management System', num: '305023011836E' },
{ code: 'ISO 45001:2015', name: 'Occupational Health & Safety', num: '' },
{ code: 'C-TPAT', name: 'Customs-Trade Partnership Against Terrorism', num: '' }];


const team = [
{
  name: 'Atul Gupta',
  qualification: 'MBA',
  designation: 'Director',
  image: "/assets/images/image-1790487366559.png",
  alt: 'Atul Gupta, Director at Liberty Brass International, professional portrait'
},
{
  name: 'Varun Gupta',
  qualification: 'MSc',
  designation: 'Managing Partner',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a79b8e72-1763295320816.png",
  alt: 'Varun Gupta, Managing Partner at Liberty Brass International, professional portrait'
},
{
  name: 'Shantanu Varshney',
  qualification: 'B.E.',
  designation: 'Independent Director',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a79b8e72-1763295320816.png",
  alt: 'Shantanu Varshney, Independent Director at Liberty Brass International, professional portrait'
},
{
  name: 'Viraat Batra',
  qualification: 'MBA',
  designation: 'Independent Director',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a79b8e72-1763295320816.png",
  alt: 'Viraat Batra, Independent Director at Liberty Brass International, professional portrait'
},
{
  name: 'Mohit Varshney',
  qualification: 'M.Tech',
  designation: 'Europe Operations',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a79b8e72-1763295320816.png",
  alt: 'Mohit Varshney, Europe Operations at Liberty Brass International, professional portrait'
},
{
  name: 'Juhi Varshney',
  qualification: 'MBA',
  designation: 'USA Operations',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_19dd54384-1763296787475.png",
  alt: 'Juhi Varshney, USA Operations at Liberty Brass International, professional portrait'
},
{
  name: 'Sanjay Varshney',
  qualification: 'MA',
  designation: 'Quality / Production Manager',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1988db2b9-1763291835437.png",
  alt: 'Sanjay Varshney, Quality and Production Manager at Liberty Brass International, professional portrait'
}];


const capabilities = [
{
  category: 'Press Shop & Casting',
  items: ['Diecasting & Forging', 'Semi-automatic Sand-casting', 'Stamping', 'High-tonnage Press Work'],
  image: '/assets/images/ChatGPT_Image_Sep_17__2026__03_50_09_PM-1789640425997.png',
  alt: 'Interior of a diecasting and forging facility with machinery and workbenches at Liberty Brass International'
},
{
  category: 'Sheet Metal Fabrication',
  items: ['CNC Laser Cutting', 'CNC Pipe Cutting & Routing', 'CNC Press-Brake Bending', 'MIG / TIG / Spot Welding'],
  image: '/assets/images/ChatGPT_Image_Sep_16__2026__03_53_34_PM-1789554820202.png',
  alt: 'Worker operating a CNC laser cutting machine in the Liberty Brass International sheet metal fabrication shop'
},
{
  category: 'Machining & Finishing',
  items: ['CNC Machining', 'Drilling & Tapping', 'Polishing & Electroplating', 'Powder Coating & Anodising'],
  image: '/assets/images/ChatGPT_Image_Sep_17__2026__03_44_11_PM-1789640065147.png',
  alt: 'Workers at machining stations with quality checklists and safety signs at Liberty Brass International factory floor'
}];


export default function AboutPage() {
  return (
    <main className="overflow-x-hidden">
      <Header />

      {/* Hero */}
      <section className="relative min-h-screen flex items-end bg-dark-bg overflow-hidden">
        <div className="absolute inset-0">
          <AppImage
            src="/assets/images/Untitled_design__18_-1789641176096.png"
            alt="Liberty Brass International precision metal manufacturing facility interior, bright industrial lights, clean workshop"
            fill
            priority
            className="object-cover opacity-40"
            sizes="100vw" />
          
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/60 to-dark-bg/20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 pt-40 w-full">
          <span className="text-accent text-xs font-semibold tracking-architectural uppercase block mb-4">Our Story</span>
          <h1 className="font-display text-hero-xl font-semibold text-primary-foreground mb-4">
            Three Generations.<br />
            <span className="italic font-light text-accent">One Standard.</span>
          </h1>
          <p className="text-primary-foreground/60 text-base max-w-xl leading-relaxed">
            From a small workshop in Aligarh in 1956 to a 100,000+ sq. ft. multi-facility operation spanning Aligarh and Rajkot — the Liberty story is one of relentless craftsmanship and global ambition.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="bg-background py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimation animationClass="reveal-left">
              <span className="text-accent text-xs font-semibold tracking-architectural uppercase block mb-4">Who We Are</span>
              <h2 className="font-display text-section-xl font-semibold text-foreground mb-6">
                Integrated OEM Manufacturing Partner
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                Liberty Brass International is a family-owned, third-generation integrated OEM manufacturing and export partner headquartered in Aligarh, India. Founded in 1956 by Mr. Shiv Shankar Varshney, the group has grown from a single electrical-accessories workshop to a 100,000+ sq. ft. multi-facility operation serving customers across the USA, UK, Europe, Canada, and the Middle East.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                We supply fireplace and heating appliances, HVAC, architectural and builder's hardware, furniture hardware, and kitchen, bathroom, and industrial fittings — working in cast iron, brass, aluminium, mild steel, stainless steel, and zinc.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                { val: '100,000+', lbl: 'Sq. Ft. Manufacturing' },
                { val: '68+', lbl: 'Years of Experience' },
                { val: '2', lbl: 'Indian Facilities (Aligarh & Rajkot)' },
                { val: '4', lbl: 'Global Offices' }].
                map((s) =>
                <div key={s.lbl} className="border border-border p-5">
                    <span className="font-display text-2xl font-semibold text-accent block mb-1">{s.val}</span>
                    <span className="text-muted-foreground text-xs leading-relaxed">{s.lbl}</span>
                  </div>
                )}
              </div>
            </ScrollAnimation>
            <ScrollAnimation animationClass="reveal-right">
              <div className="relative aspect-[4/3] overflow-hidden">
                <AppImage
                  src="/assets/images/ChatGPT_Image_Sep_17__2026__03_50_09_PM-1789640425997.png"
                  alt="Liberty Brass International manufacturing facility exterior and aerial view of the factory complex in Aligarh India"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw" />
                
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-secondary py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimation animationClass="reveal-up" className="mb-16">
            <span className="text-primary/60 text-xs font-semibold tracking-architectural uppercase block mb-3">Heritage</span>
            <h2 className="font-display text-section-xl font-semibold text-primary">Our Journey</h2>
          </ScrollAnimation>

          <div className="relative">
            <div className="absolute left-16 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-accent/20 to-transparent hidden sm:block" />
            <div className="flex flex-col gap-0">
              {timeline?.map((item, i) =>
              <ScrollAnimation key={item?.year} animationClass="reveal-up" delay={i * 80}>
                  <div className="flex gap-8 pb-10">
                    <div className="flex flex-col items-center gap-2 flex-shrink-0 w-16 hidden sm:flex">
                      <div className="w-3 h-3 rounded-full bg-accent border-2 border-secondary mt-1 relative z-10" />
                    </div>
                    <div className="flex-1 pb-4">
                      <span className="text-accent font-display text-2xl font-semibold block mb-2">{item?.year}</span>
                      <h3 className="font-semibold text-primary text-base tracking-wide mb-2">{item?.title}</h3>
                      <p className="text-primary/60 text-sm leading-relaxed">{item?.desc}</p>
                    </div>
                  </div>
                </ScrollAnimation>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities */}
      <section className="bg-background py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation animationClass="reveal-up" className="mb-14">
            <span className="text-accent text-xs font-semibold tracking-architectural uppercase block mb-3">Capabilities</span>
            <h2 className="font-display text-section-xl font-semibold text-foreground">Manufacturing Excellence</h2>
            <p className="text-muted-foreground text-sm mt-4 max-w-2xl leading-relaxed">
              Our integrated facilities in Aligarh and Rajkot cover every stage from raw material to export-ready finished goods — casting, fabrication, machining, finishing, and packaging under one roof.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {capabilities?.map((cap, i) =>
            <ScrollAnimation key={cap?.category} animationClass="reveal-up" delay={i * 100}>
                <div className="border border-border overflow-hidden group hover:border-accent/40 transition-colors duration-300">
                  <div className="relative aspect-video overflow-hidden">
                    <AppImage
                    src={cap?.image}
                    alt={cap?.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 33vw" />
                  
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                    <span className="absolute bottom-4 left-4 text-white font-semibold text-sm tracking-architectural uppercase">
                      {cap?.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <ul className="flex flex-col gap-2">
                      {cap?.items?.map((item) =>
                    <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                          {item}
                        </li>
                    )}
                    </ul>
                  </div>
                </div>
              </ScrollAnimation>
            )}
          </div>

          {/* Materials */}
          <ScrollAnimation animationClass="reveal-up" delay={200} className="mt-12">
            <div className="bg-secondary p-8">
              <span className="text-primary/60 text-xs font-semibold tracking-architectural uppercase block mb-5">Materials Expertise</span>
              <div className="flex flex-wrap gap-3">
                {['Cast Iron', 'Brass', 'Aluminium', 'Mild Steel', 'Stainless Steel', 'Zinc'].map((mat) =>
                <span key={mat} className="border border-accent/30 text-primary text-xs font-semibold tracking-wide uppercase px-4 py-2">
                    {mat}
                  </span>
                )}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Industries Served */}
      <section className="bg-primary py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation animationClass="reveal-up" className="mb-14 text-center">
            <span className="text-accent text-xs font-semibold tracking-architectural uppercase block mb-3">Industries</span>
            <h2 className="font-display text-section-xl font-semibold text-primary-foreground">Industries We Serve</h2>
          </ScrollAnimation>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
            { icon: 'FireIcon', label: 'Fireplace & Heating Appliances' },
            { icon: 'HomeModernIcon', label: 'HVAC Systems' },
            { icon: 'BuildingOfficeIcon', label: 'Architectural & Builder\'s Hardware' },
            { icon: 'HomeIcon', label: 'Furniture Hardware & Fittings' },
            { icon: 'WrenchScrewdriverIcon', label: 'Kitchen, Bathroom & Industrial' }].
            map((ind, i) =>
            <ScrollAnimation key={ind?.label} animationClass="reveal-up" delay={i * 80}>
                <div className="border border-accent/20 p-6 text-center hover:border-accent/50 transition-colors">
                  <Icon name={ind?.icon as 'FireIcon'} size={28} variant="outline" className="text-accent mx-auto mb-4" />
                  <span className="text-primary-foreground/70 text-xs leading-relaxed">{ind?.label}</span>
                </div>
              </ScrollAnimation>
            )}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-background py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation animationClass="reveal-up" className="mb-14 text-center">
            <span className="text-accent text-xs font-semibold tracking-architectural uppercase block mb-3">Certifications</span>
            <h2 className="font-display text-section-xl font-semibold text-foreground">Internationally Certified</h2>
            <p className="text-muted-foreground text-sm mt-4 max-w-xl mx-auto leading-relaxed">
              Independently assessed by QRO at our ITI Road, Aligarh facility — certified for manufacturing and export of builder's hardware, architectural hardware, artware, and handicraft products.
            </p>
          </ScrollAnimation>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications?.map((cert, i) =>
            <ScrollAnimation key={cert?.code} animationClass="reveal-up" delay={i * 80}>
                <div className="border border-border p-8 text-center hover:border-accent/50 transition-colors">
                  <Icon name="ShieldCheckIcon" size={28} variant="outline" className="text-accent mx-auto mb-4" />
                  <span className="text-accent font-semibold text-base block mb-2">{cert?.code}</span>
                  <span className="text-muted-foreground text-xs leading-relaxed block mb-2">{cert?.name}</span>
                  {cert?.num &&
                <span className="text-muted-foreground/50 text-xs font-mono">{cert?.num}</span>
                }
                </div>
              </ScrollAnimation>
            )}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-secondary py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation animationClass="reveal-up" className="mb-14 text-center">
            <span className="text-primary/60 text-xs font-semibold tracking-architectural uppercase block mb-3">Leadership</span>
            <h2 className="font-display text-section-xl font-semibold text-primary">Meet the Team</h2>
            <p className="text-primary/60 text-sm mt-4 max-w-xl mx-auto leading-relaxed">
              Our leadership team brings together decades of manufacturing expertise, international business acumen, and a shared commitment to quality and long-term partnerships.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {team?.map((member, i) =>
            <ScrollAnimation key={member?.name} animationClass="reveal-up" delay={i * 80}>
                <div className="flex flex-col items-center text-center group">
                  {/* Circular photo */}
                  <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-accent/30 group-hover:border-accent transition-colors duration-300 mb-5 flex-shrink-0">
                    <AppImage
                    src={member?.image}
                    alt={member?.alt}
                    fill
                    className="object-cover object-top"
                    sizes="144px" />
                  
                  </div>
                  <span className="font-semibold text-primary text-sm tracking-wide block mb-1">{member?.name}</span>
                  <span className="text-accent text-xs font-semibold tracking-architectural uppercase block mb-1">{member?.designation}</span>
                  <span className="text-primary/50 text-xs">{member?.qualification}</span>
                </div>
              </ScrollAnimation>
            )}
          </div>

          <ScrollAnimation animationClass="reveal-up" delay={300} className="mt-16 text-center">
            <p className="text-primary/60 text-sm leading-relaxed max-w-2xl mx-auto mb-8">
              Behind our leadership team is a dedicated group of designers, engineers, and craftsmen committed to delivering exceptional products and customer service across every market we serve.
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Get in Touch
              <Icon name="ArrowRightIcon" size={14} variant="outline" />
            </Link>
          </ScrollAnimation>
        </div>
      </section>

      {/* Global Presence */}
      <section className="bg-primary py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation animationClass="reveal-up" className="mb-14 text-center">
            <span className="text-accent text-xs font-semibold tracking-architectural uppercase block mb-3">Global Presence</span>
            <h2 className="font-display text-section-xl font-semibold text-primary-foreground">Where We Operate</h2>
          </ScrollAnimation>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
            { city: 'Aligarh, India', role: 'Manufacturing HQ', icon: 'BuildingOffice2Icon', detail: 'ITI Road, Aligarh, UP 202001' },
            { city: 'Rajkot, India', role: 'Manufacturing Facility', icon: 'BuildingOffice2Icon', detail: 'Secondary production plant' },
            { city: 'Los Angeles, USA', role: 'Marketing Office', icon: 'GlobeAmericasIcon', detail: 'North America customer support' },
            { city: 'Cologne, Germany', role: 'Marketing Office', icon: 'GlobeEuropeAfricaIcon', detail: 'Europe customer support (est. 2024)' }].
            map((loc, i) =>
            <ScrollAnimation key={loc?.city} animationClass="reveal-up" delay={i * 80}>
                <div className="border border-accent/20 p-7 hover:border-accent/50 transition-colors">
                  <Icon name={loc?.icon as 'BuildingOffice2Icon'} size={24} variant="outline" className="text-accent mb-4" />
                  <span className="text-primary-foreground font-semibold text-sm block mb-1">{loc?.city}</span>
                  <span className="text-accent text-xs font-semibold tracking-architectural uppercase block mb-3">{loc?.role}</span>
                  <span className="text-primary-foreground/50 text-xs leading-relaxed">{loc?.detail}</span>
                </div>
              </ScrollAnimation>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>);

}