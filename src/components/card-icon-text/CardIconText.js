/* eslint-disable @next/next/no-img-element */
import React from 'react';

const CardIconText = (props) => {
  return (
    <div className='card-icon-text'>
      <div className='icon-bar'>
        <span className='icon'>
          <img src={props.Icon} alt='icon' />
        </span>
      </div>
      <div className='text-bar'>
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
      </div>
    </div>
  );
};

export default CardIconText;
