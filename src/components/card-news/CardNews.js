/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

const CardNews = (props) => {
  return (
    <div className='card-news tw-mx-auto tw-max-w-[415px]'>
      <div className='cover'>
        <img src={props.image} alt='Cover' />
      </div>
      <div className='content'>
        <Link href={props.link || ''}>
          <h3>{props.title}</h3>
        </Link>
        <span>{props.date}</span>
      </div>
    </div>
  );
};

export default CardNews;
