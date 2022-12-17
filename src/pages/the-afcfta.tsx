import * as React from 'react';

import CardTitleText from '@/components/card-title-text/CardTitleText';
import HeroSectionSM from '@/components/hero-section-sm/HeroSectionSM';
import PageShape from '@/components/page-shape/PageShape';

const desc_list = [
  'The African Continental Free Trade Area (AfCFTA) is the world’s largest free trade area bringing together the 55 countries of the African Union (AU) and eight (8) Regional Economic Communities (RECs) to create a single market for the continent. The aim is to enable the free flow of goods and services across the continent and boost the trading position of Africa in the global market.',
];

const desc_list_2 = [
  'With an average tariffs of 6.1 percent, businesses currently face higher tariffs when they export within Africa than on the continent. The AfCFTA will progressively eliminate tariffs on intra-Africa trade, making it easier for African businesses to trade within the continent and benefit from the growing African market.',
  'The AfCFTA is expected to expand the size of Africa’s economy to US$29 trillion by 2050.',
];

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function TheAfcftaPage() {
  return (
    <Layout>
      <Seo templateTitle='The afcfta' />

      <main>
        <div className='the-afcta'>
          <PageShape />
          <HeroSectionSM
            image='/images/header-bg/the-aft-bg.png'
            name='The AfCFTA'
            desc='The AfCFTA'
          />
          <div className='section-space-y'></div>
          <CardTitleText title='What is the AfCFTA?' desc_list={desc_list} />
          <CardTitleText
            title='AfCFTA contributions to the African Economy'
            desc_list={desc_list_2}
          />
        </div>
      </main>
    </Layout>
  );
}
