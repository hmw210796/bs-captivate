"use client";

import React from "react";

import { motion } from "motion/react";

import styles from "./GetStartedSection.module.scss";
import Image from "next/image";

const fadeScaleInAnimation = {
  initial: { opacity: 0, transform: "scale(0.7)" },
  whileInView: { opacity: 1, transform: "scale(1)" },
  viewport: {
    once: true,
  },
};

const GetStartedSection = () => {
  return (
    <motion.section className={styles.section} {...fadeScaleInAnimation}>
      <div className={styles.cardContainer}>
        <h3 className={styles.cardTitle}>Get started today</h3>

        <p className={styles.cardDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et
          netus enim pellentesque pharetra semper at faucibus neque ac
          suspendisse.
        </p>
      </div>
    </motion.section>
  );
};

export default GetStartedSection;
