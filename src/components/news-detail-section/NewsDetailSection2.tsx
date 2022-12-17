import Link from 'next/link';
import React from 'react';

import GallerySection from '../gallery-section/GallerySection';

const NewsDetailSection2 = () => {
  const photos = [
    {
      src: '/images/news/gallery/1.png',
      width: 329.5,
      height: 331.49,
    },
    {
      src: '/images/news/gallery/2.png',
      width: 329.5,
      height: 161.58,
    },
    {
      src: '/images/news/gallery/3.png',
      width: 160.63,
      height: 161.58,
    },
    {
      src: '/images/news/gallery/4.png',
      width: 329.5,
      height: 329.5,
    },
    {
      src: '/images/news/gallery/5.png',
      width: 160.63,
      height: 331.49,
    },
    {
      src: '/images/news/gallery/6.png',
      width: 160.63,
      height: 330.91,
    },
    {
      src: '/images/news/gallery/7.png',
      width: 329.5,
      height: 161.58,
    },
    {
      src: '/images/news/gallery/8.png',
      width: 326.65,
      height: 328.62,
    },
    {
      src: '/images/news/gallery/9.png',
      width: 326.65,
      height: 328.62,
    },
    {
      src: '/images/news/gallery/10.png',
      width: 328.71,
      height: 161.58,
    },
    {
      src: '/images/news/gallery/11.png',
      width: 160.63,
      height: 161.58,
    },
    {
      src: '/images/news/gallery/12.png',
      width: 329.5,
      height: 331.49,
    },
    {
      src: '/images/news/gallery/13.png',
      width: 160.63,
      height: 331.61,
    },
  ];
  return (
    <div className='text-title-section tw-px-0 md:tw-px-[70px]'>
      <div className='layout'>
        <div className='text-title-inner'>
          <div className='desc-card !tw-pl-0 md:!tw-pl-[120px]'>
            <p>
              “It’s time to move from mere negotiations to trading among
              ourselves” H.E. Joao Baptista Domingos Quiosa, the Angolan
              Ambassador to Ghana
            </p>
            <p>
              On June 24, 2022, the Africa Prosperity Network (APN) invited
              members of the African Diplomatic Corps to a cocktail soiree, at
              APN’s offices in Labone, Accra, Ghana, to officially announce to
              them the oncoming summit of Africa’s political and business
              leaders scheduled to take place in Kwahu, Ghana, this October.
            </p>
            <p>
              The Kwahu Summit on Africa’s Prosperity is an initiative of the
              African Prosperity Network, in partnership with the Africa
              Continental Free Trade Area Secretariat, the Afreximbank and the
              Office of the President of the Republic of Ghana, among other key
              institutions and organisations
            </p>
          </div>
          <div className='quote-card'>
            <p>
              With AfCFTA tasked by the African Union to complete building the
              world’s largest single market of Africa’s 54 member states over
              this decade, the Kwahu Summit is designed to bring the leadership
              of Africa’s private sector fully on board this crucial
              transformational process.
            </p>
          </div>
          <div className='desc-card !tw-pl-0 md:!tw-pl-[120px]'>
            <p>
              Speaking in Kigali, Rwanda last week at the Commonwealth Business
              Forum, the MTN Group President and CEO, Ralph Mupita, welcomed the
              Kwahu Summit as “timely, and a necessary platform to get Africa’s
              business leaders fully engaged (along with the political leaders)
              in the process of deepening intra-Africa trade,” throwing the
              weight of his Pan-African telecom giant “fully behind it.”
            </p>
            <p>
              At the cocktail for the diplomats in Accra last Friday, H.E. Joao
              Baptista Domingos Quiosa, the Angolan ambassador to Ghana, spoke
              for all the ambassadors in showing their full endorsement for the
              Summit. He spoke on behalf of H.E. Zagre Pingrenoma, Dean of the
              African Diplomatic Corps.
            </p>
            <p>
              He said it was about time Africans shifted from the negotiations
              and dialogues on Africa’s integration and trade to a more
              facilitative approach to implementing the AfCFTA framework and saw
              this meeting on minds between political and business heads as very
              significant to the progress of free trade in action across Africa
            </p>
          </div>
          <div className='quote-card'>
            <p>
              In his words:“The group of African Ambassadors are glad to be a
              part of this program in October and will work together with Africa
              Prosperity Network to see that this summit is a success, because
              we believe in it. It’s time to move forward from just dialogues
              and negotiations of African trade and start putting into practice
              some of the things we need to do. The first thing we need to do is
              trade among ourselves, trade between Ghana and Togo, trade between
              Ghana and Angola, trade between Angola and Zimbabwe. It’s time we
              start trading as against the mere negations. Therefore, we the
              Ambassadors have decided to take the message home and to ensure
              this programme is a success.”The Kwahu Summit takes place at the
              Rock City Hotel and Conference Centre in Kwahu, from 27th October
              to 30th October 2022.More than 15 African heads of state from all
              regions of the continent will attend to dialogue with CEOs and
              group chairman of industries operating in Africa. Other thought
              leaders and influential people of African descent will attend
              these high-level dialogues which “will put action onto the AfCFTA
              agreement and expedite its implementation,” according to Dr Nkiru
              Balonwu, Executive Director of APN.Speaking at Friday’s Soirée,
              the Hon. Ampratwum Kwaku Sarpong, Ghana’s Deputy Minister for
              Foreign Affairs, expressed his joy at the “proactive move” on the
              part of private sector players to join the conversation that will
              promote intra-Africa trade and commerce and take Africa closer to
              economic integration
            </p>
          </div>
          <div className='desc-card !tw-pl-0 md:!tw-pl-[120px]'>
            <p>
              Speaking in Kigali, Rwanda last week at the Commonwealth Business
              Forum, the MTN Group President and CEO, Ralph Mupita, welcomed the
              Kwahu Summit as “timely, and a necessary platform to get Africa’s
              business leaders fully engaged (along with the political leaders)
              in the process of deepening intra-Africa trade,” throwing the
              weight of his Pan-African telecom giant “fully behind it.”
            </p>

            <p>
              At the cocktail for the diplomats in Accra last Friday, H.E. Joao
              Baptista Domingos Quiosa, the Angolan ambassador to Ghana, spoke
              for all the ambassadors in showing their full endorsement for the
              Summit. He spoke on behalf of H.E. Zagre Pingrenoma, Dean of the
              African Diplomatic Corps.
            </p>
            <p>
              He said it was about time Africans shifted from the negotiations
              and dialogues on Africa’s integration and trade to a more
              facilitative approach to implementing the AfCFTA framework and saw
              this meeting on minds between political and business heads as very
              significant to the progress of free trade in action across Africa
            </p>
            <p>
              He reaffirmed the full commitment of the Ghana Government to
              making this annual dialogue not only a reality but one that will
              be meaningful to achieving the goal of creating prosperity across
              Africa through economic integration.
            </p>
            <p>
              Dr. Eugene Owusu, Executive Director, and Coordinator – Summit
              Secretariat, expressed his gratitude to the Diplomats, who had
              conveyed the support of the various countries. “Over 500 business
              personalities and political leaders will gather in Kwahu, Ghana,
              to discuss how the continent can best take advantage of its own
              narrative and resources to accomplish more,” he declared.
            </p>
          </div>
          <div className='layout tw-py-10 lg:tw-py-24'>
            <GallerySection photos={photos} />
          </div>
          <div className='desc-card !tw-pl-0 md:!tw-pl-[120px]'>
            <p>BACKGROUND</p>
            <p>
              The African Continental Free Trade Area (AfCFTA) is a flagship
              project of Agenda 2063 of the African Union – Africa’s own
              development vision. Launched on 1 January 2021, the AfCFTA is
              considered an exciting gamechanger and a revolutionary continental
              initiative aimed at setting a prosperity agenda for Africa with an
              inward-looking approach to its development agenda. Envisioned to
              be Africa’s strategy to accelerate intra-African trade and boost
              Africa’s trading position in the global market, the AfCFTA falls
              squarely in line with the philosophy behind an Africa Beyond Aid.
              With a population of some 1.3 billion and a combined gross
              domestic product (GDP) valued at $3.4 trillion, the AfCFTA seeks
              to strengthen Africa’s common voice and policy space in global
              trade negotiations at such a time when much of the world is
              turning away from cooperation and free trade.
            </p>
            <p>
              Recent global geopolitical dynamics such as the Covid 19 Pandemic
              and the Russian-Ukrainian conflict have on one hand, exposed the
              inherent vulnerabilities of the African Continent and on the other
              hand, demonstrated Africa’s resilience and the resolve to tackle
              its own developmental challenges.
            </p>
            <p>
              The Kwahu Summit, therefore, provides a unique annual platform for
              Africa’s key stakeholders to identify common grounds for the
              effective implementation of the continental initiative and shape
              the Africa Agenda for Action.
            </p>
            <p>
              Major discussions during the Kwahu Summit will centre around the
              legal framework and dispute settlement mechanisms to underpin the
              free movements of people, goods and services across member states,
              how to overcome non-tariff barriers to free trade, industrialising
              Africa beyond aid, leveraging Agriculture for prosperity and food
              security, ease of cross-border transportation Transport, financing
              trade and infrastructure across Africa, the role of technology in
              facilitating trade, and energy security in Africa. The first of
              these African Prosperity dialogues being held this year at the
              Rock City under the theme – “AfCFTA: From Ambition to Action-
              Delivering Prosperity Through Continental Trade”.
            </p>
            <p>
              “For four days we will host the decision makers of Africa in both
              business and politics and offer them a deliberate platform to
              think together, and plan together to work together for the
              prosperity of Africa and Africans. Political will backed by the
              commitment of business is how we achieve the vision of our
              founding leaders for a united, prosperous Africa, where the wealth
              of Africa benefits first the people and continent of Africa,” said
              Hannah Awuku, the Executive Secretary of APN.
            </p>
            <p>
              The main discussions at tge summit will take place on October 28th
              and 29th. More details are available on{' '}
              <Link href='/'>www.kwahusummit.com</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailSection2;
