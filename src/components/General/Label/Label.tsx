import React from "react";

import styles from "./Label.module.scss";

const Label: React.FC<LabelProps> = ({ children, className }) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <p className={`${styles.text}`}>{children}</p>
    </div>
  );
};

export default Label;
