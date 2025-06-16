"use client";

import React, { useRef, useState } from "react";

import { motion } from "motion/react";

import styles from "./GetStartedSection.module.scss";
import Button from "@/components/General/Button/Button";

const fadeScaleInAnimation = {
  initial: { opacity: 0, transform: "scale(0.7)" },
  whileInView: { opacity: 1, transform: "scale(1)" },
  viewport: {
    once: true,
  },
};

const GetStartedSection = () => {
  const [email, setEmail] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    alert(`${email} signed up!`);
  };

  return (
    <motion.section className={styles.section} {...fadeScaleInAnimation}>
      <form className={styles.cardContainer} onSubmit={onSubmit}>
        <h3 className={styles.cardTitle}>Get started today</h3>

        <p className={styles.cardDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et
          netus enim pellentesque pharetra semper at faucibus neque ac
          suspendisse.
        </p>

        <div className={styles.inputContainer}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
            className={styles.input}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Button
            className={`${styles.formButton} ${styles.tabletUp__}`}
            size="large"
            type="submit"
          >
            Sign up
          </Button>
        </div>

        <Button
          className={`${styles.formButton} ${styles.mobile__}`}
          size="large"
          type="submit"
        >
          Sign up
        </Button>
      </form>
    </motion.section>
  );
};

export default GetStartedSection;
