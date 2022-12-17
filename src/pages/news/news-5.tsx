import * as React from 'react';

import HeroSectionSM from '@/components/hero-section-sm/HeroSectionSM';
import Layout from '@/components/layout/Layout';
import NewsDetailSection5 from '@/components/news-detail-section/NewsDetailSection5';
import PageShape from '@/components/page-shape/PageShape';
import Seo from '@/components/Seo';

export default function NewDetailPage5() {
  return (
    <Layout>
      <Seo templateTitle='Importance of regional and continental integration for Africa’s development' />

      <main>
        <div className='news-detail-page'>
          <PageShape />
          <HeroSectionSM
            image='/images/header-bg/news-bg-5.png'
            name='Importance of regional and continental integration for Africa’s development'
          />
          <NewsDetailSection5 />
        </div>
      </main>
    </Layout>
  );
}
