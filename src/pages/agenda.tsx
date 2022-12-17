import React from 'react';

import AgendaSection from '@/components/agenda-section/AgendaSection';
import HeroSectionSM from '@/components/hero-section-sm/HeroSectionSM';
import Layout from '@/components/layout/Layout';
import PageShape from '@/components/page-shape/PageShape';
import Seo from '@/components/Seo';

export default function AgendaPage() {
  return (
    <Layout>
      <Seo templateTitle='Agenda' />

      <main>
        <div className='agenda-page'>
          <PageShape />
          <HeroSectionSM
            image='/images/header-bg/agenda-bg.png'
            name='The AU Agenda 2063'
            desc='The AU Agenda 2063'
          />
          <AgendaSection />
        </div>
      </main>
    </Layout>
  );
}
