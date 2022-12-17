import * as React from 'react';

import CardAddress from '@/components/card-address/CardAddress';
import HeroSectionSM from '@/components/hero-section-sm/HeroSectionSM';
import Layout from '@/components/layout/Layout';
import PageShape from '@/components/page-shape/PageShape';
import Seo from '@/components/Seo';

export default function PeduasePage() {
  return (
    <Layout>
      <Seo templateTitle='Peduase' />

      <main>
        <div className='peduase-page'>
          <PageShape />
          <HeroSectionSM
            image='/images/header-bg/peduase-bg.png'
            name='Peduase'
            desc='Event guide'
          />
          <div className='lg:p-4'>
            <CardAddress
              title='SUMMIT FOR HEADS OF STATE AND BUSINESS LEADERS'
              date='28 january 2023'
              desc='A reflection on the ‘Outcome Document’ from the Business and Policy Leaders Dialogue to drive a purposeful roundtable high-level conversation between African Heads of State, Business Leaders, and other eminent personalities.'
              image='/images/avatar.png'
              name=' H.E. Nana Addo Danquah Akufo-Addo'
              degi='President of the Republic of Ghana'
              location='Peduase, Aburi Mountains, Eastern Ghana'
            />
          </div>
        </div>
      </main>
    </Layout>
  );
}
