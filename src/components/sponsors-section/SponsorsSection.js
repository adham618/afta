/* eslint-disable @next/next/no-img-element */
import React from 'react';

import SectionHeader from '../section-header/SectionHeader';

const sponsor_lists = [
  {
    name: 'Lead SponsorS',
    icons: [
      {
        icon_name: '/images/sponsor/sponsor-1.png',
        icon_class: 'icon-big',
      },
    ],
  },
  {
    name: 'Platinum Sponsor:',
    icons: [
      {
        icon_name: '/images/sponsor/sponsor-2.png',
        icon_class: 'icon-md',
      },
      {
        icon_name: '/images/sponsor/sponsor-3.png',
        icon_class: 'icon-md',
      },
      {
        icon_name: '/images/sponsor/sponsor-4.png',
        icon_class: 'icon-md',
      },
    ],
  },
  {
    name: 'Diamond Sponsor:',
    icons: [
      {
        icon_name: '/images/sponsor/sponsor-5.png',
        icon_class: 'icon-sm',
      },
      {
        icon_name: '/images/sponsor/sponsor-6.png',
        icon_class: 'icon-sm',
      },
      {
        icon_name: '/images/sponsor/sponsor-7.png',
        icon_class: 'icon-sm',
      },
      {
        icon_name: '/images/sponsor/sponsor-8.png',
        icon_class: 'icon-sm',
      },
      {
        icon_name: '/images/sponsor/sponsor-9.png',
        icon_class: 'icon-sm',
      },
    ],
  },
];
const SponsorsSection = () => {
  return (
    <div className='sponsor-section'>
      <SectionHeader title='Sponsors' />

      <div className='sponsor-box'>
        {sponsor_lists.map((sponsor, index) => (
          <div className='sponsor-item' key={index}>
            <p>{sponsor.name}</p>
            <div className='sponsor-icons tw-flex tw-flex-wrap tw-space-y-5'>
              {sponsor.icons.map((icon, index) => (
                <div className='sponsor-icon' key={index}>
                  <img
                    className={icon.icon_class}
                    src={icon.icon_name}
                    alt={icon.icon_name}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsorsSection;
