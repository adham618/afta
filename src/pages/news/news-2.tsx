import * as React from 'react';

import HeroSectionSM from '@/components/hero-section-sm/HeroSectionSM';
import Layout from '@/components/layout/Layout';
import NewsDetailSection3 from '@/components/news-detail-section/NewsDetailSection3';
import PageShape from '@/components/page-shape/PageShape';
import Seo from '@/components/Seo';

export default function NewDetailPage3() {
  return (
    <Layout>
      <Seo templateTitle='Kwahu summit launched – Ghana to host Africa’s prosperity dialogues' />

      <main>
        <div className='news-detail-page'>
          <PageShape />
          <HeroSectionSM
            image='/images/header-bg/news-bg-3.png'
            name='Kwahu summit launched – Ghana to host Africa’s prosperity dialogues'
          />
          <NewsDetailSection3 />
        </div>
      </main>
    </Layout>
  );
}
