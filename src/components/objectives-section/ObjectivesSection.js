import React from 'react';

import CardIconText from '../card-icon-text/CardIconText';
import SectionHeader from '../section-header/SectionHeader';
const ObjectivesSection = () => {
  return (
    <div className='objectives-section layout'>
      <SectionHeader
        hint='The specific objectives of the Kwahu Summit are to:'
        title='OBJECTIVES'
      />
      <div className='objective-box'>
        <div className='row'>
          <div className='col-md-4'>
            <CardIconText
              Icon='/images/icons/hand.png'
              desc='Foster collaboration among African states and businesses to drive investment and develop intra-African trade.'
            />
          </div>
          <div className='col-md-4'>
            <CardIconText
              Icon='/images/icons/up.png'
              desc='Develop deliberate and sustainable measures to grow Africa into a manufacturing powerhouse.'
            />
          </div>
          <div className='col-md-4'>
            <CardIconText
              Icon='/images/icons/bank.png'
              desc='Create an effective platform for business and political leaders that builds strategic partnerships, and empower African businesses to develop the Africa we want.'
            />
          </div>
          <div className='col-md-4'>
            <CardIconText
              Icon='/images/icons/busniess.png'
              desc='Create opportunities for business collaboration, which places Africa’s development first.'
            />
          </div>
          <div className='col-md-4'>
            <CardIconText
              Icon='/images/icons/users.png'
              desc='Become the most sought-after event for political and business lead ers, entrepreneurs and innovators in Africa and beyond.'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ObjectivesSection;
