import React from 'react';

import About from '@/components/about/About';
import HeroSectionSM from '@/components/hero-section-sm/HeroSectionSM';
import Layout from '@/components/layout/Layout';
import ObjectivesSection from '@/components/objectives-section/ObjectivesSection';
import PageShape from '@/components/page-shape/PageShape';
import Seo from '@/components/Seo';
import VideoSection from '@/components/video/VideoSection';

export default function AboutSummitPage() {
  return (
    <Layout>
      <Seo templateTitle='About summit' />

      <main>
        <div className='about-summit-page'>
          <PageShape />
          <HeroSectionSM
            image='/images/header-bg/about-summit-bg.png'
            name='About the summit'
            desc='About the summit'
          />
          <About hasDot={false} />
          <VideoSection image='/images/video-bg.png' videoID='qa3_U4ceAxk' />
          <ObjectivesSection />
        </div>
      </main>
    </Layout>
  );
}
