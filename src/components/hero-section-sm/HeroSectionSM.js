/* eslint-disable @next/next/no-img-element */
import React from 'react';

const HeroSectionSM = (props) => {
  return (
    <div className='hero-section-sm'>
      <img src={props.image} alt='image' />
      <div className='hero-content'>
        <div className='content-inner'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <div className='content'>
                  <h3 className='!tw-text-2xl lg:!tw-text-[64px] lg:!tw-leading-[83.2px]'>
                    {props.name}
                  </h3>
                  <p>{props.desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionSM;
