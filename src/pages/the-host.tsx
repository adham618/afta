import React from 'react';

import CardTitleText from '@/components/card-title-text/CardTitleText';
import HeroSectionSM from '@/components/hero-section-sm/HeroSectionSM';
import Layout from '@/components/layout/Layout';
import PageShape from '@/components/page-shape/PageShape';
import Seo from '@/components/Seo';

const desc_list = [
  'Africa Prosperity Network (APN) is a private not-for-profit organization established in Ghana with a vision to promote Africa beyond aid, by creating the platforms for holding critical dialogues that will reshape the thinking of the leaders of this continent and guide them into taking those bold steps in the area of trade, commerce, the structure of our national economies, political conduct and our culture that will bring prosperity to the people if Africa. Our approach is to mobilize African leaders both in politics and business and help build those partnerships that will reshape the principles and policies required to ensure that we place the people of Africa first and work towards an upliftment of the standard of living, by creating an Africa conversation by Africans and for Africa in the context of the challenges and opportunities peculiar to the continent.',
];

const desc_list_2 = [
  'The object and purpose of APN are to create an enabling platform for collaboration between political and business leaders of Africa to drive the collective prosperity of Africa and people of African descent.',
];

const desc_list_3 = [
  'The services APN provides include: Convene Africa’s leaders in politics and business to discuss the prosperity of the continent, Establish a media network to push the single African market agenda,  Establish a network of Influential Africans to drive an African Prosperity Agenda. ',
];

const desc_list_4 = [
  'APN has a three-fold leverage: a strong partnership with credible institutions who believe in APN’s core business and continue to support our work. Such institutions include the African Continental Free Trade Area (AfCFTA) Secretariat, Office of the President of Ghana, the UNDPs ',
];

export default function HostPage() {
  return (
    <Layout>
      <Seo templateTitle='the host' />

      <main>
        <div className='host-page'>
          <PageShape />
          <HeroSectionSM
            image='/images/header-bg/host-bg.png'
            name='The Host'
            desc='The Host'
          />
          <div className='section-space-y'></div>
          <CardTitleText title='AFRICA PROSPERITY NETWORK (APN)' desc_list={desc_list} />
          <CardTitleText
            title='Mission'
            desc_list={desc_list_2}
          />

          <CardTitleText
            title='Services'
            desc_list={desc_list_3}
          />

          <CardTitleText
            title='APN’s Leverage'
            desc_list={desc_list_4}
          />

        </div>
      </main>
    </Layout>
  );
}
