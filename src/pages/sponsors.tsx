import * as React from 'react';

import HeroSectionSM from '@/components/hero-section-sm/HeroSectionSM';
import Layout from '@/components/layout/Layout';
import PageShape from '@/components/page-shape/PageShape';
import Seo from '@/components/Seo';
import SponsorsSection from '@/components/sponsors-section/SponsorsSection';

export default function SponsorsPage() {
  return (
    <Layout>
      <Seo templateTitle='Sponsors' />

      <main>
        <div className='sponsor-page'>
          <PageShape />
          <HeroSectionSM
            image='/images/header-bg/sponsor-bg.png'
            name='Sponsors'
            desc='About the Summit'
          />
          <div className='section-space-y'></div>
          <SponsorsSection />
        </div>
      </main>
    </Layout>
  );
}
