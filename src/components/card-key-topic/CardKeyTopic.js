/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

const CardKeyTopic = (props) => {
  return (
    <Link className='card-key-topic' href='/'>
      <img className='tw-rounded-[10px]' src={props.image} alt={props.name} />
      <span className='title'>{props.title}</span>
    </Link>
  );
};

export default CardKeyTopic;
