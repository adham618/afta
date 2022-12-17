import React from 'react';

import CardPlCommitte from '../card-pl-committe/CardPlCommitte';
import SectionHeader from '../section-header/SectionHeader';

const PlanningCommitteSection = () => {
  return (
    <div className='planning-committee-section'>
      <SectionHeader title='Planning Committee' />
      <div className='desc'>
        <p>
          The planning committee is made up of designated persons from all our
          partner organizations and associates:
        </p>
      </div>
      <div className='planning-sec-box'>
        <div className='layout'>
          <div className='row'>
            <div className='col-md-4'>
              <CardPlCommitte
                icon='/images/icons/icon-1.png'
                title='APN Board of Directors'
              />
            </div>
            <div className='col-md-4'>
              <CardPlCommitte
                icon='/images/icons/icon-2.png'
                title='Office of the President of Ghana'
              />
            </div>
            <div className='col-md-4'>
              <CardPlCommitte icon='/images/icons/icon-3.png' title='Ghana Investment Promotion Centre – GIPC' />
            </div>
            <div className='col-md-4'>
              <CardPlCommitte
                icon='/images/icons/icon-4.png'
                title='United Nations Economic Commission for Africa '
              />
            </div>
            <div className='col-md-4'>
              <CardPlCommitte
                icon='/images/icons/icon-5.png'
                title='UNDP Regional Bureau for Africa'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanningCommitteSection;
