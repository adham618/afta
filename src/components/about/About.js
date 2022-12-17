import React from "react";

import SectionDot from "../section-dot/SectionDot";
import SectionHeader from "../section-header/SectionHeader";

const About = (props) => {
  return (
    <div className="about-section section-space-y">
      {props.hasDot ? <SectionDot /> : null}
      <SectionHeader
        hint="BACKGROUND TO SUMMIT"
        title="THE AFRICA PROSPERITY DIALOGUES"
      />
      <div className="container">
        <div className="row justify-content-center">
          <div className="content tw-mx-auto tw-max-w-[1000px]">
            <p>
              The Africa Prosperity Dialogues (Kwahu Summit) is a strategic
              platform where the movers and shakers of the African economy will
              elevate the AfCFTA objectives from ambitions to real actions. The
              Summit will be a one-of-a-kind event where African leaders from
              diverse areas of national endeavour will gather each year to
              discuss and share experiences on issues and initiatives required
              for Africa to achieve the goal of shared prosperity and shape the
              Africa Agenda for Action.
            </p>

            <p>
              The maiden Summit would focus on how to expedite the
              implementation of the agreed initiatives within the AfCFTA trade
              bloc. It will bring into practical focus the continent’s critical
              challenges and industrialization priorities and advance
              aggressively the commercial and infrastructural interventions to
              achieve the vision of an Africa Beyond Aid.
            </p>
            <p>
              The Africa Prosperity Dialogues is an annual conference to be held
              every year beginning with 2023. It is a summit of the highest
              political and business decision makers in Africa, supported by
              various shades of leaders, that will come out with practical,
              actionable initiatives to achieve prosperity for all Africans. The
              Summit will accelerate investments and amplify public-private
              partnership.
            </p>

            <p>
              The maiden summit will take place from 26 -28 January 2023 at
              Peduase in the Aburi Mountains, Eastern Region under the theme
              “AfCFTA: From Ambition to Action - Delivering Prosperity Through
              Continental Trade”.
            </p>

            <div>
              <b> The specific objectives of the Summit are to: </b>
              <p>
                ~Foster collaboration among African states and businesses to
                drive investment and develop intra-African trade.
              </p>
              <p>
                ~Develop deliberate and sustainable measures to grow Africa into
                a manufacturing powerhouse.
              </p>
              <p>
                ~Create an effective platform for businesses and political
                leaders to build strategic partnerships and empower African
                businesses to build Africa.
              </p>
              <p>
                ~Create opportunities for business collaboration, which places
                Africa’s development first.
              </p>{" "}
              <p>
                {" "}
                ~ Become the most sought-after event for political and business
                leaders, entrepreneurs and innovators in Africa and beyond.
              </p>
            </div>

            <p>
              <b>EXPECTED OUTCOME</b>
            </p>

            <div>
              <b>The Summit is expected to result in the following outcomes:</b>
              <p>
                1. Consensus on how accelerate the development of the continent
                so as to achieve shared prosperity, through the full
                implementation of the AfCFTA.
              </p>
              <p>
                2. Consensus on how to accelerate the full implementation of
                AfCFTA so trading will start.
              </p>
              <p>
                3. Consensus on strengthening the enablers of trade on the
                continent.
              </p>
              <p>
                4. Consensus on deepening cooperation and integration, through
                the AfCFTA.
              </p>{" "}
            </div>

            <p>
              <b>OPPORTUNITIES OFFERED BY KWAHU SUMMIT</b>
            </p>

            <p>
              As part of our determination to reduce information asymmetries in
              Africa’s trade ecosystem, networking arrangements at the Kwahu
              Summit will include clinics where (one-on-one) and bilateral
              meetings with relevant sector leaders or participating governments
              are arranged for participants.
            </p>

            <p>
              Whilst accessing thought leaders at the highest level,
              participants will have the opportunity to dialogue first hand with
              multi-sectoral change makers on the continent. The focus will be
              pan-African; however, non-African change makers and business
              leaders aligned with Africa Prosperity Network’s vision will
              participate. Ultimately, the summit will offer opportunity to
              participants for trade deal-making, and for governments to reach
              bilateral understanding and agreement on issues of trade.
            </p>

            <p>
              <b>VALUE PROPOSITION</b>
            </p>

            <p>
              The Africa Prosperity Dialogues will deliver immense value to
              multiple stakeholders who participate in the event.
            </p>

            <p>
              <b>AfCFTA</b>
            </p>

            <p>
              To AfCFTA, the summit will assist in creating awareness of the
              Agreement and enhance implementation and adherence to it. It will
              assist AfCFTA to deliver on its 2030 deadline to be fully
              operational in Africa. The summit will provide critical support
              for the AfCFTA Secretariat in implementing its road map towards
              2030.
            </p>

            <p>
              <b>THE AFRICAN UNION</b>
            </p>
            <p>
              To the AU, the summit offers a platform to move the ambition of
              Africa’s Heads of State, which is often expressed in policies on
              trade and commerce, into action. It offers an avenue for Africa’s
              leading businessmen and politicians to work together to implement
              the AU’s decisions. It will help break down such decisions and
              policies into actionable points and build commitment to their
              implementation.
            </p>

            <p>
              <b>AFRICA'S POLITICAL LEADERS</b>
            </p>

            <p>
              The summit offers African governments an opportunity to build a
              narrative supporting interventions towards meeting goal 17 of the
              Sustainable Development Goals. Goal 17 commit governments to build
              partnerships with the private sector, civil society, traditional
              authorities among others to improve upon the livelihoods of
              citizens. The summit will be a fine example of Public-Private
              Partnerships.
            </p>

            <p>
              Over and above that, it will offer Africa’s political and business
              leaders a platform to achieve alignment on how to deepen trade on
              the continent. The limited trade in Africa has been the challenge
              of many African governments, and this summit will confront this in
              a concerted way and develop solutions to the challenges
              identified.
            </p>

            <p>
              <b>AFRICA'S BUSINESS LEADERS</b>
            </p>

            <p>
              Many business leaders need governments to “walk a mile” with them
              in their shoes, to experience how it pinches. At the Summit,
              Africa’s business leaders and politicians will “take that walk
              together”. There will be the opportunity to discuss the threats to
              trade and commerce that could be mitigated by government
              interventions in one shape or form.
            </p>

            <p>
              Also on the table will be economic opportunities and how
              governments can partner with business leaders to unlock them for
              the mutual benefit of business and government, and ultimately, for
              improving upon the living conditions of the citizens.
            </p>

            <p>
              Besides, the summit will assemble a community of expertise that
              will enhance the sharing of best practice, deal making, and
              expedite the movement of people, goods and services within the
              continent as envisaged by AfCFTA. It will expand access to talents
              and other critical human resource requirements across borders and
              create more opportunities in the various areas of business
              operations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
