import * as React from "react";

import SectionDot from "../section-dot/SectionDot";
import SectionHeader from "../section-header/SectionHeader";

export default function AboutSection(props) {
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


          </div>
        </div>
      </div>
    </div>
  );
}
