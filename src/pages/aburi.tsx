import React from "react";

import CardAddress from "@/components/card-address/CardAddress";
import HeroSectionSM from "@/components/hero-section-sm/HeroSectionSM";
import Layout from "@/components/layout/Layout";
import PageShape from "@/components/page-shape/PageShape";
import Seo from "@/components/Seo";

export default function AburiPage() {
  return (
    <Layout>
      <Seo templateTitle="Aburi" />
      <main>
        <div className="accra-page">
          <PageShape />
          <HeroSectionSM
            image="/images/header-bg/aburi-bg.png"
            name="Aburi"
            desc="Event guide"
          />
          <div className="lg:p-4">
            <CardAddress
              title=" BUSINESS AND POLICY LEADERS DIALOGUE "
              date="26-27 JANUARY "
              desc="A two-day high-level dialogue of business and policy leaders dialogue to practically define the ‘quick wins’ to drive AfCFTA’s initiative from ambition to action. The results from the dialogue will produce an “Outcome Document” for deliberation that drives an impactful conversation at the Summit for Heads of State and Business Executives. "
              image="/images/avatar-icon.svg"
              name="Hosted by APN & Partners"
              location="Safari Valley, Aburi, Ghana"
            />

          </div>
        </div>
      </main>
    </Layout>
  );
}
