import * as React from 'react';

import HeroSectionSM from '@/components/hero-section-sm/HeroSectionSM';
import Layout from '@/components/layout/Layout';
import NewsDetailSection4 from '@/components/news-detail-section/NewsDetailSection4';
import PageShape from '@/components/page-shape/PageShape';
import Seo from '@/components/Seo';

export default function NewDetailPage4() {
  return (
    <Layout>
      <Seo templateTitle='Trading under AfCFTA to progress on agreed 87.7% tariff lines' />

      <main>
        <div className='news-detail-page'>
          <PageShape />
          <HeroSectionSM
            image='/images/header-bg/news-bg-4.png'
            name='Trading under AfCFTA to progress on agreed 87.7% tariff lines'
          />
          <NewsDetailSection4 />
        </div>
      </main>
    </Layout>
  );
}
