import React from 'react';

import GallerySection from '@/components/gallery-section/GallerySection';
import VideoSection from '@/components/video/VideoSection';

const NewsDetailSection3 = () => {
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
  ];

  return (
    <div className='text-title-section tw-px-0 md:tw-px-[70px]'>
      <div className='layout'>
        <div className='text-title-inner'>
          <div className='quote-card'>
            <p>
              The Africa Prosperity Network has, today, launched the Kwahu
              Summit for Africa’s prosperity.
            </p>
          </div>
          <div className='desc-card !tw-pl-0 md:!tw-pl-[120px]'>
            <p>
              The launch which featured top African business leaders, political
              leaders, and local and international media occurred at the Accra
              Marriot Hotel on the sidelines of the African Development Bank’s
              annual meeting currently happening in Accra, Ghana.
            </p>
            <p>
              Speaking at the launch, His Excellency Wamkele Mene who is the
              Executive Secretary of the AfCFTA Secretariate emphasized the need
              for Africans to have impactful dialogues about Africa’s trade
              relations with the rests of the world in light of the state of
              intra-Africa trade. His Excellency Wamkele Mene declared AfCfFTA
              Secretariate’s support for the Kwahu Summit and urged that the
              Summit would effectively engage the full range of sustainable
              development actors, governments, and businesses to explore how to
              accelerate the AfCFTA implementation as well as the explore the
              kind of economic development vision Africa must have for decades
              to come.
            </p>
            <p>
              On behalf of the Government of Ghana, Honorable Kojo Oppong
              Nkrumah, Ghana’s Minister of Information, spoke about the
              government’s support for the thought leadership platform the Kwahu
              Summit creates for Africans to leverage opportunities and
              resources on the continent to achieve more.
            </p>

            <p>
              Mr. Yofi Grant, Chief Executive Officer of the Ghana Investment
              Promotion Centre (GIPC) emphasized the need for Africans to
              proactively direct global discourses and collaborations on
              Africa’s development, given the share of global natural resources
              the Continent possesses and the potential of the Continent’s
              demography for consumerism, leadership, and labor force.
            </p>
            <p>
              The maiden edition of the Kwahu Summit on Africa’s prosperity will
              take place at the Rock City Hotel in Kwahu on 28th and 29th
              October 2022. The partners of the Summit are AfCFTA Secretariat
              the Government of the Republic of Ghana, and the Ghana Investment
              Promotion Centre (GIPC).
            </p>
          </div>

          <div className='video-section'>
            <VideoSection image='/images/video-bg2.png' videoID='qa3_U4ceAxk' />
          </div>
          <div className='layout tw-py-10 lg:tw-py-24'>
            <GallerySection photos={photos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailSection3;
