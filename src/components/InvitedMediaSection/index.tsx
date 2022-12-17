/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
export default function InvitedMediaSection() {
  const swiperRef = React.useRef<SwiperCore>();
  const swiperRef2 = React.useRef<SwiperCore>();

  const sliderSettings = {
    440: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    680: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  };
  const localMedia = [
    '/images/media-partners/local-media/Asaasa.png',
    '/images/media-partners/local-media/gna.png',
    '/images/media-partners/local-media/bft.png',
    '/images/media-partners/local-media/ghana-broadcasting.png',
  ];
  const internationalMedia = [
    '/images/media-partners/International-media/cnbc.svg',
    '/images/media-partners/International-media/the-africa-report.svg',
    '/images/media-partners/International-media/sabc.png',
    '/images/media-partners/International-media/business-day.png',
  ];
  return (
    <div className='layout tw-max-w-[1040px] tw-py-10 tw-text-center'>
      <h2 className='mb-4 tw-text-4xl tw-uppercase tw-text-[#123150]'>
        invited media
      </h2>
      <div>
        <div>
          <h2 className='tw-my-10 tw-text-sm tw-font-medium tw-uppercase	 tw-tracking-widest tw-text-[#9CA69C]'>
            Local media
          </h2>
          <div className='tw-flex'>
            <button
              className='tw-mr-10 tw-border-none tw-bg-[unset] tw-outline-none'
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <BiArrowBack className='text-primary tw-fill-[#00A139] tw-text-4xl' />
            </button>
            <Swiper
              loop={true}
              slidesPerView='auto'
              breakpoints={sliderSettings}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
            >
              <SwiperSlide className='!tw-w-fit'>
                <img
                  src={localMedia[0]}
                  className='tw-h-[153.93px] tw-w-[300.79px] tw-object-cover tw-object-center'
                  alt='media'
                />
              </SwiperSlide>
              <SwiperSlide className='!tw-w-fit'>
                <img
                  src={localMedia[1]}
                  className='tw-h-[156.4px] tw-w-[168.92px] tw-object-cover tw-object-center'
                  alt='media'
                />
              </SwiperSlide>
              <SwiperSlide className='!tw-w-fit'>
                <img
                  src={localMedia[2]}
                  className='tw-h-[153.93px] tw-w-[175.49px] tw-object-cover tw-object-center'
                  alt='media'
                />
              </SwiperSlide>
              <SwiperSlide className='!tw-w-fit'>
                <img
                  src={localMedia[3]}
                  className='tw-h-[156.4px] tw-w-[156.4px] tw-object-cover tw-object-center'
                  alt='media'
                />
              </SwiperSlide>
            </Swiper>
            <button
              className='tw-ml-10 tw-border-none  tw-bg-[unset] tw-outline-none'
              onClick={() => swiperRef.current?.slideNext()}
            >
              <BiArrowBack className='text-primary tw-rotate-180 tw-transform tw-fill-[#00A139] tw-text-4xl' />
            </button>
          </div>
        </div>
        <div className='mt-7'>
          <h2 className='tw-my-10 tw-text-sm tw-font-medium tw-uppercase	 tw-tracking-widest tw-text-[#9CA69C]'>
            International media
          </h2>
          <div className='tw-flex'>
            <button
              className='tw-mr-10 tw-border-none tw-bg-[unset] tw-outline-none'
              onClick={() => swiperRef2.current?.slidePrev()}
            >
              <BiArrowBack className='text-primary tw-fill-[#00A139] tw-text-4xl' />
            </button>
            <Swiper
              loop={true}
              slidesPerView='auto'
              breakpoints={sliderSettings}
              onBeforeInit={(swiper) => {
                swiperRef2.current = swiper;
              }}
            >
              <SwiperSlide className='tw-flex !tw-w-fit tw-items-center'>
                <img
                  src={internationalMedia[0]}
                  className='tw-h-[111.77px] tw-w-[139.85px] tw-object-cover tw-object-center'
                  alt='media'
                />
              </SwiperSlide>
              <SwiperSlide className='tw-flex !tw-w-fit tw-items-center'>
                <img
                  src={internationalMedia[1]}
                  className='tw-h-[54.14px] tw-w-[267.51px] tw-object-cover tw-object-center'
                  alt='media'
                />
              </SwiperSlide>
              <SwiperSlide className='tw-flex !tw-w-fit tw-items-center'>
                <img
                  src={internationalMedia[2]}
                  className='tw-h-[97.86px] tw-w-[176.14px] tw-object-cover tw-object-center'
                  alt='media'
                />
              </SwiperSlide>
              <SwiperSlide className='tw-flex !tw-w-fit tw-items-center'>
                <img
                  src={internationalMedia[3]}
                  className='tw-h-[45.11px] tw-w-[216.43px] tw-object-cover tw-object-center'
                  alt='media'
                />
              </SwiperSlide>
            </Swiper>
            <button
              className='tw-ml-10 tw-border-none tw-bg-[unset] tw-outline-none'
              onClick={() => swiperRef2.current?.slideNext()}
            >
              <BiArrowBack className='text-primary tw-rotate-180 tw-transform tw-fill-[#00A139] tw-text-4xl' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
