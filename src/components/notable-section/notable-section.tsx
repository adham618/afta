import Link from 'next/link';
import React from 'react';

import CardImgText from '../card-img-text/CardImgText';
import SectionHeader from '../section-header/SectionHeader';

type NotableSectionProps = {
  hideButton?: boolean;
  data: {
    name: string;
    image: string;
    degi: string;
  }[];
};
const NotableSection = ({ hideButton, data }: NotableSectionProps) => {
  return (
    <div className='notable-section'>
      <SectionHeader title='notable personalities' />
      <div className='cards'>
        <div className='layout'>
          <div className='gap-4 tw-grid tw-grid-cols-1 tw-gap-4 sm:tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-4'>
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
                  href='/invited-personalities'
                  className='btn btn-invite btn-outline-success'
                >
                  See all Invited Personalities
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotableSection;
