/* eslint-disable @next/next/no-img-element */
import React from 'react';

const CardAddress = (props) => {
  return (
    <div className='card-address layout !tw-px-6 !tw-py-4 lg:!tw-py-[40px] lg:!tw-px-[150px]'>
      <div className='title'>
        <h3 className='!tw-mb-0 md:!tw-mb-[50px]'>{props.title}</h3>
      </div>
      <div className='card-row tw-flex-col !tw-border-0 tw-border-solid tw-border-[#d9d9d9] md:tw-flex-row md:!tw-border-b'>
        <div className='card-date tw-mb-7 tw-flex tw-w-full tw-items-center tw-justify-center tw-border-0 tw-border-b-2 tw-border-solid tw-border-[#D2D2D2] tw-py-6 tw-text-center md:tw-w-0 md:tw-flex-none md:!tw-border-0 md:tw-text-left'>
          <h3>{props.date}</h3>
        </div>
        <div className='card-desc !tw-pl-0 md:!tw-pl-[70px]'>
          <p className='tw-text-lg'>{props.desc}</p>
          {props.byInvitation && (
            <div className='tw-mb-5 tw-text-lg tw-font-semibold tw-text-[#00A139]'>
              Strictly by Invitation
            </div>
          )}
          <h3 className='hosted'>Hosted by:</h3>
          <div className='card-box'>
            <div className='icon'>
              <img src={props.image} alt='icon' />
            </div>
            <div className='name'>
              <h3 className='tw-font-sans !tw-text-sm tw-font-semibold !tw-text-black'>
                {props.name}
              </h3>
              <p>{props.degi}</p>
            </div>
          </div>
          <div className='card-location'>
            <img src='/images/icons/location.svg' alt='location' />
            <p>{props.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardAddress;
