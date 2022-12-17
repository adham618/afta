/* eslint-disable @next/next/no-img-element */
import React from 'react';

const CardPlCommitte = (props) => {
  return (
    <div className='card-pl-committee tw-mx-auto tw-max-w-sm'>
      <div className='icon'>
        <img src={props.icon} alt='icon' />
      </div>
      <h3>{props.title}</h3>
    </div>
  );
};

export default CardPlCommitte;
