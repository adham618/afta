import * as React from 'react';

import HeroSectionSM from '@/components/hero-section-sm/HeroSectionSM';
import Layout from '@/components/layout/Layout';
import NewsDetailSection2 from '@/components/news-detail-section/NewsDetailSection2';
import PageShape from '@/components/page-shape/PageShape';
import Seo from '@/components/Seo';

export default function NewsDetail2Page() {
  return (
    <Layout>
      <Seo templateTitle='“It’s time to move from mere negotiations to trading among ourselves” H.E. Joao Baptista Domingos Quiosa,' />

      <main>
        <div className='news-detail-page'>
          <PageShape />
          <HeroSectionSM
            image='/images/header-bg/news-bg-2.png'
            name='“It’s time to move from mere negotiations to trading among ourselves” H.E. Joao Baptista Domingos Quiosa,'
          />
          <NewsDetailSection2 />
        </div>
      </main>
    </Layout>
  );
}
