/* eslint-disable @next/next/no-img-element */
import React from 'react';

import GallerySection from '@/components/gallery-section/GallerySection';
import HeroSectionSM from '@/components/hero-section-sm/HeroSectionSM';
import Layout from '@/components/layout/Layout';
import PageShape from '@/components/page-shape/PageShape';
import Seo from '@/components/Seo';
export default function GalleryPage() {
  const photos = [
    {
      src: '/images/gallery/1.png',
      width: 326.65,
      height: 328.62,
    },
    {
      src: '/images/gallery/2.png',
      width: 326.65,
      height: 160.18,
    },
    {
      src: '/images/gallery/3.png',
      width: 159.24,
      height: 160.18,
    },
    {
      src: '/images/gallery/4.png',
      width: 159.24,
      height: 160.18,
    },
    {
      src: '/images/gallery/5.png',
      width: 159.24,
      height: 328.62,
    },
    {
      src: '/images/gallery/6.png',
      width: 159.24,
      height: 328.06,
    },
    {
      src: '/images/gallery/7.png',
      width: 326.65,
      height: 160.18,
    },
    {
      src: '/images/gallery/8.png',
      width: 326.65,
      height: 160.18,
    },
    {
      src: '/images/gallery/9.png',
      width: 159.24,
      height: 328.06,
    },
    {
      src: '/images/gallery/10.png',
      width: 159.24,
      height: 160.18,
    },
    {
      src: '/images/gallery/11.png',
      width: 159.24,
      height: 160.18,
    },
    {
      src: '/images/gallery/12.png',
      width: 326.65,
      height: 160.18,
    },
    {
      src: '/images/gallery/13.png',
      width: 326.65,
      height: 160.18,
    },
    {
      src: '/images/gallery/14.png',
      width: 326.65,
      height: 160.18,
    },
    {
      src: '/images/gallery/15.png',
      width: 155.04,
      height: 160.18,
    },
    {
      src: '/images/gallery/16.png',
      width: 159.24,
      height: 160.18,
    },
    {
      src: '/images/gallery/17.png',
      width: 159.24,
      height: 160.18,
    },
    {
      src: '/images/gallery/18.png',
      width: 326.65,
      height: 328.62,
    },
    {
      src: '/images/gallery/19.png',
      width: 159.24,
      height: 328.62,
    },
  ];

  return (
    <Layout>
      <Seo templateTitle='Gallery' />

      <main>
        <div className='gallery-page'>
          <PageShape />
          <HeroSectionSM
            image='/images/header-bg/gallery-bg.png'
            name='Gallery'
            desc='Kwahu Summit Launch'
          />
          <div className='layout tw-py-10 lg:tw-py-24'>
            <GallerySection photos={photos} />
          </div>
        </div>
      </main>
    </Layout>
  );
}
