import * as React from 'react';

import HeroSectionSM from '@/components/hero-section-sm/HeroSectionSM';
import Layout from '@/components/layout/Layout';
import NewsAll from '@/components/news-all/NewsAll';
import PageShape from '@/components/page-shape/PageShape';
import Seo from '@/components/Seo';

export default function NewsPage() {
  return (
    <Layout>
      <Seo templateTitle='News' />

      <main>
        <div className='news-page'>
          <PageShape />
          <HeroSectionSM
            image='/images/header-bg/news-bg.png'
            name='News'
            desc='News'
          />
          <NewsAll />
        </div>
      </main>
    </Layout>
  );
}
