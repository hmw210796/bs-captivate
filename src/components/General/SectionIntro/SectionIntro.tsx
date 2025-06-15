import React from "react";

import styles from "./SectionIntro.module.scss";

const SectionIntro: React.FC<SectionIntroProps> = ({ description, title }) => {
  return (
    <div className={styles.sectionIntro}>
      <h1 className={styles.sectionIntroTitle}>{title}</h1>

      <p className={styles.sectionIntroDescription}>{description}</p>
    </div>
  );
};

export default SectionIntro;
