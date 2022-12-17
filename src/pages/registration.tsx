import * as React from 'react';

import HeroSectionSM from '@/components/hero-section-sm/HeroSectionSM';
import Layout from '@/components/layout/Layout';
import PageShape from '@/components/page-shape/PageShape';
import RegistrationSection from '@/components/registration-section/RegistrationSection';
import Seo from '@/components/Seo';

export default function RegistrationPage() {
  return (
    <Layout>
      <Seo templateTitle='Registration' />

      <main>
        <div className='registration-page'>
          <PageShape />
          <HeroSectionSM
            image='/images/header-bg/registration-bg.png'
            name='REGISTRATION'
            desc='Summit online registration'
          />
          <RegistrationSection />
        </div>
      </main>
    </Layout>
  );
}
