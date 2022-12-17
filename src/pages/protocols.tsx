import * as React from 'react';

import HeroSectionSM from '@/components/hero-section-sm/HeroSectionSM';
import Layout from '@/components/layout/Layout';
import ProtocolsSection from '@/components/protocols-section/ProtocolsSection';
import Seo from '@/components/Seo';

export default function ProtocolsPage() {
  return (
    <Layout>
      <Seo templateTitle='Protocols' />

      <main>
        <div className='protocols-page'>
          <HeroSectionSM
            image='/images/header-bg/protocols-bg.png'
            name='Protocols'
            desc='Event guide'
          />
          <ProtocolsSection />
        </div>
      </main>
    </Layout>
  );
}
