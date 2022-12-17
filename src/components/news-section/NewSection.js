/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

import CardNews from '../card-news/CardNews';
import SectionHeader from '../section-header/SectionHeader';
const NewsSection = () => {
  const news = [
    {
      image: '/images/news/news-1.png',
      title:
        '“It’s time to move from mere negotiations to trading among ourselves” H.E. Joao Baptista Domingos Quiosa, ',
      date: '24 June 2022 | 22:48',
      link: '/news/news-1',
    },
    {
      image: '/images/news/news-2.png',
      title:
        'KWAHU SUMMIT LAUNCHED – GHANA TO HOST AFRICA’S PROSPERITY DIALOGUES',
      date: '24 June 2022 | 22:48',
      link: '/news/news-2',
    },
    {
      image: '/images/news/news-3.png',
      title: 'Benefits of African Economic Integration',
      date: '24 May 2022 | 22:48',
      link: '/news/news-3',
    },
  ];

  return (
    <div className='news-section'>
      <SectionHeader title='News' />
      <div className='news-card'>
        <div className='layout'>
          <div className='tw-grid tw-grid-cols-1 tw-gap-4 md:tw-grid-cols-2 lg:tw-grid-cols-3'>
            {news.map((item, index) => {
              return (
                <div key={index} className='last:tw-mb-10'>
                  <CardNews
                    image={item.image}
                    title={item.title}
                    date={item.date}
                    link={item.link}
                  />
                </div>
              );
            })}
          </div>
          <div className='row justify-content-end'>
            <div className='col-md-4'>
              <div className='view-more-news'>
                <Link
                  href='/news'
                  className='btn view-all-news btn-link hover:tw-underline'
                >
                  View all news
                  <img
                    className='arrow-right tw-object-fill'
                    src='/images/green-arrow-right.png'
                    alt='arrow right'
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
