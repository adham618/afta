/* eslint-disable @next/next/no-img-element */
import React from 'react';

const CardImgText = (props) => {
  return (
    <div className='card-img-text tw-mx-auto tw-flex tw-max-w-[300px] tw-flex-col'>
      <div className='cover'>
        <img
          className='tw-h-[422.23px] tw-w-[320.46px] tw-object-fill'
          src={props.image}
          alt={props.name}
        />
      </div>
      <div className='content tw-flex-grow'>
        <h3 className='!tw-text-xl'>{props.name}</h3>
        <p className='tw-leading-5'>{props.degi}</p>
      </div>
    </div>
  );
};

export default CardImgText;
