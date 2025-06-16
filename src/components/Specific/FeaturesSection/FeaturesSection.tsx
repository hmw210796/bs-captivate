"use client";

import React from "react";

import styles from "./FeaturesSection.module.scss";

import Image from "next/image";
import { motion } from "motion/react";
import Label from "@/components/General/Label/Label";
import FeaturesCard from "./FeaturesCard";
import SectionIntro from "@/components/General/SectionIntro/SectionIntro";

const fadeScaleInAnimation = {
  initial: { opacity: 0, transform: "scale(0.7)" },
  whileInView: { opacity: 1, transform: "scale(1)" },
  viewport: {
    once: true,
  },
  transition: { duration: 0.7 },
};

const FeaturesSection = () => {
  return (
    <section className={styles.featuresSection} id="features">
      <SectionIntro
        title="Features"
        description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor in laoreet justo lectus a eget vitae. Tellus id pretium."
      />

      <motion.div {...fadeScaleInAnimation} className={styles.featuresFirstRow}>
        <FeaturesCard className={styles.featuresFirstRowCard}>
          <div
            className={`${styles.featuresCardImageContainer} ${styles.fade__}`}
          >
            <Image
              src={"/images/features-1.png"}
              width={692}
              height={278}
              className={styles.featuresCardImage}
              alt="all-in-one"
            />
          </div>

          <Label>ALL-IN-ONE</Label>

          <h3 className={styles.featuresCardTitle}>Everything you need</h3>

          <p className={styles.featuresParagraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </FeaturesCard>

        <FeaturesCard className={styles.featuresFirstRowCard}>
          <Label>DESIGN</Label>

          <h3 className={styles.featuresCardTitle}>Branding</h3>

          <p className={styles.featuresParagraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <div
            className={`${styles.featuresCardImageContainer} ${styles.branding__}`}
          >
            <Image
              src={"/images/features-2.png"}
              width={692}
              height={278}
              className={styles.featuresCardImage}
              alt="feature-branding"
            />
          </div>
        </FeaturesCard>
      </motion.div>

      <motion.div
        className={styles.featuresSecondRow}
        {...fadeScaleInAnimation}
      >
        <FeaturesCard className={styles.featuresSecondRowCard}>
          <div className={styles.featuresSecondRowCardLeft}>
            <Label>TEMPLATES</Label>

            <h3 className={styles.featuresCardTitle}>
              Create a beautiful presentation in minutes
            </h3>

            <p className={styles.featuresParagraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus
              eu, non velit ut nisl. Arcu orci id aliquet elementum in.
            </p>
          </div>

          <div className={styles.featuresCardImageContainer}>
            <Image
              src={"/images/features-3.png"}
              width={692}
              height={278}
              className={styles.featuresCardImage}
              alt="features-templates"
            />
          </div>
        </FeaturesCard>
      </motion.div>

      <motion.div {...fadeScaleInAnimation} className={styles.featuresThirdRow}>
        <FeaturesCard className={styles.featuresThirdRowCard}>
          <div
            className={`${styles.featuresCardImageContainer} ${styles.livestream__}`}
          >
            <Image
              src={"/images/features-4.png"}
              width={692}
              height={278}
              className={styles.featuresCardImage}
              alt="features-templates"
            />
          </div>

          <Label>LIVESTREAM</Label>

          <h3 className={styles.featuresCardTitle}>Broadcast to the world</h3>

          <p className={styles.featuresParagraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </FeaturesCard>

        <FeaturesCard className={styles.featuresThirdRowCard}>
          <Label>ANALYTICS</Label>

          <h3 className={styles.featuresCardTitle}>Track your performance</h3>

          <p className={styles.featuresParagraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <div
            className={`${styles.featuresCardImageContainer}  ${styles.analytics__}`}
          >
            <Image
              src={"/images/features-5.png"}
              width={692}
              height={278}
              className={styles.featuresCardImage}
              alt="features-analytics"
            />
          </div>
        </FeaturesCard>
      </motion.div>
    </section>
  );
};

export default FeaturesSection;
