import * as React from 'react';

import HeaderText from '@/components/header-text/HeaderText';
import HeroSectionSM from '@/components/hero-section-sm/HeroSectionSM';
import InviteSection from '@/components/invite-section/InviteSection';
import Layout from '@/components/layout/Layout';
import PageShape from '@/components/page-shape/PageShape';
import Seo from '@/components/Seo';

export default function InvitedHeadsOfStatePage() {
  const data = [
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
    {
      name: 'H.E. Paul Kagame',
      degi: 'President of Rwanda',
      image: '/images/profiles/Paul-Kagame.png',
    },
    {
      name: 'H.E. Macky Sall',
      degi: 'President of Senegal & Chairperson of the AU',
      image: '/images/profiles/Macky-Sall.png',
    },
    {
      name: 'H.E. Mia Motley',
      degi: 'Prime Minister of Barbados',
      image: '/images/profiles/Mia-Motley.png',
    },
    {
      name: 'H.E. Alassane Ouattara',
      degi: "President of Côte d'Ivoire",
      image: '/images/profiles/Alassane-Ouattara.png',
    },
    {
      name: 'H.E. William Ruto',
      degi: 'President of Kenya',
      image: '/images/profiles/William-Ruto.png',
    },
    {
      name: 'H.E. Sahle-Work Zewde',
      degi: 'President of Ethiopia',
      image: '/images/profiles/Sahle-Work-Zewde.png',
    },
    {
      name: 'H.E. Teodoro O. Nguema',
      degi: 'President of Equatorial Guinea',
      image: '/images/profiles/Teodoro-Nguema.png',
    },
    {
      name: 'H.E. Samia Suluhu Hassan',
      degi: 'President of Tanzania',
      image: '/images/profiles/Samia-Suluhu-Hassan.png',
    },
    {
      name: 'H.E. Umaro Sissoco Embaló',
      degi: 'President of Guinea-Bissau',
      image: '/images/profiles/Umaro-Sissoco-Embaló.png',
    },
    {
      name: 'H.E. Mahamadou Issoufou',
      degi: 'Former Nigerien President',
      image: '/images/profiles/Mahamadou-Issoufou.png',
    },
  ];

  return (
    <Layout>
      <Seo templateTitle='Invited heads of state' />

      <main>
        <div className='speaker-page'>
          <PageShape />
          <HeroSectionSM
            image='/images/header-bg/speaker-bg.png'
            name='Invited Heads of State'
            desc='In Africa and the Diaspora'
          />
          <HeaderText />
          <InviteSection data={data} hideButton={false} />
        </div>
      </main>
    </Layout>
  );
}
