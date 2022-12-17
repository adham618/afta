import Link from 'next/link';
import * as React from 'react';
import { RiAlarmWarningFill } from 'react-icons/ri';

import Seo from '@/components/Seo';

export default function NotFoundPage() {
  return (
    <>
      <Seo templateTitle='Not Found' />

      <main>
        <section className='tw-bg-white'>
          <div className='layout tw-flex tw-min-h-screen tw-flex-col tw-items-center tw-justify-center tw-text-center tw-text-black'>
            <RiAlarmWarningFill
              size={60}
              className='tw-drop-shadow-glow tw-animate-flicker tw-text-red-500'
            />
            <h1 className='tw-mt-8 tw-text-4xl md:tw-text-6xl'>
              Page Not Found
            </h1>
            <Link className='tw-mt-4 md:tw-text-lg' href='/'>
              Back to Home
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
