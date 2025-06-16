import React from "react";

import styles from "./PricingSection.module.scss";
import SectionIntro from "@/components/General/SectionIntro/SectionIntro";
import PricingCard, { PricingCardProps } from "./PricingCard";

const StarterPlan: PricingCardProps = {
  title: "Starter",
  price: 24,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium orci penatibus sed donec consequat.",
  includedList: [
    {
      title: "Lorem ipsum dolor sit amet consectetur",
      disabled: false,
    },
    {
      title: "Lorem ipsum dolor sit amet",
      disabled: false,
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur",
      disabled: false,
    },
    {
      title: "Lorem ipsum dolor sit",
      disabled: true,
    },
  ],
};

const BusinessPlan: PricingCardProps = {
  title: "Business",
  price: 72,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium orci penatibus sed donec consequat.",
  includedList: [
    {
      title: "Lorem ipsum dolor sit amet consectetur",
      disabled: false,
    },
    {
      title: "Lorem ipsum dolor sit amet",
      disabled: false,
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur",
      disabled: false,
    },
    {
      title: "Lorem ipsum dolor sit",
      disabled: false,
    },
  ],
};

const PricingSection = () => {
  return (
    <section className={styles.pricingSection} id="pricing">
      <SectionIntro
        title="Pricing"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor in laoreet justo lectus a eget vitae. Tellus id pretium."
      />

      <div className={styles.pricingCardSection}>
        <PricingCard {...StarterPlan} />
        <PricingCard {...BusinessPlan} className={styles.businessCard} />
      </div>
    </section>
  );
};

export default PricingSection;
