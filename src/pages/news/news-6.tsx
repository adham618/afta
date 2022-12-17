import * as React from 'react';

import HeroSectionSM from '@/components/hero-section-sm/HeroSectionSM';
import Layout from '@/components/layout/Layout';
import NewsDetailSection6 from '@/components/news-detail-section/NewsDetailSection6';
import PageShape from '@/components/page-shape/PageShape';
import Seo from '@/components/Seo';

export default function NewDetailPage6() {
  return (
    <Layout>
      <Seo templateTitle='AAAM, AfCFTA brainstorm on how to fast-track devt of African automobile sector' />

      <main>
        <div className='news-detail-page'>
          <PageShape />
          <HeroSectionSM
            image='/images/header-bg/news-bg-6.png'
            name='AAAM, AfCFTA brainstorm on how to fast-track devt of African automobile sector'
          />
          <NewsDetailSection6 />
        </div>
      </main>
    </Layout>
  );
}
