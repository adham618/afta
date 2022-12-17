import React from 'react';

import HeaderText from '@/components/header-text/HeaderText';
import HeroSectionSM from '@/components/hero-section-sm/HeroSectionSM';
import Layout from '@/components/layout/Layout';
import NotableSection from '@/components/notable-section/notable-section';
import PageShape from '@/components/page-shape/PageShape';
import Seo from '@/components/Seo';
const data = [
  {
    name: 'Aliko Dangote',
    degi: 'Chairman and CEO, Dangote Group',
    image: '/images/profiles/Aliko-Dangote.png',
  },
  {
    name: 'Ngozi Okonjo-Iweala',
    degi: 'Director-General, World Trade Organization',
    image: '/images/profiles/Ngozi-Okonjo-Iweala.png',
  },
  {
    name: 'Dr. Adesina Akinwumi',
    degi: 'President, African Development Bank',
    image: '/images/profiles/Adesina-Akinwumi.png',
  },
  {
    name: 'Tidjane Thiam',
    degi: 'Executive Chairman, Freedom Acquisition I Corporation',
    image: '/images/profiles/Tidjane-Thiam.png',
  },
  {
    name: 'Prof. Benedict Oramah',
    degi: 'President, Afrexim Bank',
    image: '/images/profiles/Benedict-Oramah.png',
  },
  {
    name: 'Ralph Mupita',
    degi: 'Group CEO, MTN',
    image: '/images/profiles/Ralph-Mupita.png',
  },
  {
    name: 'Miriam C. Olusanya',
    degi: 'Managing Director, Guaranty Trust Bank',
    image: '/images/profiles/Miriam-Olusanya.png',
  },
  {
    name: 'Hadi Halloche',
    degi: 'Global Co-Head, Trafigura Group Pte LTD',
    image: '/images/profiles/Hadi-Halloche.png',
  },
  {
    name: 'Bernard Mensah',
    degi: 'President, International Bank of America',
    image: '/images/profiles/Bernard-Mensah.png',
  },
  {
    name: 'Sir David Frank Adjaye',
    degi: 'Renowned architect',
    image: '/images/profiles/David-Frank-Adjaye.png',
  },
  {
    name: 'Kayra Harding Bart',
    degi: 'Vice President, National Assembly of Panama',
    image: '/images/profiles/Kayra-Harding-Bart.png',
  },
  {
    name: 'Carl Cruz',
    degi: 'MD, Unilever West Africa',
    image: '/images/profiles/Carl-Cruz.png',
  },
  {
    name: 'Asma Chaabi',
    degi: 'Vice President, YNNA Holdings, Morocco',
    image: '/images/profiles/Asma-Chaabi.png',
  },
  {
    name: 'Maria Ramos',
    degi: 'Chairperson, AngloGold Ashanti',
    image: '/images/profiles/Maria-Ramos.png',
  },
  {
    name: 'Samaila Zubairu',
    degi: 'President/CEO, Africa Finance Corporation',
    image: '/images/profiles/Samaila-Zubairu.png',
  },
  {
    name: 'Dr. Amany Asfour',
    degi: 'MD, Unilever West Africa',
    image: '/images/profiles/Amany-Asfour.png',
  },
  {
    name: 'Patrick Awuah',
    degi: 'Founder & President, Ashesi University, Ghana',
    image: '/images/profiles/Patrick-Awuah.png',
  },
  {
    name: 'Mr. Kofi Appenteng',
    degi: 'President and CEO, Africa-America Institute',
    image: '/images/profiles/Kofi-Appenteng.png',
  },
  {
    name: 'Sam Jonah',
    degi: 'Executive Chairman, Jonah Capital Ghana',
    image: '/images/profiles/Sam-Jonah.png',
  },
  {
    name: 'Mr. Thomas Kgoloko',
    degi: 'CEO, South African Airways',
    image: '/images/profiles/Thomas-Kgoloko.png',
  },
  {
    name: 'Mr. Mesfin Tasew Bekele',
    degi: 'CEO, Ethiopian Airlines',
    image: '/images/profiles/Mesfin-Tasew-Bekele.png',
  },
  {
    name: 'Ms. Ahunna Eziakonwa',
    degi: 'Assistant Secretary-General and Director, UNDP Regional Bureau for Africa',
    image: '/images/profiles/Ahunna-Eziakonwa.png',
  },
];
export default function InvitedPersonalitiesPage() {
  return (
    <Layout>
      <Seo templateTitle='Invited personalities' />

      <main>
        <div className='speaker-page'>
          <PageShape />
          <HeroSectionSM
            image='/images/header-bg/speaker-2-bg.png'
            name='Invited Personalities'
            desc='In Africa and the Diaspora'
          />
          <HeaderText />
          <NotableSection data={data} hideButton={false} />
        </div>
      </main>
    </Layout>
  );
}
