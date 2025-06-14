import React from "react";

import styles from "./Hero.module.scss";
import Button from "@/components/General/Button/Button";

import HeroImage from "../../../../public/images/hero-1.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div>
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
    </section>
  );
};

export default Hero;
