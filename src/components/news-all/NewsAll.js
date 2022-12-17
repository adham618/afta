import React from 'react';

import CardNews from '../card-news/CardNews';
import SectionHeader from '../section-header/SectionHeader';
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
  {
    image: '/images/news/news-4.png',
    title: 'Trading under AfCFTA to progress on agreed 87.7% tariff lines',
    date: '1 November 2022 | 22:48',
    link: '/news/news-4',
  },
  {
    image: '/images/news/news-5.png',
    title:
      'Importance of regional and continental integration for Africa’s development',
    date: '1 November 2022 | 22:48',
    link: '/news/news-5',
  },
  {
    image: '/images/news/news-6.png',
    title:
      'AAAM, AfCFTA brainstorm on how to fast-track devt of African automobile sector',
    date: '1 November 2022 | 22:48',
    link: '/news/news-6',
  },
];

const NewsAll = () => {
  return (
    <div className='news-all'>
      <SectionHeader title='News' />
      <div className='news-all-box'>
        <div className='layout'>
          <div className='tw-grid tw-grid-cols-1 tw-gap-6 md:tw-grid-cols-2 lg:tw-grid-cols-3'>
            {news.map((item, index) => {
              return (
                <div key={index}>
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
        </div>
      </div>
    </div>
  );
};

export default NewsAll;
