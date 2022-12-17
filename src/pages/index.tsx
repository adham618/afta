import * as React from 'react';

import AboutSection from '@/components/about/AboutSection';
import FAQSection from '@/components/faq-section/FAQSection';
import HeroSection from '@/components/hero-section/HeroSection';
import InviteSection from '@/components/invite-section/InviteSection';
import KeyTopics from '@/components/key-topics/KeyTopics';
import Layout from '@/components/layout/Layout';
import NewSection from '@/components/news-section/NewSection';
import NotableSection from '@/components/notable-section/notable-section';
import Seo from '@/components/Seo';
import SponsorsSection from '@/components/sponsors-section/SponsorsSection';
import VideoSection from '@/components/video/VideoSection';
import WhoAttending from '@/components/who-attending/whoAttending';
export default function HomePage() {
  const NotableData = [
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
  ];
  const InvitedHeadsData = [
    {
      name: 'H.E. Abdel Fattah El-Sisi',
      degi: 'President of the Arab Republic of Egypt',
      image: '/images/profiles/Abdel-Fattah-El-Sisi.png',
    },
    {
      name: 'H.E. Aziz Akhannouch',
      degi: 'Prime Minister of Morocco',
      image: '/images/profiles/Aziz-Akhannouch.png',
    },
    {
      name: 'H.E. Mohamed Bazoum',
      degi: 'President of Niger',
      image: '/images/profiles/Mohamed-Bazoum.png',
    },
    {
      name: 'H.E. Muhammadu Buhari',
      degi: 'President of the Federal Republic of Nigeria',
      image: '/images/profiles/Muhammadu-Buhari.png',
    },
    {
      name: 'H.E Cyril Ramaphosa',
      degi: 'President of South Africa',
      image: '/images/profiles/Cyril-Ramaphosa.png',
    },
    {
      name: 'H.E. Denis Sassou Nguesso',
      degi: 'President of the Republic of the Congo',
      image: '/images/profiles/Denis-Sassou-Nguesso.png',
    },
    {
      name: 'H.E. Yoweri K. Museveni',
      degi: 'President of Uganda',
      image: '/images/profiles/Yoweri-Museveni.png',
    },
    {
      name: 'H.E. Evariste Ndayishimiye',
      degi: 'President of Burundi',
      image: '/images/profiles/Evariste-Ndayishimiye.png',
    },
    {
      name: 'H.E. Faure Gnassingbe',
      degi: 'President of Togo',
      image: '/images/profiles/Faure-Gnassingbe.png',
    },
    {
      name: 'H.E Félix A. Tshisekedi Tshilombo',
      degi: 'President, the Democratic Republic of the Congo',
      image: '/images/profiles/Tshisekedi-Tshilombo.png',
    },
    {
      name: 'H.E. Hakainde Hichilema',
      degi: 'President of Zambia',
      image: '/images/profiles/Hakainde-Hichilema.png',
    },
    {
      name: 'H.E. João Manuel Gonçalves Lourenço',
      degi: 'President of Angola',
      image: '/images/profiles/João-Manuel-Gonçalves-Lourenço.png',
    },
  ];
  return (
    <Layout>
      <Seo />
      <main>
        <div className='home-page'>
          <HeroSection />
          <AboutSection hasDot={true} />
          <VideoSection image='/images/video-bg.png' videoID='qa3_U4ceAxk' />
          <WhoAttending />
          <InviteSection data={InvitedHeadsData} hideButton={true} />
          <NotableSection data={NotableData} hideButton={true} />
          <KeyTopics />
          <NewSection />
          <FAQSection />
          <SponsorsSection />
        </div>
      </main>
    </Layout>
  );
}
