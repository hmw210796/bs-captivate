"use client";

import React from "react";

import styles from "./HeroSection.module.scss";
import Button from "@/components/General/Button/Button";

import HeroImage from "../../../../public/images/hero-1.png";
import Image from "next/image";
import { motion, scale } from "motion/react";

const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, transform: "scale(0.7)" }}
      whileInView={{ opacity: 1, transform: "scale(1)" }}
      className={styles.heroSection}
      viewport={{
        once: true,
      }}
    >
      <div className={styles.heroLeftSection}>
        <h1 className={styles.heroTitle}>Beautiful presentations</h1>

        <p className={styles.heroDescription}>
          Captivate helps you create beautiful, branded presentation decks and
          experiences to engage your audience and potential customers.
        </p>

        <Button
          href="#button"
          variant="secondary"
          className={styles.heroButton}
        >
          Button text
        </Button>
      </div>

      <Image
        src={HeroImage}
        alt="financial-report"
        className={styles.heroImage}
      />
    </motion.section>
  );
};

export default HeroSection;
