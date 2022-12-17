import * as React from 'react';

import HeroSectionSM from '@/components/hero-section-sm/HeroSectionSM';
import Layout from '@/components/layout/Layout';
import NewsDetailSection from '@/components/news-detail-section/NewsDetailSection';
import PageShape from '@/components/page-shape/PageShape';
import Seo from '@/components/Seo';

export default function NewsDetailPage() {
  return (
    <Layout>
      <Seo templateTitle='Benefits of African Economic Integration' />

      <main>
        <div className='news-detail-page'>
          <PageShape />
          <HeroSectionSM
            image='/images/header-bg/green.png'
            name='Benefits of African Economic Integration'
          />
          <NewsDetailSection />
        </div>
      </main>
    </Layout>
  );
}
