import * as React from 'react';

import HeroSectionSM from '@/components/hero-section-sm/HeroSectionSM';
import Layout from '@/components/layout/Layout';
import PageShape from '@/components/page-shape/PageShape';
import PlanningCommitteSection from '@/components/planning-committe-section/PlanningCommitteSection';
import Seo from '@/components/Seo';

export default function PlanningCommitteePage() {
  return (
    <Layout>
      <Seo templateTitle='Planning committee' />

      <main>
        <div className='planning-committee-page'>
          <PageShape />
          <HeroSectionSM
            image='/images/header-bg/planning-bg.png'
            name='Planning committee'
            desc='About the Summit'
          />
          <PlanningCommitteSection />
          <div className='tw-mx-auto tw-mb-14 tw-max-w-[990px] tw-text-center tw-text-base tw-font-bold tw-leading-8 tw-text-[#59566F]'>
            <p>
              The planning committee is made up of designated persons from all
              our partner organizations.
            </p>
            <p>
              The planning committee works APN’s functional team to produce
              content, programme and invitation list for summit.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
