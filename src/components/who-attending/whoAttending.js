/* eslint-disable @next/next/no-img-element */
import React from 'react';

import CardIconText from '../card-icon-text/CardIconText';
import SectionHeader from '../section-header/SectionHeader';
const WhoAttending = () => {
  return (
    <div className='who-attending-section tw-relative lg:tw-pt-20'>
      <div className='row layout'>
        <div className='col-lg-5 offset-lg-1 col-md-6'>
          <div className='content !tw-pr-0'>
            <SectionHeader hint='The speakers' title='Who is attending' />
            <div>
              <p>
                At the Africa Prosperity Dialogues, Africa’s business leaders
                and politicians will “take that walk together”. There will be
                the opportunity to discuss the threats to trade and commerce
                that could be mitigated by government interventions in one shape
                or form
              </p>
              <p>
                Also on the table will be economic opportunities and how
                governments can partner with business leaders to unlock them for
                the mutual benefit of business and government, and ultimately,
                for improving upon the living conditions of the citizens.
              </p>
            </div>
          </div>
        </div>
        <div className='col-md-6 col-lg-6'>
          <div className='row'>
            <div className='col-md-6'>
              <CardIconText
                Icon='/images/icons/head.png'
                title='Heads of State'
              />
            </div>
            <div className='col-md-6'>
              <CardIconText
                Icon='/images/icons/captain.png'
                title='Captains of Industry'
              />
            </div>
            <div className='col-md-6'>
              <CardIconText
                Icon='/images/icons/personality.png'
                title='Notable Personalities'
              />
            </div>
            <div className='col-md-6'>
              <CardIconText
                Icon='/images/icons/head.png'
                title='Heads of State'
              />
            </div>
          </div>
        </div>
      </div>
      <img
        className='tw-absolute tw-left-0 tw-bottom-0 -tw-z-10'
        src='/images/CircleUp.svg'
        alt='vector'
      />
    </div>
  );
};

export default WhoAttending;
