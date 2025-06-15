"use client";

import React from "react";

import { motion } from "motion/react";

import styles from "./TestimonialSection.module.scss";
import Image from "next/image";

const TestimonialSection = () => {
  return (
    <motion.section
      className={styles.section}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{
        once: true,
      }}
    >
      <Image
        src={"/icons/logo-aperture.svg"}
        width={140}
        height={41}
        alt="logo-aperture"
        className={styles.logo}
      />

      <h2 className={styles.testimonial}>
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis mauris,
        libero tellus nec tortor libero arcu, sapien. Venenatis sit morbi ac
        amet amet.”
      </h2>

      <p className={styles.testimony}>Mikayla Smith, Marketing Director</p>
    </motion.section>
  );
};

export default TestimonialSection;
