"use client";

import React from "react";
import { motion } from "motion/react";

import styles from "./SplitFeature.module.scss";
import Image from "next/image";

const fadeScaleInAnimation = {
  initial: { opacity: 0, transform: "scale(0.7)" },
  whileInView: { opacity: 1, transform: "scale(1)" },
  viewport: {
    once: true,
  },
};

const SplitFeature: React.FC<SplitFeatureProps> = ({
  title,
  description,
  itemList,
  imageUrl,
  className,
}) => {
  return (
    <motion.section
      {...fadeScaleInAnimation}
      className={`${styles.splitFeature} ${className}`}
    >
      <div className={styles.splitFeatureLeft}>
        <h3 className={styles.splitFeatureTitle}>{title}</h3>
        <p className={styles.splitFeatureDescription}>{description}</p>

        <ul>
          {itemList.map((item) => (
            <ol key={item} className={styles.splitFeatureItems}>
              <Image
                src={"/icons/icon-tick.svg"}
                width={22}
                height={22}
                alt="icon-tick"
              />
              <p>{item}</p>
            </ol>
          ))}
        </ul>
      </div>

      <Image
        src={imageUrl}
        width={700}
        height={470}
        alt={title}
        className={styles.splitFeatureImage}
      />
    </motion.section>
  );
};

export default SplitFeature;
