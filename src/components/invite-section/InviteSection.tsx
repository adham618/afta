/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

import CardImgText from '../card-img-text/CardImgText';
import SectionHeader from '../section-header/SectionHeader';

type InviteSectionProps = {
  hideButton?: boolean;
  data: {
    name: string;
    image: string;
    degi: string;
  }[];
};
const InviteSection = ({ hideButton, data }: InviteSectionProps) => {
  return (
    <div className='invite-section tw-relative'>
      <SectionHeader title='Invited Heads of State' />
      <div className='cards'>
        <div className='layout'>
          <div className='gap-4 tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-4'>
            {data.map((invite, index) => (
              <div className='tw-contents' key={index}>
                <CardImgText
                  name={invite.name}
                  image={invite.image}
                  degi={invite.degi}
                />
              </div>
            ))}
          </div>
          <div className='col-md-12'>
            <div className='cards-btn d-flex align-items-center justify-content-end mt-3'>
              {hideButton ? (
                <Link
                  href='/invited-heads-of-state'
                  className='btn btn-invite btn-outline-success'
                >
                  See all Invited Heads of State
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <img
        className='tw-absolute tw-left-0 tw-top-[-1px] -tw-z-10'
        src='/images/CircleDown.svg'
        alt='vector'
      />
    </div>
  );
};

export default InviteSection;
