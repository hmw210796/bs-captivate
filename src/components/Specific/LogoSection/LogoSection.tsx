"use client";

import React from "react";

import styles from "./LogoSection.module.scss";

import Image from "next/image";
import { motion, scale } from "motion/react";

const LogoArray = [
  {
    name: "Aperture",
    imageUrl: "/icons/logo-aperture.svg",
  },
  {
    name: "North Star",
    imageUrl: "/icons/logo-north-star.svg",
  },
  {
    name: "Triad",
    imageUrl: "/icons/logo-triad.svg",
  },
  {
    name: "Transfer Media",
    imageUrl: "/icons/logo-transfer-media.svg",
  },
  {
    name: "Cubic",
    imageUrl: "/icons/logo-cubic.svg",
  },
];

const LogoSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className={styles.logoSection}
      viewport={{
        once: true,
      }}
    >
      {LogoArray.map((logo) => (
        <Image
          src={logo.imageUrl}
          alt={logo.name}
          width={200}
          height={88}
          className={styles.logoImage}
          key={logo.name}
        />
      ))}
    </motion.section>
  );
};

export default LogoSection;
