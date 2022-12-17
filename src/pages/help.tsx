import React from 'react';

import ContactSection from '@/components/contact-section/ContactSection';
import FAQSection from '@/components/faq-section/FAQSection';
import HeroSectionSM from '@/components/hero-section-sm/HeroSectionSM';
import Layout from '@/components/layout/Layout';
import MapSection from '@/components/map-section/MapSection';
import PageShape from '@/components/page-shape/PageShape';
import Seo from '@/components/Seo';

export default function HelpPage() {
  return (
    <Layout>
      <Seo templateTitle='Help' />

      <main>
        <div className='help-page'>
          <PageShape />
          <HeroSectionSM image='/images/header-bg/help-bg.png' name='Help' />
          <FAQSection />
          <MapSection />
          <ContactSection />
        </div>
      </main>
    </Layout>
  );
}
