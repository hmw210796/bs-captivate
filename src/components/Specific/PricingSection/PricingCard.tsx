"use client";

import React from "react";

import styles from "./PricingCard.module.scss";
import { motion } from "motion/react";
import Image from "next/image";
import Button from "@/components/General/Button/Button";

type PlanInclusionProps = {
  title: string;
  disabled: boolean;
};

export type PricingCardProps = {
  className?: string;
  title: string;
  price: number;
  description: string;
  includedList: PlanInclusionProps[];
};

const PricingCard: React.FC<PricingCardProps> = ({
  className,
  title,
  description,
  includedList,
  price,
}) => {
  return (
    <motion.div className={`${styles.cardContainer} ${className}`}>
      <h3 className={styles.pricingPlanTitle}>{title}</h3>
      <div className={styles.pricingPlanSubtitle}>
        <span className={styles.pricingPlanPrice}>${price}</span> /MONTH
      </div>
      <p className={styles.pricingPlanDescription}>{description}</p>
      <div className={styles.pricingPlanSubtitle}>WHAT'S INCLUDED</div>
      <ul>
        {includedList.map((item) => (
          <li key={Math.random()} className={styles.pricingPlanItem}>
            <Image
              src={"/icons/icon-tick.svg"}
              width={22}
              height={22}
              alt="icon-tick"
              className={item.disabled ? styles.disabled__ : ""}
            />
            {item.title}
          </li>
        ))}
      </ul>

      <Button
        variant="secondary"
        href="#pricing"
        size="large"
        className={styles.pricingPlanButtonContainer}
      >
        <div className={styles.pricingPlanButton}>Get started</div>
      </Button>
    </motion.div>
  );
};

export default PricingCard;
