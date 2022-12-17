import React from 'react';

import CardKeyTopic from '../card-key-topic/CardKeyTopic';
import SectionHeader from '../section-header/SectionHeader';

const KeyTopics = () => {
  return (
    <div className='key-topic-section p4'>
      <SectionHeader title='Key topics' />
      <div className='key-topic'>
        <div className='container-fluid'>
          <div className='row tw-items-center'>
            <div className='col-md-4'>
              <CardKeyTopic
                image='/images/key-topic/key-topic-1.png'
                title='Energy Security'
              />
            </div>
            <div className='col-md-4'>
              <CardKeyTopic
                image='/images/key-topic/key-topic-2.png'
                title='Technology and Innovation'
              />
            </div>
            <div className='col-md-4'>
              <CardKeyTopic
                image='/images/key-topic/key-topic-3.png'
                title='Financing Trade across borders'
              />
            </div>
            <div className='col-md-6'>
              <CardKeyTopic
                image='/images/key-topic/key-topic-4.png'
                title='Legal and Institutional Framework'
              />
            </div>
            <div className='col-md-6'>
              <CardKeyTopic
                image='/images/key-topic/key-topic-5.png'
                title='FOOD SECURITY & AGRICULTURE'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyTopics;
